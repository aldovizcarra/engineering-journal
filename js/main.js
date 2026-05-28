const toggle = document.getElementById("navToggle");
const menu = document.getElementById("navMenu");
let menuOpen = false;

function updateMenu() {
  const isDesktop = window.innerWidth >= 768;

  if (isDesktop) {
    menu.setAttribute("aria-hidden", "false");
  } else {
    menu.setAttribute("aria-hidden", String(!menuOpen));
    toggle.setAttribute("aria-expanded", String(menuOpen));
    toggle.setAttribute(
      "aria-label",
      menuOpen ? "Close navigation menu" : "Open navigation menu",
    );
  }

  toggle.classList.toggle("is-open", menuOpen && !isDesktop);
  menu.classList.toggle("is-open", menuOpen && !isDesktop);
}

function debounce(fn, delay) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}
