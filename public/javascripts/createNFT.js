$(document).ready(function () {
  const userId_input = document.getElementById("userId");
  const mint_btn = document.getElementById("mintNFT");
  const inputs = document.querySelectorAll("#createNFTScreen input");
  var modal = document.getElementById("nftModal");
  var span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  const validateFormInputs = () => {
    const invalidFields = [];
    const object = {};
    [...inputs].forEach((input) => {
      if (!input.value && input.attributes.required?.value) {
        invalidFields.push(input);
      }
      const fieldName = input.attributes.name.value;
      object[fieldName] = input.value;
    });
    if (invalidFields.length > 0) {
      invalidFields.forEach((input) => {
        input.classList.add("invalid");
      });
      return;
    }
    return object;
  };

  const updateUser = async (object) => {
    let response = await fetch(
      `${window.location.origin}/user/${userId_input.value}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(object),
      }
    );
    modal.style.display = "flex";
    // response = await response.json();
  };

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.classList.remove("invalid");
    });
  });

  mint_btn.addEventListener("click", () => {
    const object = validateFormInputs();
    if (object) {
      updateUser(object);
    }
  });
});
