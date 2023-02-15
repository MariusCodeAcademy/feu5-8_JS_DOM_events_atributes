'use strict';
console.log('main.js file was loaded');

// nusitaikau
const appContainer = document.getElementById('app');

// sukurti funckija createTitle()
// sukuria ir patalpina appContaineryje h2 su textu 'I am new title'

function createTitle() {
  const h2El = document.createElement('h2');
  h2El.textContent = 'I am new title';
  appContainer.append(h2El);
}
createTitle();
