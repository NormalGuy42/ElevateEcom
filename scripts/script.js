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