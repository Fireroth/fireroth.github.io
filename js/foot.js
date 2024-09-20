function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function footerRandomColor() {
    var ranColor = getRandomColor();
    $("#footer").css("color", ranColor);
    console.log("Color of footer was set to " + ranColor);
  }