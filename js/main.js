console.log("%cHello!", "color:#725AC1; font-size: 50px; text-shadow: 3px 3px #3f3e3b , 6px 6px #302f2f , 9px 9px #181818 ;");
console.log("JQuery version: 3.6.0")

function alertDS() {alert("Discord server is under construction!");}
function alertUnavailable() {alert("Target is currently unavailable");}

var defaultTheme = localStorage.getItem('theme');
if(null === defaultTheme)
{
    localStorage.setItem('theme', 'light');
}

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const body = document.body;

const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.add(theme);
  }

darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  };
  
  lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
  
    localStorage.setItem('theme', 'light');
  };