// DARK MODE
const app = {
  toggleDark() {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode",
      document.body.classList.contains("dark") ? "enabled" : "disabled"
    );
  },
  loadDarkMode() {
    if(localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark");
    }
  }
};
app.loadDarkMode();

// TYPING EFFECT
const typingName = document.getElementById("typing-name");
const role = document.getElementById("role");

const myName = "Nhel Meynard Licera";
const myRole = "Aspiring Computer Technician";

function typeText(element, text, speed) {
  let i = 0;
  element.textContent = "";
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i++);
      setTimeout(typing, speed);
    }
  }
  typing();
}

window.addEventListener("DOMContentLoaded", () => {
  typeText(typingName, myName, 120);
  setTimeout(() => typeText(role, myRole, 80), myName.length * 120 + 300);
});

// SMOOTH RESUME VIEW
function goToResume() {
  document.getElementById("resumeView").scrollIntoView({ behavior: "smooth" });
}

// PRINT
function printResume() {
  window.print();
}

// REVEAL ON SCROLL
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(r => {
    const windowHeight = window.innerHeight;
    const elementTop = r.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      r.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
