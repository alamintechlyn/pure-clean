
// nav toggle

const navBtn = document.querySelector('.navbarToggle svg');
const toggle = document.querySelector('.nav ul');
navBtn.addEventListener('click', navToggle);

function navToggle(){
    if(toggle.classList.contains("active")){
        toggle.classList.remove("active");
    }
    else{
        toggle.classList.add("active");
    }
}

// category slider 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4, 
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 15,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

// shop -cart slider 
var swiper = new Swiper(".my-shop-card", {
    slidesPerView: 4, 
    navigation: {
      nextEl: "#next-btn",
      prevEl: "#prev-btn",
    },
    spaceBetween: 15,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });


// testimonial-slider 

var swiper = new Swiper(".tesimonal-slider", {
  slidesPerView: 2, 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  }
});


  // performance accordian



var accordianCards = document.getElementsByClassName('perfomance-card');
var showToggles = document.getElementsByClassName('performance-Bottom');
var btnToggle = document.getElementsByClassName('performance-top');

for (let i = 0; i < accordianCards.length; i++) {
  accordianCards[i].addEventListener('click', function() {
    accordianFunc(i);
  });
}

function accordianFunc(index) {
  let currentToggle = showToggles[index]; 
  let currentBtn = btnToggle[index];

  if (currentToggle.classList.contains("performanceActive")) {
    currentToggle.classList.remove("performanceActive");
    currentBtn.classList.remove("btnactive"); 
  } else {
    currentToggle.classList.add("performanceActive");
    currentBtn.classList.add("btnactive");
  }
}


// ===============================================================
                  // Product page js
// ===================================================================



// product details slider

var swiper = new Swiper(".myProductSwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".myProductSwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


// client review slider

var swiper = new Swiper(".clientSlider", {
  slidesPerView: 1, 
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  loop: true
});