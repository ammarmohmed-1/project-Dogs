

// make page Buy now
var Buy = document.querySelectorAll(".Buy");

var Buy_now = document.querySelector(".Buy_now");
var close = document.getElementById("close");
var i;

for(i = 0 ; i < Buy.length; i++ ){
    Buy[i].addEventListener("click" , function(){
      Buy_now.style.display ="block"
    })
}
close.addEventListener("click" , function(){
  Buy_now.style.display ="none"
})





// style Our products 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});





// make an accordion

var accordion = document.getElementsByClassName("accordion");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

