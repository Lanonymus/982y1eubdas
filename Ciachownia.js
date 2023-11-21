


document.addEventListener("DOMContentLoaded", function() {
  var header = document.querySelector(".header");

  window.addEventListener("scroll", function() {
      if (window.scrollY > 0) {
          header.classList.add("scrolled");
      } else {
          header.classList.remove("scrolled");
      }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  // Get all your navigation links
  const navLinks = document.querySelectorAll('.navbar a');

  // Add click event listener to each link
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      // Prevent the default link behavior
      

      // Remove the 'active' class from all links
      navLinks.forEach(function(innerLink) {
        innerLink.classList.remove('active');
      });

      // Add the 'active' class to the clicked link
      link.classList.add('active');
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const scrollContainer = document.querySelector('[data-scroll-container]');
  const scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      multiplier: 0.5,
      // Other options...
  });

  // Handle navigation clicks
  document.querySelectorAll('.navbar a, .home-btn a').forEach(element => {
      element.addEventListener('click', function (e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1); // Remove the '#'
          const targetElement = document.getElementById(targetId); // Targets the element

          scroll.scrollTo(targetElement);
      });
  });

  // Handle header scroll behavior
  scroll.on('scroll', function (obj) {
      const header = document.querySelector('.header');
      if (obj.scroll.y > 0) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
});









let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');

}





let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');

}

var swiper = new Swiper(".product-row", {
    slidesPerView: 1,
    loop:true,
    spaceBetween: 30,
    centeredSlides:true,
    /*autoplay:{
        delay:9500,
        disableOnInteraction:false
    },
    */
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

var swiper = new Swiper(".blogs-row", {
    loop:true,
    spaceBetween: 30,
    centeredSlides:true,
    /*autoplay:{
        delay:9500,
        disableOnInteraction:false
    },
    */
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextE1 :".swiper-button-next",
        prevE1 :".swiper-button-prev",
    
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });

  var swiper = new Swiper(".review-row", {
    slidesPerView: 1,
    loop:true,
    spaceBetween: 30,
    centeredSlides:true,
    /*autoplay:{
        delay:9500,
        disableOnInteraction:false
    },
    */
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },

    },
  });

