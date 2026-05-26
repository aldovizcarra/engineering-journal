const toggle = document.getElementById("navToggle");
const menu = document.getElementById("navMenu");

toggle.addEventListener("click", (e) => {
  const isOpen = toggle.classList.toggle("is-open");
});
