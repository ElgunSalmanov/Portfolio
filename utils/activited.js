const activPage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  if (link.href.includes(`${activPage}`)) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
