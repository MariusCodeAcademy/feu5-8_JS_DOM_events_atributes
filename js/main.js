'use strict';
console.log('main.js file was loaded');

// nusitaikau
const appContainer = document.getElementById('app');
// pasitikrinimas ar pataikem su nusitaikymu
if (appContainer === null) {
  console.warn('nera appContainer');
}

// console.log('appContainer ===', appContainer);

// sukurti funckija createTitle()
// sukuria ir patalpina appContaineryje h2 su textu 'I am new title'

function createTitle() {
  const h2El = document.createElement('h2');
  h2El.textContent = 'I am new title';
  appContainer.append(h2El);
}
// createTitle();

// document.getElementsByClassName('klasesPavadinimas')
// grazina kolekcija eleentu su argumente nurodytu pavadinimu
const listEl = document.getElementsByClassName('list');

listEl[0].style.background = 'tomato';

console.log('listEl ===', listEl);

// rasti visus elementus su klase listEl
const allLis = document.getElementsByClassName('listEl');
console.log('allLis ===', allLis);

// gaunam HMTLCollecion kurios el galim pasiekti per index
// nudazyti vidurion el fona

// allLis[0].style.background = 'blue';
// allLis[1].style.background = 'blue';
// allLis[2].style.background = 'blue';

for (let i = 0; i < allLis.length; i++) {
  const oneLiEl = allLis[i];
  oneLiEl.style.background = 'green';
}

// document.querySelector('css selectorius');
// grazins konkretu 1 elementa ne kolecija
// jei yra daugiau nei vienas jis grazins pirma

const listElQselector = document.querySelector('.list');
console.log('listElQselector ===', listElQselector);

const lisQselector = document.querySelectorAll('.listEl');
console.log(lisQselector);

// <p id="art__date">Date</p>
// nudazyti spalva melynai
const pDate = document.getElementById('art__date');
console.log('pDate ===', pDate);
pDate.style.color = 'blue';

// <p id="art__text">Lorem ipsum dolor</p>
// nudazyti fona geltonai
// tekta padaryti didziosiom raidem su javascript, ne su css
