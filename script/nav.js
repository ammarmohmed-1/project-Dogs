var open = document.querySelector(".open");
var nav = document.querySelector("nav > ul")

// console.log(nav)

open.addEventListener("click", function(){
    nav.classList.toggle ("navbar_none")
})