'use strict';
console.log('practice.js file was loaded');

// 1. pakeisti h1 antrastes texta 'Dynamic Heading'

const mainTitle = document.querySelector('h1');
mainTitle.textContent = 'Dynamic Heading Magic';

// 2. nustatyti h1 fonto dydi i 57px (style.fontSize = )
mainTitle.style.fontSize = '5.7rem';

// 3. <p id="art__text">Lorem ipsum dolor</p> gauti ir atspausdinti konsolelje sito elemento teksta
const pEl = document.getElementById('art__text');
const pElText = pEl.textContent;
console.log('pElText ===', pElText);

// 4. atvaizduoti konsoleje kolekcija arba nodelist is <ul class="colors"> elemento li elementu.

const liNodeListColors = document.querySelectorAll('.colors li');
console.log('liNodeListColors ===', liNodeListColors);

for (let i = 0; i < liNodeListColors.length; i++) {
  let liEl = liNodeListColors[i];
  console.log(liEl.textContent);
}

// 5. nusitaikyti ir pakeisti teksta <p id="art__date">Date</p> i siandienos data

let pDate = document.getElementById('art__date');
console.log('pDate ===', pDate);
pDate.textContent = 'siandienos data';

const now = new Date();
const dateInLtFormat = now.toLocaleString('lt-LT', { dateStyle: 'full' });
console.log('now ===', dateInLtFormat);

pDate.textContent = dateInLtFormat;

// 6. pakeisti paskutinio <ul class="colors"> elemento spalva i tomato

// nusitaikyti i sarasa
const colorsListEl = document.querySelector('.colors');
console.log('colorsListEl ===', colorsListEl);
// pasiimti jo paskutini elementa ir paspalvinti
colorsListEl.lastElementChild.style.color = 'tomato';

// 7. <p id="art__text">Lorem ipsum dolor</p> elemento texta padaryti didziosiomis raidemis, ne su css.

// nusitaikyti,
// pasiimti teksta
let elText = pEl.textContent;
console.log('elText ===', elText);
// textui padaryti toUpperCase
const textUpper = elText.toUpperCase();
console.log('textUpper ===', textUpper);
// irasyti atgal i elementa
pEl.textContent = textUpper;

// 8. prideti kiekvienam colors saraso elementui texta ' added'

// psiaudo kodas

// 1. nusitaikom i visus colors li - colekcija
const colorFullLiNodeList = document.querySelectorAll('.colors .colLi');
console.log('colorFullLiNodeList ===', colorFullLiNodeList);
// 2. sukam cikla
for (let liEl of colorFullLiNodeList) {
  // let text = liEl.textContent;
  // let textWithAdded = text + ' added';
  // 3. ciklo metu mes prie esamos li texto vertes pridedam ' added'
  // liEl.textContent = textWithAdded;
  // liEl.textContent = liEl.textContent + ' added';
  // liEl.textContent += ' added';
}

// 9. (uzsikomentuoti [8] uzd vygdyma) padaryti kad kiekvieno colors saraso li elemento fono spalva butu tokia kaip parasyta li texte

for (let liEl of colorFullLiNodeList) {
  // mums reikes:
  // paimti textine li reiksme
  let liText = liEl.textContent;
  console.log('liText ===', liText);
  // nudazyti fono spalva
  liEl.style.background = liText;
}
