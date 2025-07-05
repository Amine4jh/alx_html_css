const humbergerMenu = document.querySelector("#menu-icon")
const menuContainer = document.querySelector(".header ul")

humbergerMenu.addEventListener("click", () => {
    menuContainer.classList.toggle("active")
})
