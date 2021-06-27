let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');

inputBtn.addEventListener('click', handleSave);
deleteBtn.addEventListener('click', clearLocalStorage);

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

function handleSave() {
  myLeads.push(inputEl.value);
  inputEl.value = '';
  localStorage.setItem('myLeads', JSON.stringify(myLeads));
  renderLeads();
}

function clearLocalStorage() {
  localStorage.clear();
  myLeads = [];
  renderLeads();
}

function renderLeads() {
  let listItems = '';
  for(let i = 0; i < myLeads.length; i += 1) {
    listItems += `<li>
      <a href='${myLeads[i]}' target='_blank'>
        ${myLeads[i]}
      </a>
    </li>`;
  }

  ulEl.innerHTML = listItems;
}