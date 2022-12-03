$(document).ready(function () {
  const en_btn = document.getElementById("en");
  const tr_btn = document.getElementById("tr");
  let locale = sessionStorage.getItem("locale");

  en_btn.addEventListener("click", () => {
    sessionStorage.setItem("locale", "en");
    window.location.href = `explore/en`;
  });

  tr_btn.addEventListener("click", () => {
    sessionStorage.setItem("locale", "tr");
    window.location.href = `explore/tr`;
  });
});
