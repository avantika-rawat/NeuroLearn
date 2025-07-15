
// Navbar animation
gsap.from(".navbar", {
  y: -80,
  duration: 1,
  delay: 0.5,
  ease: "power2.out"
});

// Hero Section animation
gsap.from(".hero-section", {
  y: 180,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "power3.out"
});

// Element animation
gsap.from(".element", {
  y: 180,
  opacity: 0,
  duration: 2,
  delay: 0.5,
  ease: "power3.out"
});

// Robo animation with scrollTrigger
gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "0% 95%",
    end: "50% 50%",
    scrub: 1,
    ease: "power2.out"
  }
}).to(".glow", {
  top: "550%",
  left: "0%"
});

// About section animation
gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top 30%",
    end: "top 30%",
    scrub: 1,
    ease: "power3.out"
  }
}).from(".about .about-text", {
  y: 180,
  opacity: 0,
  duration: 2,
  ease: "power2.out"
});

// Mouse animation with debounce
let debounceTimeout;
document.documentElement.addEventListener("mousemove", function (dets) { 
  clearTimeout(debounceTimeout); 
  debounceTimeout = setTimeout(function () {
    gsap.to(".cursor", {  
      x: dets.x,
      y: dets.y,
      duration: 0.5,  
      ease: "back.out"
    });
  }, 10); 
});

// Services section animations
gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    start: "top 55%",
    end: "top 50%",
    scrub: 1,
    ease: "power2.out"
  }
}).from(".services h2", {
  y: 180,
  opacity: 0,
  duration: 2
}).from(".services p", {
  y: 180,
  opacity: 0,
  duration: 1
});

// Service list cards animation
gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    start: "top 20%",
    end: "top -10%",
    scrub: 1,
    ease: "power3.out"
  }
}).from(".service-list .s", {
  y: 180,
  opacity: 0,
  duration: 2,
  stagger: 0.5 
});

// View More button animation
gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    start: "20% 40%",
    end: "top 40%",
    scrub: 1,
    ease: "power3.out"
  }
}).from(".services .viewMore-btn", {
  y: 180,
  opacity: 0,
  duration: 3
});

// Testimonials animation
gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonials",
    start: "top 88%",
    end: "top 70%",
    scrub: 1
  }
}).from(".testimonials h2", {
  y: 180,
  opacity: 0,
  duration: 3
}).from(".testimonials .Testimonials-p", {
  y: 180,
  opacity: 0,
  duration: 3
});

// Join page animations
gsap.timeline({
  scrollTrigger: {
    trigger: ".join-page",
    start: "top 48%",
    end: "top 30%",
    scrub: 1,
    ease: "power2.out"
  }
}).from(".join-page .second-half", {
  y: 180,
  opacity: 0,
  duration: 3
}).from(".first-half img", {
  x: -180,
  opacity: 0,
  duration: 4
});
