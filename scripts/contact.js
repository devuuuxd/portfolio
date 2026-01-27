document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const cornerImg = document.querySelector(".corner-art");
  if (!cornerImg) return;

  const isDark = localStorage.getItem("theme") === "dark";

  if (isDark) {
    body.classList.add("invert");
    cornerImg.src = "./photos/griffith1.png";
    cornerImg.style.width = "400px";
    cornerImg.style.right = "-40px";
    cornerImg.style.bottom = "-50px";
  } else {
    cornerImg.src = "./photos/guts1.png";
    cornerImg.style.width = "400px";
    cornerImg.style.right = "-20px";
    cornerImg.style.bottom = "-15px";
  }

  document.addEventListener("theme-change", () => location.reload());
});
