var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var checkedItem = document.getElementById("list");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var extra = input.value;
  li.appendChild(document.createTextNode(extra));
  ul.appendChild(li);
  li.innerHTML = extra + "<button id='remove'>X</button>";
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function markItemDone(event) {
  if (event.target.tagName.localeCompare("li") && event.target.id != "remove") {
    event.target.classList.toggle("checked");
  }
}

function removeItemList(event) {
  if (
    event.target.tagName.localeCompare("li") &&
    event.target.id === "remove"
  ) {
    event.target.parentNode.remove();
  }
}

checkedItem.addEventListener("click", removeItemList);

checkedItem.addEventListener("click", markItemDone);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
