'use strict';
console.log('qSelector.js file was loaded');

// document.querySelector('css selectorius');
// grazins konkretu 1 elementa ne kolecija
// jei yra daugiau nei vienas jis grazins pirma

const mainTitle = document.querySelector('h1');
// mainTitle.textContent = 'Pakeista';
mainTitle.style.fontSize = '5rem';

// padidinti texta i diziasas raides su string.toUpperCase()

// 1. gauti elemento textine reiksme
const h1Textas = mainTitle.textContent;
console.log('h1Textas ===', h1Textas);
// 2. ta reiksme padidinti su string.toUpperCase()
const h1TextasDidRaidem = h1Textas.toUpperCase();
console.log('h1TextasDidRaidem ===', h1TextasDidRaidem);
// 3. irasyti i elementa pakeista reikme
mainTitle.textContent = h1TextasDidRaidem;

// nusitaikyti i .list el

const listEl = document.querySelector('.list');
listEl.style.color = 'blue';

// document.querySelectorAll('css selectorius');
// grazins visu elementu node lista (i masyva panasia struktura)
// nusitaikyti i visus Li elementus

const allLiOnPage = document.querySelectorAll('li');
console.log('allLiOnPage ===', allLiOnPage);

// nusitaikyti i visus li elementus esancius .list klases elemento viduje
const firstListLis = document.querySelectorAll('.list li');
console.log('firstListLis ===', firstListLis);

// uzdeti visiems firstListLis elementams padding 10px;
// jei turim kolecija, nodeList ar masva su elementais.
// tai pakeitimai atliekami cikle konkreciai reiksmei
for (let i = 0; i < firstListLis.length; i++) {
  firstListLis[i].style.padding = '10px';
}
