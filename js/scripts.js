const searchContainer = document.querySelector('.search-container');
const gallery = document.getElementById('gallery');
let employeeData=[];


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

fetch('https://randomuser.me/api/?results=12&nat=us')
.then(response => response.json())
.then(data => {
  employeeData = data.results
})
.then(() => generateCard(employeeData))


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

function createModal(data) {
  const employeeModal = `
    <div class="modal-container">
      <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
          <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
          <h3 id="name" class="modal-name cap">name</h3>
          <p class="modal-text">email</p>
          <p class="modal-text cap">city</p>
          <hr>
          <p class="modal-text">(555) 555-5555</p>
          <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
          <p class="modal-text">Birthday: 10/21/2015</p>
        </div>
      </div>
    </div>
  `;
  gallery.insertAdjacentHTML('beforeend', employeeModal);
  }
createModal(employeeData);

//Event Listener

// gallery.addEventListener('click', e => {
//   if (e.target.classList.contains('card')) {
//     createModal(employeeData).
//   }
// })


