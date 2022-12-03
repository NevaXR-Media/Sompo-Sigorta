$(document).ready(function () {
  const create_btn = document.getElementById("createNFT");
  const userId_input = document.getElementById("userId")

  create_btn.addEventListener("click", () => {
    let locale = sessionStorage.getItem("locale");
    window.location.href = `/createNFT/${userId_input.value}/${locale}`;
  });
});
