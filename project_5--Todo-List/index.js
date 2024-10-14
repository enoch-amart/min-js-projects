let items = [];

const input = document.getElementById("itemInput");

const itemsList = document.getElementById("item");
const storageKey = "items";

function renderItems() {
  itemsList.innerHTML = null;

  for (const [idx, item] of Object.entries(items)) {
    const listElement = document.createElement("li");
    listElement.textContent = item;
    listElement.classList += " list_item";

    const anchor = document.createElement("a");
    anchor.textContent = "Delete";
    anchor.classList += " btn btn--general";

    listElement.appendChild(anchor);

    anchor.onclick = () => removeItem(idx);

    itemsList.appendChild(listElement);
  }
}

function clearItem() {
  items.length = 0;
  renderItems();
  saveItems();
}

function loadItems() {
  const oldItems = localStorage.getItem(storageKey);
  if (oldItems) items = JSON.parse(oldItems);
  renderItems;
}

function saveItems() {
  const stringItems = JSON.stringify(items);
  localStorage.setItem(storageKey, stringItems);
}

function addItem() {
  const value = input.value;
  if (!value) {
    alert("You cannot add an empty item");
    return;
  }
  items.push(value);
  renderItems();
  input.value = "";
  saveItems();
}

function removeItem(idx) {
  items.splice(idx, 1);
  renderItems();
  saveItems();
}

document.addEventListener("DOMContentLoaded", loadItems);
