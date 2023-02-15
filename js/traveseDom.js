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

// mini task

// nusitaikyti i <li id="lastLi" class="listEl">three</li>
const pradzia = document.getElementById('lastLi');
console.log('pradzia ===', pradzia);
// traversig budu
// 1. nudazyti spalva pirmam li elentui
const firstEl = pradzia.previousElementSibling.previousElementSibling;
console.log('firstEl ===', firstEl);
firstEl.style.color = 'orange';
// 2. uzdeti padding top saraso elementui 50px
pradzia.parentElement.style.paddingTop = '50px';
// 3. div elementui kuriame yra ul fono spalva yellow
const divEl = pradzia.parentElement.parentElement;
divEl.style.background = 'yellow';
// 4. istrinti div elementa su element.remove()

function deleteDiv() {
  console.log('deleteDiv fn ran');
  divEl.remove();
}

// nusitaikau i mygtuka
let btnDelEl = document.getElementById('delBtn');
// uzdeti paprasta funkcijos ivykdyma
btnDelEl.onclick = deleteDiv;

console.log('deleteDiv ===', deleteDiv);

// btnDelEl.onclick = function () {
//   divEl.remove();
// };

// btnDelEl.onmouseleave = deleteDiv;
