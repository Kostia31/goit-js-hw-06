function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlEl = document.querySelector("#controls");
const inputControls = controlEl.firstElementChild;
const createButtonEl = document.querySelector("button[data-create]");
const destroyButtonEl = document.querySelector("button[data-destroy]");
const parentsBox = document.querySelector("#boxes");

createButtonEl.addEventListener("click", (event) => {
  event.preventDefault();
  const numbersEl = Number(inputControls.value);

  function createBoxes(numbersEl) {
    for (let i = 0; i < numbersEl; i += 1) {
      const div = document.createElement("div");
      div.style.backgroundColor = getRandomHexColor();
      div.classList = "random-box";
      let widths = Number.parseInt((div.style.width = "30px"));
      div.style.height = "30px";
      parentsBox.append(div);
      console.log(div);
    }
  }

  createBoxes(numbersEl);
});
