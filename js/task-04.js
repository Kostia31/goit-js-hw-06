

const counterValueRef = document.querySelector('#value')
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

let counterValue = 0

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    counterValueRef.textContent = counterValue;
    
})

decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    counterValueRef.textContent = counterValue;
  
});

