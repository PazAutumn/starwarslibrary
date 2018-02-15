const form = document.getElementById('searchingCharacter');
const searchField = document.getElementById('search-char');
const responseContainer = document.getElementById('charContainer');
let searchedChar;

form.addEventListener('submit', function(e) {
  e.preventDefault();
  responseContainer.innerHTML = '';
  searchedChar = searchField.value;
  getCharacter();
});

function getCharacter() {
  // creo la petición
  const charRequest = new XMLHttpRequest();
  charRequest.open('GET', `https://swapi.co/api/people/${searchedChar}`);
  charRequest.onload = addChar;
  charRequest.onerror = handleError;
  // envío la petición
  charRequest.send();
}

function handleError() {
  console.log('Se ha presentado un error');
}

function addChar() {
  // no cambiar responseText, haha
  const data = JSON.parse(this.responseText);
  const response = data.response;
  console.log(data);
}