var filter = "none";
var dMode = "off";
document.getElementById("all").style.filter = filter;

console.log("%cHi!", "color:#EB5E28; font-size: 50px; text-shadow: 3px 3px #3f3e3b , 6px 6px #302f2f , 9px 9px #181818 ;");


document.addEventListener("keydown", e => {
  if (e.key.toLowerCase() === "e" && e.ctrlKey && e.shiftKey) { 
    if (dMode == "off") {document.designMode = "on"; console.log("designMode = on"); dMode = "on"}
    else {document.designMode = "off"; console.log("designMode = off"); dMode = "off"}}
  }, false);


document.addEventListener('keydown', (event) => {
  var name = event.key;
  if (name === 'K') {
    $("#all").css("filter", "invert()");
    console.log("Filter = invert");
    return;
  }
}, false);

document.addEventListener('keydown', (event) => {
  var name = event.key;
  if (name === 'O') {
    $("#all").css("filter", "none")
    console.log("Filter = none");;
    return;
  }
}, false);

document.addEventListener('keydown', (event) => {
  var name = event.key;
  if (name === 'P') {
    $("#all").css("filter", "hue-rotate(180deg)");
    console.log("Filter = hue rotation 180deg");
    return;
  }
}, false);

document.addEventListener('keydown', (event) => {
  var name = event.key;
  if (name === 'U') {
    $("#all").css("filter", "hue-rotate(90deg)");
    console.log("Filter = hue rotation 90deg");
    return;
  }
}, false);

document.addEventListener('keydown', (event) => {
  var name = event.key;
  if (name === 'L') {
    $("#all").css("filter", "hue-rotate(240deg)");
    console.log("Filter = hue rotation 240deg");
    return;
  }
}, false);

//------------------------------------------------------------

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  $("#footer").css("color", getRandomColor());
  console.log("Color of footer was set to " + getRandomColor());
}

function edit() {
  document.desgnMode = "on";
}
