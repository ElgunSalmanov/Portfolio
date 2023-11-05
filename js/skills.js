document.addEventListener("DOMContentLoaded", function () {
  let lang = {
    html: 90,
    css: 90,
    scss: 90,
    javascript: 75,
    c: 50,
    ms: 65,
    bootstrap: 55,
    react: 60,
  };

  let delay = 700;
  let multiply = 1;

  for (let language in lang) {
    if (lang.hasOwnProperty(language)) {
      let percent = lang[language];

      setTimeout(function () {
        document.getElementById(language + "-pourcent").innerHTML =
          percent + "%";
        document.getElementById("progress-" + language).style.width =
          percent + "%";
      }, delay * multiply);

      multiply++;
    }
  }
});
