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
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;

document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const opacity = 1 - scrollY / homeHeight;
  home.style.opacity = opacity;
});

// 페이지 아래로 스크롤 시 arrow up 표시
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY > window.innerHeight / 2) {
    arrowUp.classList.remove("arrow-up--hidden");
  } else {
    arrowUp.classList.add("arrow-up--hidden");
  }
});

// 메뉴 버튼 클릭시 메뉴 영역 토글
const navbarMenu = document.querySelector(".header__menu");
const navbarToggle = document.querySelector(".header__toggle");
navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// 메뉴 클릭 시 메뉴 영역 닫기
navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});
