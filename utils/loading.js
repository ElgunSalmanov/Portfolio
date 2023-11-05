const loading = document.querySelector(".loading");
const header = document.querySelector(".head");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

function loadingPage() {
  loading.classList.remove("hidden");

  let time = setTimeout(() => {
    loading.classList.add("hidden");
    header.classList.remove("hidden");
    main.classList.remove("hidden");
    footer.classList.remove("hidden");
    clearInterval(time);
  }, 2000);
}

window.addEventListener("load", loadingPage);
