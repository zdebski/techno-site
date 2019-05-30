//js for menu

document.addEventListener("DOMContentLoaded", function(){   
    
var navButton = document.querySelector(".navigation-button");
var navMenu = document.querySelector(".navigation-menu");
var win = window;

var el = document.getElementsByClassName('carousel-control-next');


function openMenu(event) {
  navButton.classList.toggle("active");
  navMenu.classList.toggle("active");

  event.preventDefault();
  event.stopImmediatePropagation();
}


function closeMenu(event) {
  if (navButton.classList.contains("active")) {
    navButton.classList.remove("active");
    navMenu.classList.remove("active");
  }
}

navButton.addEventListener("click", openMenu, false);


win.addEventListener("click", closeMenu, false);

    
})

