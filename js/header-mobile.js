
let closeMenu = document.querySelector(".header__nav-mobile-open");
let hamburgerMenu = document.querySelector(".header__nav-mobile-close");
let mobileMenuItems = document.querySelector(".header__nav-mobile-items");

closeMenu.addEventListener("click", ()=>{
    hamburgerMenu.classList.toggle("hide-elem");
    mobileMenuItems.classList.toggle("hide-elem");
    closeMenu.classList.add("hide-elem");
})
hamburgerMenu.addEventListener("click", ()=>{
    closeMenu.classList.toggle("hide-elem");
    mobileMenuItems.classList.toggle("hide-elem");
    hamburgerMenu.classList.add("hide-elem")
})