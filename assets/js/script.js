document.addEventListener("DOMContentLoaded", function () {

// new products 
  const swiperFour = new Swiper(".swiper-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
    },
  });

  // featured products
  const swiperTwo = new Swiper(".swiper-two", {
    slidesPerView: 2,
    spaceBetween: 20,
    grabCursor: false,
    loop: true,
    keyboard: {
      enabled: true,
    },

    navigation: {
      nextEl: ".swiper-two-button-next",
      prevEl: ".swiper-two-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
    },
  });
});



// open mobile menu 
var openMenuButton = document.getElementById('openmenu');
var mobileMenuBar = document.getElementById('mobilemenubar');

function openMenu() {
  mobileMenuBar.style.width = '100%';
  mobileMenuBar.style.opacity = '1';
  mobileMenuBar.style.visibility = 'visible';
}

// close mobile menu 
function closeMenu() {
  mobileMenuBar.style.width = '0';
  mobileMenuBar.style.opacity = '0';
  mobileMenuBar.style.visibility = 'hidden';
}

openMenuButton.addEventListener('click', openMenu);