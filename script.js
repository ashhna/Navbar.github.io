let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let mysidebar = document.querySelector(".mysidebar");

btn.addEventListener("click", toggleNav);

function toggleNav() {
  sidebar.classList.toggle("mysidebar");
}
