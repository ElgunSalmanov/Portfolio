const theme = localStorage.getItem("theme");
const moon = document.querySelector(".darkLight-moon");
const sun = document.querySelector(".darkLight-sun");

if (theme === "dark") document.body.classList.add("dark");

if (theme === "light") {
  moon.setAttribute("style", "display: block");
  sun.setAttribute("style", "display: none");
}

if (theme === "dark") {
  moon.setAttribute("style", "display: none");
  sun.setAttribute("style", "display: block");
}

moon.addEventListener("click", () => {
  document.body.classList.add("dark");

  moon.setAttribute("style", "display: none");
  sun.setAttribute("style", "display: block");

  if (theme === "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

sun.addEventListener("click", () => {
  document.body.classList.add("light");
  document.body.classList.remove("dark");

  sun.setAttribute("style", "display: none");
  moon.setAttribute("style", "display: block");

  if (theme === "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
