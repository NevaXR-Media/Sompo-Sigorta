$(document).ready(function () {
  const next_btn = document.getElementById("next");
  const inputs = document.getElementById("form").querySelectorAll("input");

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  const sendData = async (data) => {
    let locale = sessionStorage.getItem("locale");
    data.locale = locale;
    console.log(data);
    let response = await fetch(`${window.location.origin}/user/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    response = await response.json();
    console.log(response);
    window.location.href = `/image/${response.data._id}/${locale}`;
  };

  const validateFormInputs = () => {
    const invalidFields = [];
    const object = {};
    [...inputs].forEach((input) => {
      if (!input.value && input.attributes.required?.value) {
        invalidFields.push(input);
      } else if (
        input.attributes.name.value === "email" &&
        !validateEmail(input.value)
      ) {
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

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.classList.remove("invalid");
    });
  });

  next_btn.addEventListener("click", () => {
    const object = validateFormInputs();
    if (object) {
      next_btn.innerHTM = next_btn.attributes.text.value;
      let count = 0;
      setInterval(function () {
        let dots = "";
        for (let i = 0; i < count; i++) {
          dots += ".";
        }
        next_btn.innerHTML = `${next_btn.attributes.text.value}${dots}`;
        count = (count + 1) % 4;
      }, 500);
      sendData(object);
    }
  });
});
