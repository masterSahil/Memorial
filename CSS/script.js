let body = document.querySelector("body");
let menuBtn = document.querySelector(".menuBtn");
let menuLinks = document.querySelector(".menuLinks");
let menuImg = document.querySelector(".menuImg");
let subMenuLinks = document.querySelectorAll(".subMenuLinks");


let count = 0;

menuBtn.addEventListener("click", () => {
    if (count === 0) {
        menuLinks.style.display = "flex";
        menuImg.setAttribute("src", "img/close.png");
        count = 1;
    } else {
        menuLinks.style.display = "none";
        menuImg.setAttribute("src","img/menu.png");
        count = 0;
    }
})

subMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuLinks.style.display = "none";
      menuImg.setAttribute("src", "img/menu.png");
      count = 0;
    });
});
