let rotation = 0;
let deltaTime = 0;
let lastFrame = 0;
const canvas = document.getElementById("renderCanvas");
const gl = canvas.getContext("webgl", { antialias: true });

const vertexShaderSource = `
    attribute vec4 aVertexPosition;
    attribute vec2 aTexCoord;
    attribute vec4 aVertexColor;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    
    varying highp vec2 texCoord;
    varying mediump vec4 texColor;
    
    void main(void) {
        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
        texCoord = aTexCoord;
        texColor = aVertexColor;
    }`;

const fragmentShaderSource = `
    precision mediump float;

    varying highp vec2 texCoord;
    varying mediump vec4 texColor;

    uniform sampler2D uSampler;
    uniform bool useTexture;

    void main(void) {
        if (useTexture) {
            vec4 texColor = texture2D(uSampler, texCoord);
            if (texColor.a == 0.0)
                discard;
            gl_FragColor = texColor;
        } else {
            gl_FragColor = texColor;
        }
    }`;

const vertices = [
    // Front face
    -1, -1,  1,
     1, -1,  1,
     1,  1,  1,
    -1,  1,  1,
    
    // Back face
    -1, -1, -1,
    -1,  1, -1,
     1,  1, -1,
     1, -1, -1,

    // Top face
    -1,  1, -1,
    -1,  1,  1,
     1,  1,  1,
     1,  1, -1,

    // Bottom face
    -1, -1, -1,
     1, -1, -1,
     1, -1,  1,
    -1, -1,  1,

    // Right face
     1, -1, -1,
     1,  1, -1,
     1,  1,  1,
     1, -1,  1,

    // Left face
    -1, -1, -1,
    -1, -1,  1,
    -1,  1,  1,
    -1,  1, -1,
];

const indices = [
    0, 1, 2, 2, 3, 0,       // Front
    4, 5, 6, 6, 7, 4,       // Back
    8, 9, 10, 10, 11, 8,    // Top
    12, 13, 14, 14, 15, 12, // Bottom
    16, 17, 18, 18, 19, 16, // Right
    20, 21, 22, 22, 23, 20  // Left
];

const textureCoordinates = [
    0, 0, 1, 0, 1, 1, 0, 1, // Front
    0, 0, 0, 1, 1, 1, 1, 0, // Back
    0, 0, 0, 1, 1, 1, 1, 0, // Top
    0, 0, 1, 0, 1, 1, 0, 1, // Bottom
    0, 0, 0, 1, 1, 1, 1, 0, // Right
    0, 0, 1, 0, 1, 1, 0, 1, // Left
];


const faceColors = [
    // R,G,B,A
    [1, 0, 0, 1], // Red     -> Front
    [0, 1, 0, 1], // Green   -> Back
    [0, 0, 1, 1], // Blue    -> Top
    [1, 1, 0, 1], // Yellow  -> Bottom
    [1, 0, 1, 1], // Magenta -> Right
    [0, 1, 1, 1], // Cyan    -> Left
];

const colors = [];
for (const color of faceColors) {
    colors.push(...color, ...color, ...color, ...color);
}

function compileShader(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        return;
    }
    return shader;
}

function loadTextureFromFile(gl, url) {
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    const level = 0, internalFormat = gl.RGBA;
    const srcFormat = gl.RGBA, srcType = gl.UNSIGNED_BYTE;

    const image = new Image();
    image.onload = () => {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, image);

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    };
    image.src = url;
    return texture;
}

function loadTextureFromInput(gl, image) {
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    return texture;
}

// ------------------------- controls handling ----------------------------------
const widthInput = document.getElementById("resolutionWidth");
const heightInput = document.getElementById("resolutionHeight");

const speedSlider = document.getElementById("speedSlider");
const fovSlider = document.getElementById("fovSlider");

canvas.width = widthInput.value = window.innerWidth;
canvas.height = heightInput.value = window.innerHeight;

function updateCanvasSize() {
    const w = parseInt(widthInput.value);
    const h = parseInt(heightInput.value);

    canvas.width = w;
    canvas.height = h;
}

