let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.nav-bar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
let loginform=document.querySelector('.login_form');
document.querySelector('#form_open').onclick =() =>{
    loginform.classList.toggle('active')
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('.login_form').classList.remove('active');
}





const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".card");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
let currentIndex = 0;
const numVisibleCards = 2; 
const showSlides = (startIndex) => {
    for (let i = 0; i < cards.length; i++) {
      const cardIndex = (startIndex + i) % cards.length;
      cards[cardIndex].style.display = i < numVisibleCards ? "block" : "none";
    }
  };
const slideLeft = () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showSlides(currentIndex);
};
const slideRight = () => {
  currentIndex = (currentIndex + 1) % cards.length;
  showSlides(currentIndex);
};
leftBtn.addEventListener("click", slideLeft);
rightBtn.addEventListener("click", slideRight);
showSlides(currentIndex);






const media=() =>{
    let q=matchMedia("(max-width:425px)");
    if(q.matches){
        const carousel = document.querySelector(".carousel");
        const cards = document.querySelectorAll(".card");
        const leftBtn = document.getElementById("left");
        const rightBtn = document.getElementById("right");
        let currentIndex = 0;
        const numVisibleCards = 1; 
        const showSlides = (startIndex) => {
            for (let i = 0; i < cards.length; i++) {
              const cardIndex = (startIndex + i) % cards.length;
              cards[cardIndex].style.display = i < numVisibleCards ? "block" : "none";
            }
          };
        const slideLeft = () => {
          currentIndex = (currentIndex - 1 + cards.length) % cards.length;
          showSlides(currentIndex);
        };
        const slideRight = () => {
          currentIndex = (currentIndex + 1) % cards.length;
          showSlides(currentIndex);
        };
        leftBtn.addEventListener("click", slideLeft);
        rightBtn.addEventListener("click", slideRight);
        showSlides(currentIndex);
         
    }
}








/*const carousel=document.querySelector(".carousel");
const arrowbtn=document.querySelectorAll(".wrapper i");
const firstcardwidth=carousel.querySelector(".card").offsetWidth;


let isdragging=false,startX,startscrollLeft;
const dragstart=(e)=>{
    isdragging=true;
    carousel.classList.add("dragging");
    startX=e.pageX;
    startscrollLeft=carsoule.scrollLeft;
}
arrowbtn.forEach(btn =>{
btn.addEventListener("click",()=>{
    carousel.scrollLeft += btn.id==="left"? -firstcardwidth : firstcardwidth;
});
});
const dragging=(e)=>{
    if(!isdragging) return;
    carousel.scrollLeft= startscrollLeft - (e.pageX - startX) ;
   
}
const dragstop=()=>{
    isdragging=false;
    carousel.classList.remove("dragging")
}
carousel.addEventListener("mousedown",dragstart);
carousel.addEventListener("mousemove",dragging);
document.addEventListener("mouseup",dragstop);




var swiper = new Swiper(".myswiper",{
    loop:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,

    effect:"coverflow",
    grabCursor:true,
    centeredSlides:true,
    slidesPreView:"auto",
    coverflowEffect:{
        rotate:0,
        stretch:0,
        deep:300,
        modifier:1,
        slidesShadow:false,

    },
    pagination:{
    el:".swiper-pagination",
    },

    

});
*/
/*const formOpenbtn=document.querySelector("#form_open"),
home=document.querySelector(".home"),
formContainer=document.querySelector(".form_container"),
formClosebtn=document.querySelector(".sclose"),
signupbtn=document.querySelector("#signup"),
loginbtn=document.querySelector("#signup"),
showpw=document.querySelector(".pw-hide");

formOpenbtn.addEventListener( "click",() => home.classList.add("show"))
formClosebtn.addEventListener( "click",() => home.classList.add("show"))

const formContainer=document.querySelector(".form_container");
const loginbtn=document.querySelector("#login");
const signupbtn=document.querySelector("#signup");

signupbtn.addEventListener( "click",() => {
    formContainer.classList.add('active')

})

loginbtn.addEventListener( "click",() => {
    formContainer.classList.remove('active')

})*/