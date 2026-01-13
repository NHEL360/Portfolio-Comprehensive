// ========== DARK MODE TOGGLE ==========
const app = {
  toggleDark: function() {
    document.body.classList.toggle("dark");
    // Save preference in localStorage
    if(document.body.classList.contains("dark")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  },

  loadDarkMode: function() {
    if(localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark");
    }
  }
};

// Load dark mode preference on page load
app.loadDarkMode();


// ========== TYPING ANIMATION ==========
const typingNameElement = document.getElementById("typing-name");
const roleElement = document.getElementById("role");

// Customize your typing text here
const myName = "Nhel Meynard Licera";
const myRole = "Aspiring Computer Technician";

// Function to type text letter by letter
function typeText(element, text, delay = 100) {
  element.textContent = "";
  let index = 0;

  function type() {
    if(index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, delay);
    }
  }
  type();
}

// Trigger typing animations
window.addEventListener("DOMContentLoaded", () => {
  typeText(typingNameElement, myName, 120);
  setTimeout(() => {
    typeText(roleElement, myRole, 100);
  }, myName.length * 120 + 500); // Start role after name finishes
});


// ========== OPTIONAL: RESUME DOWNLOAD FALLBACK ==========
const resumeBtn = document.querySelector(".resume-btn");
resumeBtn.addEventListener("click", (e) => {
  const link = resumeBtn.getAttribute("href");
  
  // Optional: check if PDF exists
  fetch(link)
    .then((res) => {
      if(!res.ok) {
        e.preventDefault();
        alert("Resume PDF not found! Make sure 'resume.pdf' is in the correct folder.");
      }
    })
    .catch(() => {
      e.preventDefault();
      alert("Error accessing the PDF file.");
    });
});
