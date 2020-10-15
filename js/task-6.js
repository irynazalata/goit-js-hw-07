// TASK 6 -----------------------

const input = document.querySelector('#validation-input');

input.addEventListener('blur', (event) => {

  if (input.getAttribute('data-length') == event.target.value.length) {
    input.classList.add('valid')
  } else {
    input.classList.add('invalid')
  }
})

input.addEventListener('focus', () => {
  input.classList.remove('invalid')
  input.classList.remove('valid')
})