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
