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
    let sizeDiv = 20;
    for (let i = 0; i < numbersEl; i += 1) {
      sizeDiv += 10;
      const div = document.createElement("div");
      div.style.backgroundColor = getRandomHexColor();
      div.style.width = `${sizeDiv}px`;
      div.style.height = `${sizeDiv}px`;
      parentsBox.append(div);
    }
  }
  createBoxes(numbersEl);
});

destroyButtonEl.addEventListener('click', (event) => {
  
  location.reload();
  parentsBox.remove(parentsBox.children);
  console.log(inputControls.value);
})
