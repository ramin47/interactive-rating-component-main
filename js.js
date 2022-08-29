
let btnSub = document.getElementById("btn-submit")


document.getElementById("one").addEventListener("click", ()=>activeState(0))
document.getElementById("two").addEventListener("click", ()=>activeState(1))
document.getElementById("three").addEventListener("click", ()=>activeState(2))
document.getElementById("four").addEventListener("click", ()=>activeState(3))
document.getElementById("five").addEventListener("click", ()=>activeState(4))


const ratingCollection = document.getElementsByClassName("btn")
let btn = 0;

function activeState(index){
    for(let i=0; i<ratingCollection.length; i++){
        ratingCollection[i].classList.remove("active")
    }
    ratingCollection[index].classList.add("active")
    btn = index + 1
    console.log(btn)
}



var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}



function thanks() {
   
    document.querySelector(".main-div").innerHTML =
        `<div>
        <img class="img-thanks" src="/images/illustration-thank-you.svg" alt="star-logo">
        <p class="parag-select">You selected ${btn} out of 5</p>
        <h1 class="header-one">Thank You!</h1>
        <p class="parag-one">We apprciate you taking
         the time to give a rating.If you ever need more support, don't hesitate to
         get in touch!</p>
        
        </div>`
    
    
    }


 btnSub.addEventListener("click", thanks)



