'use strict';

const base = [
  {
    url: '../img/pic01.jpeg',
    title: 'Аллея',
  },
  {
    url: '../img/pic02.jpeg',
    title: 'Верба',
  },
  {
    url: '../img/pic03.jpeg',
    title: 'Разноцветные пирожные',
  },
  {
    url: '../img/pic04.jpg',
    title: 'Пляж, море',
  },
  {
    url: '../img/pic05.jpeg',
    title: 'Фиолетовые розы',
  },
  {
    url: '../img/pic06.jpeg',
    title: 'Космос',
  },
  {
    url: '../img/pic07.jpeg',
    title: 'Зима, лес, дорога',
  },
  {
    url: '../img/pic08.jpeg',
    title: 'Белые цветы',
  },
];

const body = document.querySelector('body');
const app = document.querySelector('.app');

body.style.backgroundColor = '#5b6c90';

app.style.cssText = `
  max-width: 1280px; 
  margin: 0 auto; 
  border-left: 2px solid #ffffff; 
  border-right: 2px solid #ffffff;
  padding: 20px 0;`;

const ul = document.createElement('ul');
ul.style.cssText = `display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; list-style: none; padding: 0;`;

const createElement = ({ url, title }) => {
  const li = document.createElement('li');
  li.style.maxWidth = 500 + 'px';

  li.insertAdjacentHTML(
    'afterbegin',
    `
    <figure class="wrapper">
      <img class="image" src="${url}" alt="${title}"/>
      <figcaption class="title">${title}</figcaption>
    </figure>
    `,
  );

  return li;
};

const figure = document.querySelector('.wrapper');
console.log('figure: ', figure);

const render = (arr) => {
  for (const elem of arr) {
    const itemBase = createElement(elem);

    ul.append(itemBase);
    app.append(ul);
  }
};

render(base);
