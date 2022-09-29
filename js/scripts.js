const searchContainer = document.getElementById('search-container');
const gallery = document.getElementById('gallery');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

// function fetchData(url) {
//   return fetch(url)
//           .then(checkStatus)
//           .then(res => res.json())
//           .catch(error => console.log("Looks like error", error))
// }

fetch('https://randomuser.me/api/?results=12')
.then(response => response.json())
.then(data => generateCard(data.results))


// ------------------------------------------
//  HELPER FUNCTIONS
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
                <img class="card-img" src=${data[i].picture} alt="profile picture">
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
//const html = `
//   <div class='card'>
//     <div class='card-img-container'>
//       <img src='${data}' alt='profile picture'>
//     </div>
//   </div>
//   `;
//   gallery.insertAdjacentHTML('beforeend', html)


// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------