const myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');

inputBtn.addEventListener('click', handleSave);

function handleSave() {
  myLeads.push(inputEl.value);
  inputEl.value = '';
  renderLeads();
}

function renderLeads() {
  let listItems = '';
  for(let i = 0; i < myLeads.length; i += 1) {
    listItems += '<li>' + myLeads[i] + '</li>';
  }

  ulEl.innerHTML = listItems;
}