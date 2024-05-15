function openHamburgerNav() {
    var x = document.getElementById("navigationBar");
    if (x.className === "navbar") {
      x.className += " responsive-nav";
    } else {
      x.className = "navbar";
    }
  }