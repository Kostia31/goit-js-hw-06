const inputEl = document.querySelector("#validation-input");
const inputDataValue = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", (event) => {
    const inputLength = event.currentTarget.value.length;
    if (inputLength !== inputDataValue) {
      inputEl.classList.add("invalid");
    } else {
        inputEl.classList.replace("invalid", 'valid');
    }
});