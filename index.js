const myLeads = [1, 2, 3];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", handleSave);

function handleSave() {
  console.log("Button clicked!");
}

for(let i = 0; i < myLeads.length; i += 1) {
  const li = document.createElement("li");
  li.textContent = myLeads[i];
  ulEl.append(li);
}