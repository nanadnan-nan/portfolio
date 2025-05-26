// Typing Animation
const typingText = document.getElementById("typing-text");
const textArray = [
  "👨‍💻 Freelance Web Developer",
  "Spesialis Website UMKM & Landing Page Penjualan",
  "Bikin Bisnismu Lebih Online & Cepat Closing!",
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const currentText = textArray[textIndex];

  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length;
    typeSpeed = 500;
  }

  setTimeout(typeText, typeSpeed);
}

typeText();

// Navbar Scroll Effect
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Active nav link on scroll
  const sections = document.querySelectorAll("section");
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Smooth scroll for navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    const offsetTop = targetSection.offsetTop - 80;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});

// CTA Button smooth scroll
const ctaButton = document.querySelector(".cta-button");
ctaButton.addEventListener("click", (e) => {
  e.preventDefault();
  const contactSection = document.querySelector("#contact");
  const offsetTop = contactSection.offsetTop - 80;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });
});

// Scroll animations
const animateElements = document.querySelectorAll(".animate-on-scroll");

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
    }
  });
}, observerOptions);

animateElements.forEach((element) => {
  observer.observe(element);
});

// Scroll to top button
const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");

  if (mobileMenu && navMenu) {
    mobileMenu.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });

    // Optional: close menu when a link is clicked (for better UX)
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        mobileMenu.classList.remove("active");
      });
    });
  }
});
