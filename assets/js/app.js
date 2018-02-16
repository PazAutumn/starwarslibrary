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

  /* responseContainer.innerHTML = ''; */
  searchedChar = number;
  addChar();
});


function addChar() {
  let modals = document.getElementById('modal-1');

  fetch(`https://swapi.co/api/people/${searchedChar}/`)
    .then(function(response) {
    // Turns the the JSON into a JS object
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      // Let's make some HTML!
      let html = `<div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h2 class="modal-title text-center" id="myModalLabel">${data.name}</h2>
      </div>
      <div class="modal-body">
        <div id="charInfo">
          <p>Birth year: ${data.birth_year}</p>
          <p>Gender: ${data.gender}</p>
          <p>Height: ${data.height}</p>
          <p>Eye color: ${data.eye_color}</p>
          <p>Hair color: ${data.hair_color}</p>
        </div>
      </div>
    </div>
  </div>`;

      // Put that HTML on the page
      modals.innerHTML = html;
    });
}

/*
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
} */


  /*// no cambiar responseText, haha
  const data = JSON.parse(this.responseText);
  const response = data.response;
  console.log(data);

responseContainer.addEventListener('click', function(e) {
  name = document.getElementById('uno').getAttribute(title);
  console.log(name);

  let contChar = document.createElement('div');
  contChar.className('contCharacter');

  contChar.innerText('<div class="modal-dialog" role="document">' +
    '<div class="modal-content">' +
      '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
        '<h4 class="modal-title" id="myModalLabel">$(data.name)</h4>' +
      '</div>' +
      '<div class="modal-body">' +
        '<div id="charInfo">' +
          '<p>$(data.gender)</p>' +
          '<p>$(data.eye_color)</p>' +
          '<p>$(data.hair_color)</p>' +
        '</div>' +
      '</div>' +
      '<div class="modal-footer">' +
      '</div>' +
    '</div>' +
  '</div>');

  var newsIcon= document.createElement('i');
  newsIcon.classList.add('far', 'fa-newspaper', 'newspaperIcon');
  /*li.prepend(newsIcon);

  let modals = document.getElementById('modal-1')
  modals.appendChild(contChar);

}) */
