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

function formatDate(data) {
  // for (let i =0; i < data.length; i++) {
    const myDate = new Date(data);
    console.log(myDate);
    const dob = myDate.toLocaleDateString();
    return dob;
  // }
}

function showModal(data) {
  console.log(data);
  const employeeModal = `
    <div class="modal-container">
      <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
          <img class="modal-img" src="${data.picture.large}" alt="profile picture">
          <h3 id="name" class="modal-name cap">${data.name.first} ${data.name.last}</h3>
          <p class="modal-text">${data.email}</p>
          <p class="modal-text cap">${data.location.city}</p>
          <hr>
          <p class="modal-text">${data.cell}</p>
          <p class="modal-text">${data.location.street.number} ${data.location.street.name}, ${data.location.city}, ${data.location.state} ${data.location.postcode}</p>
          <p class="modal-text">Birthday: ${formatDate(data.dob.date)}</p>
        </div>
      </div>
    </div>
  `;
  gallery.insertAdjacentHTML('beforeend', employeeModal);

  const modalContainer = document.querySelector('.modal-container');
  document.getElementById('modal-close-btn').addEventListener('click', (e) => {
    if (e.target.closest('.modal-close-btn')) {
      modalContainer.remove();
    }
})
  }

//Event Listener to show modal on page after user clicks on employee card

gallery.addEventListener('click', e => {
  if (e.target.classList !== 'gallery') {
    let card = e.target.closest('.card');
    if (card !== null) {
      let userEmail = card.children[1].children[1].innerText;
      for (let i = 0; i < employeeData.length; i++) {
        if ( employeeData[i].email === userEmail) {
          showModal(employeeData[i]);
        }
      }
    }
  }
})


