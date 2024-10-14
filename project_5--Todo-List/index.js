let items = [];

const input = document.getElementById("itemInput");

const itemsDiv = document.getElementById("item");
const storageKey = "items";

function renderItems() {
  itemsDiv.innerHTML = null;

  for (const [idx, item] of Object.entries(items)) {
    const container = document.createElement("div");
    container.style.marginBottom = "1rem";

    const text = document.createElement("p");
    text.textContent = item;
    text.style.display = "inline";
    text.style.marginRight = "1rem";

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.onclick = () => removeItem(idx);

    container.appendChild(text);
    container.appendChild(button);

    itemsDiv.appendChild(container);
  }
}

function clearItem() {
  items.length = 0;
  renderItems();
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
