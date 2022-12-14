const _init = () => {
  const explore_btn = document.getElementById("explore_btn");

  explore_btn.addEventListener("click", () => {
    let locale = sessionStorage.getItem("locale");
    window.location.href = `/howToCreate/${locale}`;
  });
};

document.addEventListener("DOMContentLoaded", function () {
  _init();
});
