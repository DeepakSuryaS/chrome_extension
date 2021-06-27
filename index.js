const myLeads = [1, 2, 3];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", handleSave);

function handleSave() {
  console.log("Button clicked!");
}

let listItems = '';
for(let i = 0; i < myLeads.length; i += 1) {
  listItems += "<li>" + myLeads[i] + "</li>"
}

ulEl.innerHTML = listItems;