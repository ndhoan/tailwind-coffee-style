const topMenu = document.getElementById("hnd-top-menu")
const toggleTopMenuIcon = document.getElementById("hnd-toggle-top-menu-icon")

document.addEventListener("click", (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    topMenu.classList.toggle("hnd-top-menu-expanded")
    topMenu.classList.toggle("hidden")
  } else {
    if (topMenu.classList.contains("hnd-top-menu-expanded")) {
      topMenu.classList.remove("hnd-top-menu-expanded")
      topMenu.classList.add("hidden")
    }
  }
})
