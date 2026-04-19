const canvas = document.getElementById('main-header-canvas');
if (canvas) {
    const canvasBoard = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null };

    function resizeCanvas() {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.alpha = Math.random() * 0.5 + 0.1;
            this.radius = Math.random() * 1.5 + 1.0;
            this.color = Math.random() > 0.5 ? '#7c6fea' : '#22d3ee';
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }
        draw() {
            canvasBoard.beginPath();
            canvasBoard.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            canvasBoard.fillStyle = this.color;
            canvasBoard.globalAlpha = this.alpha;
            canvasBoard.fill();
        }
    }

    function initParticles() {
        const count = Math.min(100, Math.floor(canvas.width * canvas.height / 14000));
        particles = Array.from({ length: count }, () => new Particle());
    }

    function drawConnections() {
        const maxDist = 120;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < maxDist) {
                    canvasBoard.beginPath();
                    canvasBoard.moveTo(particles[i].x, particles[i].y);
                    canvasBoard.lineTo(particles[j].x, particles[j].y);
                    canvasBoard.strokeStyle = '#7c6fea';
                    canvasBoard.globalAlpha = (1 - dist / maxDist) * 0.2;
                    canvasBoard.lineWidth = 0.8;
                    canvasBoard.stroke();
                }
            }
        }
    }

    function drawCursorConnections() {
        if (mouse.x === null || mouse.y === null) return;
        const maxDist = 170;
        for (let i = 0; i < particles.length; i++) {
            const dx = particles[i].x - mouse.x;
            const dy = particles[i].y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < maxDist) {
                canvasBoard.beginPath();
                canvasBoard.moveTo(mouse.x, mouse.y);
                canvasBoard.lineTo(particles[i].x, particles[i].y);
                canvasBoard.strokeStyle = '#22d3ee';
                canvasBoard.globalAlpha = (1 - dist / maxDist) * 0.4;
                canvasBoard.lineWidth = 0.8;
                canvasBoard.stroke();
            }
        }
    }

    function drawCursor() {
        if (mouse.x === null || mouse.y === null) return;
        canvasBoard.beginPath();
        canvasBoard.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        canvasBoard.fillStyle = '#22d3ee';
        canvasBoard.globalAlpha = 0.8;
        canvasBoard.fill();
    }

    function animate() {
        canvasBoard.clearRect(0, 0, canvas.width, canvas.height);
        canvasBoard.globalAlpha = 1;
        particles.forEach(p => { p.update(); p.draw(); });
        drawConnections();
        drawCursorConnections();
        drawCursor();
        requestAnimationFrame(animate);
    }

    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    canvas.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    resizeCanvas();
    initParticles();
    animate();

    const ro = new ResizeObserver(() => {
        resizeCanvas();
        initParticles();
    });
    ro.observe(canvas);
}