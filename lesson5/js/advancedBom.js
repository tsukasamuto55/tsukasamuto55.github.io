const form = document.querySelector(".input");
const listInput = document.querySelector("#chapter");
const list = document.querySelector("ul");
const template = document.querySelector("#list-item-template");
const deleteBtn = document.querySelector("[data-button-delete]");
const checkBox = document.querySelector("[data-list-item-checkbox]");
const LOCAL_STORAGE_PREFIX = "Book_Of_Mormon";
const LIST_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-lists`;
let listItems = loadList();
listItems.forEach(renderList);

list.addEventListener("change", (e) => {
  if (!e.target.matches("[data-list-item-checkbox]")) return;

  // Get the item list that is clicked on based on a unique id
  const parent = e.target.closest(".list-item");
  const listItemId = parent.dataset.listItemId;
  const listItem = listItems.find((l) => l.id === listItemId);
  listItem.complete = e.target.checked;
  saveList();
});

list.addEventListener("click", (e) => {
  if (!e.target.matches("[data-button-delete]")) return;
  // Get the item list that is clicked on based on a unique id
  const parent = e.target.closest(".list-item");
  const listItemId = parent.dataset.listItemId;
  parent.remove();

  listItems = listItems.filter((listItem) => listItem.id !== listItemId);
  saveList();
});

// Add list items
// User will type in todo and click add todo button. This should then ad the todo to the list above.
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const listName = listInput.value;
  if (listName === "") return;
  const newListItem = {
    name: listName,
    complete: false,
    id: new Date().valueOf().toString(),
  };
  listItems.push(newListItem);

  renderList(newListItem);
  saveList();
  loadList();
  listInput.value = "";
});

function renderList(listName) {
  const templateClone = template.content.cloneNode(true);
  const listItem = templateClone.querySelector(".list-item");
  listItem.dataset.listItemId = listName.id;
  const textElement = templateClone.querySelector("[data-list-item-text]");
  textElement.innerText = listName.name;
  // Complete list items
  const checkbox = templateClone.querySelector("[data-list-item-checkbox]");
  checkbox.checked = listName.complete;
  list.appendChild(templateClone);
}

//Save list items
function saveList() {
  localStorage.setItem(LIST_STORAGE_KEY, JSON.stringify(listItems));
}

//Load list items
function loadList() {
  const listItemsString = localStorage.getItem(LIST_STORAGE_KEY);
  return JSON.parse(listItemsString) || [];
}
