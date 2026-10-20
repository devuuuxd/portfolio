document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const html = document.documentElement;
  const cornerImg = document.querySelector(".corner-art");
  if (!cornerImg) return;

  const isDark = localStorage.getItem("theme") === "dark";

  if (isDark) {
    body.classList.add("invert");
    html.classList.add("invert");
    cornerImg.src = "./photos/guts.png";
    cornerImg.style.width = "250px";
    cornerImg.style.right = "-40px";
    cornerImg.style.bottom = "-20px";
  } else {
    cornerImg.src = "./photos/griffith.png";
    cornerImg.style.width = "500px";
    cornerImg.style.right = "-60px";
    cornerImg.style.bottom = "-15px";
  }

  document.addEventListener("theme-change", () => location.reload());
});
