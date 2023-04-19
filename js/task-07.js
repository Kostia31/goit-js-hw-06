const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
console.log(inputEl.value);
console.log(textEl.textContent);


inputEl.addEventListener('input', (event) => {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
    
})