function getRotationAxis() {
    return [
        document.getElementById("rotationX").checked ? 1 : 0,
        document.getElementById("rotationY").checked ? 1 : 0,
        document.getElementById("rotationZ").checked ? 1 : 0
    ];
}

widthInput.addEventListener("input", updateCanvasSize);
heightInput.addEventListener("input", updateCanvasSize);

let speed = parseFloat(speedSlider.value);
speedSlider.addEventListener("input", () => {
    speed = parseFloat(speedSlider.value);
});

let fov = parseFloat(fovSlider.value);
fovSlider.addEventListener("input", () => {
    fov = parseFloat(fovSlider.value);
});

document.getElementById("textureUpload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const image = new Image();
    image.onload = function () {
        texture = loadTextureFromInput(gl, image);
    };
    image.src = URL.createObjectURL(file);
});

document.addEventListener("keydown", function (e) {
    if (e.key === "F1") {
        e.preventDefault(); // prevent browser help page
        const controls = document.getElementById("uiControls");
        const footer = document.getElementById("uiFooter");
        const isVisible = controls.style.display !== "none";

        controls.style.display = isVisible ? "none" : "block";
        footer.style.display = isVisible ? "none" : "block";
    }
});
// ------------------------------------------------------------------------------

// Default texture
let texture = loadTextureFromFile(gl, "./dirt.png");

const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

const shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);
gl.linkProgram(shaderProgram);

const programInfo = {
    program: shaderProgram,
    attribLocations: {
        vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
        textureCoord: gl.getAttribLocation(shaderProgram, "aTexCoord"),
        vertexColor: gl.getAttribLocation(shaderProgram, "aVertexColor"),
    },
    uniformLocations: {
        projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
        modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
        uSampler: gl.getUniformLocation(shaderProgram, "uSampler"),
        useTexture: gl.getUniformLocation(shaderProgram, "useTexture"),
    },
};

const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

const colorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

const indexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

const texCoordBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates), gl.STATIC_DRAW);

function render(gl, programInfo, rotation, fovFromSlider) {
    const textureToggle = document.getElementById("textureToggle");

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 1);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.BACK);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.useProgram(programInfo.program);

    const fov = fovFromSlider * Math.PI / 180;
    const aspectRatio = canvas.clientWidth / canvas.clientHeight;
    const nearPlane = 0.1;
    const farPlane = 100.0;
    const projectionMatrix = glMatrix.mat4.create();
    glMatrix.mat4.perspective(projectionMatrix, fov, aspectRatio, nearPlane, farPlane);

    const modelViewMatrix = glMatrix.mat4.create();
    glMatrix.mat4.translate(modelViewMatrix, modelViewMatrix, [0, 0, -6]);

    const useTexture = textureToggle.checked;
    gl.uniform1i(programInfo.uniformLocations.useTexture, useTexture);

    const axis = getRotationAxis();
    if (axis[0] !== 0 || axis[1] !== 0 || axis[2] !== 0) {
        glMatrix.mat4.rotate(modelViewMatrix, modelViewMatrix, rotation, axis);
    }

    // Position buffer
    {
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
    }

    // Texture coordinates
    if (useTexture) {
        gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
        gl.vertexAttribPointer(programInfo.attribLocations.textureCoord, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord);
        gl.disableVertexAttribArray(programInfo.attribLocations.vertexColor); // disable color

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.uniform1i(programInfo.uniformLocations.uSampler, 0);
    } else {
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        gl.vertexAttribPointer(programInfo.attribLocations.vertexColor, 4, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
        gl.disableVertexAttribArray(programInfo.attribLocations.textureCoord); // disable texture
    }

    gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
    gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);
}

function mainLoop(currentFrame) {
    deltaTime = currentFrame - lastFrame;
    lastFrame = currentFrame;

    rotation += deltaTime * speed;
    render(gl, programInfo, rotation, fov);
    requestAnimationFrame(mainLoop);
}      
requestAnimationFrame(mainLoop);