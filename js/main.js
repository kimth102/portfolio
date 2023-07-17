// 페이지 아래로 스크롤 시 header 다크 스타일 적용
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// 페이지 아래로 스크롤 시 홈 화면 투명 적용
const home = document.querySelector("#home__container");
const homeHeight = home.offsetHeight;

document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const opacity = 1 - scrollY / homeHeight;
  home.style.opacity = opacity;
});
