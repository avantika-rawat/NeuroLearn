// Hamburger Menu Toggle
const hamburgerIcon = document.getElementById('hamburger-icon');
const navbarLinks = document.querySelector('.navbar-links');
const btns = document.querySelector('.buttons');



// Toggle 'active' class for hamburger and buttons
hamburgerIcon.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  btns.classList.toggle('active');
});



// Scroll effect for Navbar (optimized)
window.onscroll = () => {
  const navbar = document.querySelector(".navbar");
  
  // Check scroll position and add/remove 'scrolled' class
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};



// Swiper.js configuration (Optimized)
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  speed: 500, // Reduced speed for smoother transitions
  preventClicksPropagation: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Lazy loading for smoother performance
  lazy: {
    loadOnTransitionStart: true,
    loadPrevNext: true,
  },
  
  // Event listener to handle click on swiper slide
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    },
  },
});


 const loginBtn = document.getElementById("loginBtn");
  const loginPopup = document.getElementById("loginPopup");
  const closeBtn = document.getElementById("closeBtn");

  loginBtn.addEventListener("click", () => {
    loginPopup.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    loginPopup.style.display = "none";
  });
