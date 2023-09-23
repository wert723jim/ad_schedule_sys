// target the input element
const input = document.getElementById("action__input_1");
const checkAll = document.getElementById("checkAll");
const checkboxes = document.querySelectorAll('.items_checkbox')
// click handler
const toggleMenu = event => {
  // target the menu element
  const menu = document.getElementById("action__menu_1");
  menu.classList.toggle("hidden");
};
// bind the event
input.addEventListener("click", toggleMenu);

// dark mode
// target the switch element
const darkModeToggle = document.getElementById("dark__mode__toggle");
// toggle handler
const darkModeToggleHandler = event => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};
// bind the event
darkModeToggle.addEventListener("change", darkModeToggleHandler);

checkAll.addEventListener('change', event => {
  if(checkAll.checked) {
    checkboxes.forEach(b => b.checked = true)
  } else {
    checkboxes.forEach(b => b.checked = false)
  }
})