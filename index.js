const main = document.querySelector(".main");
const openMenu = document.querySelector(".open-menu");
const navBar = document.querySelector(".nav-links");
const body = document.body;

openMenu.addEventListener("click", () => {
    if(navBar.style.display === "flex") {
        navBar.style.display = "none";
        openMenu.src = "./images/icon-hamburger.svg";
        navBar.classList.remove("mobile");
    } else {
        navBar.style.display = "flex";
        openMenu.src = "./images/icon-close.svg";
        navBar.classList.add("mobile");
    }
});
