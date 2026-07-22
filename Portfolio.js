//theme dark/light
var b = document.querySelector("body")
var btn = document.querySelector(".theme")
var nav = document.querySelector("#navbar-p")
var i =  document.querySelector("#icon")

btn.addEventListener("click",function(){
    b.classList.toggle("dark")
    nav.classList.toggle("navtheme")

    if (b.classList.contains("dark")) {
         i.classList.add("fa-sun")
        i.classList.remove("fa-moon")
        
    }else {
        i.classList.add("fa-moon")
         i.classList.remove("fa-sun")
     }
        
    
})
//certificate
let img = [
    "img/xlligent.jpeg",
    "img/pythoncertificate.jpeg",
]
let index = 0;
let slider = document.querySelector(".slider")
setInterval(function () {
    index++
    if (index >= img.length) {
        index = 0;
    }
    slider.src = img[index]
},3000)


//Project Popup
let bn = document.querySelectorAll(".bp")
let popup = document.getElementById("popup");
let popimg = document.getElementById("popimg");
let poph2 = document.getElementById("poph2");
let popp = document.getElementById("popp");
let poph4 = document.getElementById("poph4");
let pop = document.getElementById("pop");


bn.forEach(batn => {
    batn.addEventListener("click", function(){
        popimg.src = this.dataset.img;
        poph2.innerText = this.dataset.title;
        popp.innerText  = this.dataset.desc;
        poph4.innerText = this.dataset.head;
        pop.innerText  =  this.dataset.para;
        
        popup.style.display = "flex";

    })
});
 function closePopup() {
    popup.style.display = "none";
    
 }




