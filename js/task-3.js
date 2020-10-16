// TASK 3 -----------------------

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('#gallery')
images.forEach(el => {
  list.insertAdjacentHTML('beforeend',`<li><img src="${el.url}" alt="${el.alt}"></li>`)
})

// ------- Variant 2 ---------------------------------

// const list = document.querySelector('#gallery')
// images.forEach(el => {
//   let listItem = document.createElement('li');
//   let picture = document.createElement('img');
//   list.append(listItem);
//   listItem.append(picture);
//   picture.src = `${el.url}`
//   picture.setAttribute('alt', el.alt);
// }
// )