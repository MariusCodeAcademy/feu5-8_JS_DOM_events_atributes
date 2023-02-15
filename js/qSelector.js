'use strict';
console.log('qSelector.js file was loaded');

// document.querySelector('css selectorius');
// grazins konkretu 1 elementa ne kolecija
// jei yra daugiau nei vienas jis grazins pirma

const mainTitle = document.querySelector('h1');

mainTitle.textContent = 'Pakeista';

mainTitle.style.fontSize = '5rem';
