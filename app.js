const form = document.getElementById("add-list");
const listItem = document.getElementById("list");
const filter = document.getElementById("filter");
// const replaceItem = document.querySelectorAll("li");

// const replaceElement = Array.from(replaceItem).forEach(function()addEventListener('click',changeItem))

//submit event
form.addEventListener("submit", addItem);

//remove event
listItem.addEventListener("click", removeItem);

//filter event
filter.addEventListener("keyup", filterItem);

//edit event
replaceItem.addEventListener("click", changeElement);

//add item
function addItem(e) {
  e.preventDefault();

  //Passing value
  const newItem = document.getElementById("item").value;

  //create list
  const li = document.createElement("li");
  li.className = "name";

  //create delete and edit button
  const deleteBtn = document.createElement("span");
  const editBtn = document.createElement("span");

  //add content to edit and delete button
  deleteBtn.textContent = "Delete";
  editBtn.textContent = "Edit";

  //add class to edit and delete button
  deleteBtn.className = "btn btn-danger delete";
  editBtn.className = "btn btn-success edit";

  //append edit and delete button li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  //create the newItem value in the list
  li.appendChild(document.createTextNode(newItem));

  //append li to listItem
  listItem.appendChild(li);
}

//remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure")) {
      const li = e.target.parentElement;
      listItem.removeChild(li);
    }
  }
}

//filter item
function filterItem(e) {
  const text = e.target.value.toLowerCase();

  const item = document.getElementsByTagName("li");

  Array.from(item).forEach(function (items) {
    const name = items.firstChild.textContent;
    if (name.toLowerCase().indexOf(text) != -1) {
      listItem.style.display = "block";
    } else {
      listItem.style.display = "none";
    }
  });
}

function changeItem(e) {
  if (e.target.classList.contains("delete")) {
    console.log(replaceElement);
  }
}
