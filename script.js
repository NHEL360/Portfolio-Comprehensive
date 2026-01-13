// ===== DARK MODE =====
const app = {
  toggleDark: function() {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode",
      document.body.classList.contains("dark") ? "enabled" : "disabled"
    );
  },
  loadDarkMode: function() {
    if(localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark");
    }
  }
};
app.loadDarkMode();

// ===== TYPING EFFECT =====
const typingName = document.getElementById("typing-name");
const role = document.getElementById("role");

const myName = "Nhel Meynard Licera";
const myRole = "Aspiring Computer Technician";

function typeText(element, text, speed) {
  let i = 0;
  element.textContent = "";
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

window.addEventListener("DOMContentLoaded", () => {
  typeText(typingName, myName, 120);
  setTimeout(() => {
    typeText(role, myRole, 80);
  }, myName.length * 120 + 500);
});

// ===== VIEW TOGGLE =====
function toggleView() {
  const portfolio = document.getElementById("portfolioView");
  const resume = document.getElementById("resumeView");
  const btn = document.getElementById("toggleBtn");

  if (portfolio.style.display === "none") {
    portfolio.style.display = "block";
    resume.style.display = "none";
    btn.textContent = "📄 Resume View";
  } else {
    portfolio.style.display = "none";
    resume.style.display = "block";
    btn.textContent = "💼 Portfolio View";
  }
}

// ===== GO TO RESUME =====
function goToResume() {
    const portfolio = document.getElementById("portfolioView");
    const resume = document.getElementById("resumeView");
    const btn = document.getElementById("toggleBtn");

    portfolio.style.display = "none";
    resume.style.display = "block";
    btn.textContent = "💼 Portfolio View";
}

// ===== PRINT / SAVE AS PDF =====
function printResume() {
    const resumeSection = document.getElementById("resumeView");
    const originalBody = document.body.innerHTML;

    document.body.innerHTML = resumeSection.innerHTML;
    window.print();
    document.body.innerHTML = originalBody;

    // Reload to restore scripts
    window.location.reload();
}
