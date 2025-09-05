document.addEventListener("DOMContentLoaded", function () {
    const projectGrids = document.querySelectorAll(".projects .project-grid");
    const images = document.querySelectorAll(".projects img");
    const skeletons = document.getElementById("project-skeletons");

    let loadedCount = 0;

    function showProjects() {
        if (skeletons) skeletons.style.display = "none";

        projectGrids.forEach(grid => {
            grid.style.display = "grid";
            requestAnimationFrame(() => {
                grid.style.opacity = "1";
            });
        });
    }

    images.forEach(img => {
        if (img.complete) {
            loadedCount++;
            if (loadedCount === images.length) showProjects();
        } else {
            img.addEventListener("load", () => {
                loadedCount++;
                if (loadedCount === images.length) showProjects();
            });
            img.addEventListener("error", () => {
                loadedCount++;
                if (loadedCount === images.length) showProjects();
            });
        }
    });
});