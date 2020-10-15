// TASK 5 -----------------------

const input = document.querySelector('#name-input');
const enteredName = document.querySelector('#name-output');

input.addEventListener('input', (event) => {
  enteredName.textContent = event.target.value;
  if (input.value === '') {
    enteredName.textContent = 'незнайомець';
  }
})