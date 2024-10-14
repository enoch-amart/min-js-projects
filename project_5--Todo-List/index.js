let items = ["hello world", "damn"];

const input = document.getElementById("itemInput");

const itemsDiv = document.getElementById("item");

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

renderItems();

function clearItem() {}

function loadItems() {}

function saveItems() {}

function addItem() {}

function removeItem(idx) {
  items.splice(idx, 1);
  renderItems();
}
