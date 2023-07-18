"use strict";

// 메뉴 가져오기
const navItems = document.querySelectorAll(".header__menu__item");
const sectionIds = [];
navItems.forEach((navItem) => {
  sectionIds.push(navItem.hash);
});

// 메뉴에 해당하는 섹션 가져오기
const sections = sectionIds.map((sectionId) =>
  document.querySelector(sectionId)
);

// 섹션 별 화면 표시 여부
const visibleSections = sectionIds.map(() => false);
let activeNavItem = navItems[0];

// IntersectionObserver 설정
const options = {
  rootMargin: "-20% 0px 0px 0px",
  threshold: [0, 0.95],
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  let isSelectLastSection;

  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;

    isSelectLastSection =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.9;
  });

  const selectNavIndex = isSelectLastSection
    ? sectionIds.length - 1
    : findfirstIntersecting(visibleSections);
  selectNavItem(selectNavIndex);
}

function findfirstIntersecting(visibleSections) {
  const index = visibleSections.indexOf(true);
  return index >= 0 ? index : 0;
}

function selectNavItem(index) {
  const navItem = navItems[index];
  if (!navItem) return;
  activeNavItem.classList.remove("active");
  navItem.classList.add("active");
  activeNavItem = navItem;
}
