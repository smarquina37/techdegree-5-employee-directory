const searchContainer = document.querySelector('.search-container');
const gallery = document.getElementById('gallery');


// ------------------------------------------
//  SEARCH BAR - added so that employees can be filtered by name.
// ------------------------------------------

//dynamically created search form and inserted to the DOM
searchContainer.innerHTML = `
  <form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
  </form>
` ;

//Source code: https://teamtreehouse.com/library/javascript-search/javascript-search#downloads
const employeeSearch = document.getElementById('search-input');
employeeSearch.addEventListener('keyup', e => {
  let currentVal = e.target.value.toLowerCase();
  let employees = document.querySelectorAll('h3#name');
  employees.forEach(employee => {
    if (employee.textContent.toLowerCase().includes(currentVal)) {
      employee.parentNode.parentNode.style.display = 'block';
    } else {
      employee.parentNode.parentNode.style.display = 'none';
    }
  })
})

// ------------------------------------------
//  FETCH FUNCTION - pulls 12 random employees from the API each time page refreshes
// ------------------------------------------

fetch('https://randomuser.me/api/?results=12')
.then(response => response.json())
.then(data => generateCard(data.results))


// ------------------------------------------
//  FETCH HELPER FUNCTION - loops over each employee and pulls their information to display in the DOM
// ------------------------------------------

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
