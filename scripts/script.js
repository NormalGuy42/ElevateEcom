//Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  autoplay: {
    delay: 2000,
  },
  //Responsive breakpoints
  breakpoints:{
    0: {
      slidesPerView: 1
    },
    620:{
      slidesPerView: 2
    },
    800:{
      slidesPerView: 3
    },
    1000:{
      slidesPerView: 4
    }
  }
});


var nav_list = document.querySelector('.navbar');
document.addEventListener('click',function(e){
  
  try{
    if(e.target.closest('.burger')){
      nav_list.classList.toggle('showNav');
    }
    if(!e.target.closest('.burger') && nav_list.classList.contains('showNav')){
      if(!e.target.closest(".nav_ul")){
        nav_list.classList.remove('showNav');
      }
    }
  }catch(e){}
})

