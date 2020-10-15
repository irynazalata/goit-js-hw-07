// TASK 6 -----------------------

const input = document.querySelector('#validation-input');

input.addEventListener('blur', (event) => {

  if (input.getAttribute('data-length') == event.target.value.length) {
    input.classList.add('valid')
  } else {
    input.classList.add('invalid')
  }
  console.log(event.target.value.length)
})