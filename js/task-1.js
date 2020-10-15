// TASK 1 -----------------------

const listRef = document.querySelectorAll('.item')
console.log(`У списку ${listRef.length} категорії.`)


const headingRef = document.querySelectorAll('.item > h2')
headingRef.forEach(el => console.log(`Категорія: ${el.textContent}\nКількість елементів: ${el.nextElementSibling.children.length}`))
