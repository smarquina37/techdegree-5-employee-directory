const searchContainer = document.getElementById('search-container');
const gallery = document.getElementById('gallery');

// ------------------------------------------
//  SEARCH BAR
// ------------------------------------------
// const form = document.createElement('form');
// form.setAttribute('action', '#');
// form.setAttribute('method', 'get');

// const searchInput = document.createElement('input');
// searchInput.setAttribute('type', 'search');
// searchInput.setAttribute('id', 'search-input');
// searchInput.setAttribute('class', 'search-input');
// searchInput.setAttribute('placeholder', 'Search...');

// const submit = document.createElement('submit');
// submit.setAttribute('type', 'submit');
// submit.setAttribute('id', 'search-submit');
// submit.setAttribute('class', 'search-submit');
// submit.setAttribute('value', '&#x1F50D');

// document.body.appendChild(form);
// searchContainer.appendChild(searchInput);
// searchContainer.appendChild(submit);

// function searchBar() {
//   for (let i =0; i < card.length; i++) {
//     const form = `
//       <form action="#" method="get">
//         <input type="search" id="search-input" class="search-input" placeholder="Search...">
//         <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
//         </form>
//     `
//   }
// }

// searchInput.addEventListener('keyup', e => {

// })

// ------------------------------------------
//  FETCH FUNCTION
// ------------------------------------------

fetch('https://randomuser.me/api/?results=12')
.then(response => response.json())
.then(data => generateCard(data.results))


// ------------------------------------------
//  FETCH HELPER FUNCTION
// ------------------------------------------

// create a function that takes in an array of employees
// loop over each of the employees
// for each employee generate the .card html
// append that html to the #gallery container

function generateCard(data) {
    for (let i = 0; i < data.length; i++) {
      const cardDiv = `
        <div class="card">
            <div class="card-img-container">
                <img class="card-img" src=${data[i].picture.thumbnail} alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${data[i].name.first} ${data[i].name.last}</h3>
                <p class="card-text">${data[i].email}</p>
                <p class="card-text cap">${data[i].location.city}, ${data[i].location.state}</p>
            </div>
        </div>
`;
gallery.insertAdjacentHTML('beforeend', cardDiv);
    }
}
// ------------------------------------------
//  MODAL
// ------------------------------------------

// const cardContainer = document.querySelectorAll('.card');
  
// cardContainer.addEventListener('click', (e) => {
//   for (let i =0; i < card.length; i++) {
//       console.log(cardContainer[i]);
//     }
// })
