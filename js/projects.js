"use strict";

// 프로젝트 필터링
const categories = document.querySelector(".categories");
const projects = document.querySelectorAll(".project");
const projectsContainer = document.querySelector(".projects");

categories.addEventListener("click", (event) => {
  const selectCategory = event.target;
  const filter = selectCategory.dataset.category;

  if (filter == null) {
    return;
  }

  handleActiveSelection(selectCategory);
  filterProjects(filter);
});

function handleActiveSelection(target) {
  const activeCategory = document.querySelector(".category--selected");
  activeCategory.classList.remove("category--selected");
  target.classList.add("category--selected");
}

function filterProjects(filter) {
  projectsContainer.classList.add("animation-out");

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "al" || filter === project.dataset.type) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });

    projectsContainer.classList.remove("animation-out");
  }, 200);
}
