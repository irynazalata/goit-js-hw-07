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
for (let i = 0; i < images.length; i++) {
  let listItem = document.createElement('li');
  let picture = document.createElement('img');
  list.append(listItem);
  listItem.append(picture);
  picture.src = `${images[i].url}`
  picture.setAttribute('alt', images[i].alt);
}
// ------- Variant 2 ---------------------------------
// const list = document.querySelector('#gallery')
// for (let i = 0; i < images.length; i++) {
//   list.insertAdjacentHTML('afterbegin', '<li></li>');
//   const listItem = document.querySelector('li')
//   listItem.insertAdjacentHTML('afterbegin', `<img src=${images[i].url} alt=${images[i].alt}>`);
// }