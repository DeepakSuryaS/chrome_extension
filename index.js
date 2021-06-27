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
  render(myLeads);
}

function render(leads) {
  let listItems = '';
  for(let i = 0; i < leads.length; i += 1) {
    listItems += `<li>
      <a href='${leads[i]}' target='_blank'>
        ${leads[i]}
      </a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}

function handleSave() {
  myLeads.push(inputEl.value);
  inputEl.value = '';
  localStorage.setItem('myLeads', JSON.stringify(myLeads));
  render(myLeads);
}

function clearLocalStorage() {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
}