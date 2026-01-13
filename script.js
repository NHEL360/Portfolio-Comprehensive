// Toggle between Portfolio and Resume View
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
