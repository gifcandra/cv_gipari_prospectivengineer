// =========================
// MENU MOBILE
// =========================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

// =========================
// DARK MODE
// =========================
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeIcon.className = "fa-solid fa-sun";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeIcon.className = "fa-solid fa-sun";
  } else {
    localStorage.setItem("theme", "light");
    themeIcon.className = "fa-solid fa-moon";
  }
});

// =========================
// TYPING TEXT
// =========================
const typingText = document.getElementById("typingText");
const words = [
  "Web Developer",
  "Mobile Developer",
  "UI Enthusiast",
  "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingText.textContent = currentWord.substring(0, charIndex++);
  }

  let speed = isDeleting ? 55 : 95;

  if (!isDeleting && charIndex === currentWord.length + 1) {
    speed = 1200;
    isDeleting = true;
  }

  if (isDeleting && charIndex < 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// =========================
// SCROLL REVEAL
// =========================
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 90) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// =========================
// ACTIVE NAV LINK
// =========================
const sections = document.querySelectorAll("section[id]");

function activeMenu() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 120;
    const sectionId = section.getAttribute("id");
    const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active"));
      if (activeLink) activeLink.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activeMenu);

// =========================
// BACK TO TOP
// =========================
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// =========================
// CONTACT FORM DEMO
// =========================
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("message").value;

  // Ganti nomor ini dengan nomor WhatsApp kamu
  // Format: 62 + nomor tanpa angka 0 di depan
  const nomorWhatsApp = "6281953399673";

  const teksPesan = `Halo Robby, saya ${nama}.

Email saya: ${email}

Pesan:
${pesan}`;

  const urlWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(teksPesan)}`;

  window.open(urlWhatsApp, "_blank");

  contactForm.reset();
});
