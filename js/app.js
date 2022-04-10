const menuToggle = document.querySelector("#menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    if (menuToggle.classList.contains("hamburger-menu")) {
        menuToggle.classList = "close";
        navbar.style.right = 0;
    } else {
        menuToggle.classList = "hamburger-menu";
        navbar.style.right = "-40vw";
    }
})