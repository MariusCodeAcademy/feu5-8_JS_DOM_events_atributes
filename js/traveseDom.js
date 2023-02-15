'use strict';
console.log('traveseDom.js file was loaded');

/*
<article class="art card">
  <h2 id="art__title" class="art__title">Main title</h2>
  <p id="art__date">Date</p>
  <p id="art__text">Lorem ipsum dolor</p>
</article>
*/

// <p id="art__date">Date</p>
// nudazyti spalva melynai
const pDate = document.getElementById('art__date');
console.log('pDate ===', pDate);
pDate.style.color = 'blue';

// h2 elementas esantis pries pDate previousElementSibling
let h2El = pDate.previousElementSibling;
h2El.style.color = 'tomato';

// nudazyti article fona zaliai
let articleEl = pDate.parentElement;
articleEl.style.backgroundColor = 'green';
articleEl.style.padding = '15px';
articleEl.style.borderRadius = '15px';

// kas yra artice el vaikiniai elementai
let artChildren = articleEl.children;
console.log('artChildren ===', artChildren);

// nudazyti article trecia vaikini elementa geltonai
artChildren[2].style.backgroundColor = 'yellow';

// nuo pDate element pasiekti paskutini list elementa
pDate.parentElement.previousElementSibling.firstElementChild.lastElementChild.style.color =
  'green';
