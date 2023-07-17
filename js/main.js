const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;

// 페이지 아래로 스크롤 시 header 다크 스타일 적용
function handleDocumentScroll() {
  const scrollY = window.scrollY;
  if (scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
}

document.addEventListener("scroll", handleDocumentScroll);
