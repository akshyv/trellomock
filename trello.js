const btn = document.getElementById("btn");
btn.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  var firstNameInput = document.querySelector("#userInput input");
  var input = firstNameInput.value;
  if (input.length == 0) {
    alert("type a new task to submit");
  } else {
    document.querySelector(".list").innerHTML += `
            <span id=${
              document.querySelector("#userInput input").value
            } class="tasks" draggable="true" ondragstart="onDragStart(event)" ondragover="onDragOver(event)" > 
                ${document.querySelector("#userInput input").value}
              <button id="delete"class="delete">
                <i class="far fa-trash-alt"></i>
                Delete
              </button>
            </span>            
        </div>`;
  }
  firstNameInput.value = "";
  var current_tasks = document.querySelectorAll(".delete");
  for (var i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }
});
function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
}
function onDrop(event) {
  let sourceId = event.dataTransfer.getData("text/plain");
  let sourceIdEl = document.getElementById(sourceId);
  let sourceIdParentEl = sourceIdEl.parentElement;
  let targetEl = document.getElementById(event.target.id);
  let targetParentEl = targetEl.parentElement;

  if (targetParentEl.id !== sourceIdParentEl.id) {
    if (targetEl.className === sourceIdEl.className) {
      targetParentEl.appendChild(sourceIdEl);
    } else {
      targetEl.appendChild(sourceIdEl);
    }
  } else {
    console.log("two class names are same");
  }
}
