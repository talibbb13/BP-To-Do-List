var input = document.getElementById("input");

var toDoItems = document.getElementsByClassName("toDoItems")[0];

var trashIcon = document.getElementById("trash");

input.addEventListener("keydown", function(event) {
  if (event.key == "Enter") {
    addItem();
  }
})

function addItem() {
  var divParent = document.createElement("div")
  var divChild = document.createElement("div");
  var checkIcon = document.createElement("i");
  var trashIcon = document.createElement("i");

  divParent.className = "item";
  divParent.innerHTML = "<div>" + input.value + "</div>";

  checkIcon.classList = "fa-sharp fa-regular fa-circle-check fa-shake";
  checkIcon.style = "lightgray";
  checkIcon.addEventListener("click", function() {
    checkIcon.style.color = "limegreen";
  })

  divChild.appendChild(checkIcon);
  trashIcon.className = "trashIcon"
  trashIcon.innerHTML = "Clear";
  
  trashIcon.addEventListener("click", function() {
    divParent.remove();
  })
  divChild.appendChild(trashIcon);
  divParent.appendChild(divChild);
  toDoItems.appendChild(divParent);
  
  input.value = "";
}