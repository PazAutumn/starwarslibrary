const char = document.getElementById('charContainer');
const responseContainer = document.getElementById('charInfo');
let searchedChar;
let number;

char.addEventListener('click', function(event) {
  let evento = event.target;
  console.log(evento);
  const aidi = evento.getAttribute('id');
  const number = aidi.substring(4);
  console.log(number);

  responseContainer.innerHTML = '';
  searchedChar = number;
  getCharacter();
})


function getCharacter() {
  // creo la petición
  const charRequest = new XMLHttpRequest();
  charRequest.open('GET', `https://swapi.co/api/people/${searchedChar}/`);
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

responseContainer.addEventListener('click', function(e) {
  name = document.getElementById('uno').getAttribute(title);
  console.log(name);
  
})
