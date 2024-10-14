let items = [];

const input = document.getElementById("itemInput");

const itemElement = document.getElementById("item");

function clearItem() {
  itemElement.innerHTML = "";
}

function loadItems() {}

function renderItems() {}

function saveItems() {}

function addItem() {
  itemElement.innerHTML = input.value;
  input.value = "";
}

function removeItem() {}
