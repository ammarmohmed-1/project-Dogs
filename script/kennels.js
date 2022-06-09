var card = document.querySelector(".card");

// style the page hennels
for(i = 1; i <= 20 ; i++){
  card.innerHTML += `<img class="imgDogs" src="image/card-${i}.jpg" alt="${i}">`
}
// make page Buy now



var Buy = document.querySelector(".Buy");
var Buy_now = document.querySelector(".Buy_now");
var close = document.getElementById("close");
var i;


// style the Buy now
Buy.addEventListener("click" , function(){
  Buy_now.style.display ="block"
});

close.addEventListener("click" , function(){
  Buy_now.style.display ="none"
})

// total price
var number = document.getElementById("number");

var Total = document.querySelector("#Total");

number.addEventListener("keyup",function(){
  let getTotal ="Total Price :" + +number.value *  +200 + " " + "KR";

  Total.innerHTML = getTotal;
})
