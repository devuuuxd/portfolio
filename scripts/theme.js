document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".theme-toggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("invert");
    toggleBtn && (toggleBtn.textContent = "☀️");
  } else {
    toggleBtn && (toggleBtn.textContent = "🌙");
  }

  toggleBtn?.addEventListener("click", () => {
    body.classList.toggle("invert");

    if (body.classList.contains("invert")) {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "🌙";
    }

    document.dispatchEvent(new Event("theme-change"));
  });
});
