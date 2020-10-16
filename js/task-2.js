// TASK 2 -----------------------

const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

ingredients.forEach(el => {
  const listItemRef = document.createElement('li')
  const listRef = document.querySelector('#ingredients')
  listItemRef.textContent = el
  listRef.appendChild(listItemRef)
}
)