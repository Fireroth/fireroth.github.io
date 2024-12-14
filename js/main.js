console.log(
  "%cHello!",
  "color:#725AC1; font-size: 50px; text-shadow: 3px 3px #3f3e3b , 6px 6px #302f2f , 9px 9px #181818 ;"
);
console.log("JQuery version: 3.6.0");

function alertDS() {
  alert("Discord server is under construction!");
}
function alertUnavailable() {
  alert("Target is currently unavailable");
}

var defaultTheme = localStorage.getItem("theme");
if (null === defaultTheme) {
  localStorage.setItem("theme", "dark");
}

const darkButton = document.getElementById("dark");
const body = document.body;

const theme = localStorage.getItem("theme");

if (theme) {
  body.classList.add(theme);
}

darkButton.onclick = () => {
  if (localStorage.getItem("theme") == "dark") {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
  }
};

function searchProjects() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();
  const projects = document.querySelectorAll(".projects > div");

  projects.forEach((project) => {
    const title = project.querySelector("h3").textContent.toLowerCase();
    const description = project.querySelector("p").textContent.toLowerCase();
    const tags = project.dataset.tags.toLowerCase();

    // Show the project if the filter matches title, description, or tags
    if (
      title.includes(filter) ||
      description.includes(filter) ||
      tags.includes(filter)
    ) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}
