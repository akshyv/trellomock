function returnText() {
  var input = document.querySelector("#userInput input").value;
  if (input.length == 0) {
    alert("type a new task to submit");
  } else {
    document.querySelector(".list").innerHTML += `
            <span id=${
              document.querySelector("#userInput input").value
            } class="tasks" draggable="true" ondragstart="onDragStart(event)" ondragover="onDragOver(event)" > 
                ${document.querySelector("#userInput input").value}
            </span>
        </div>`;
  }
}

function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
}
function onDrop(event) {
  let sourceId = event.dataTransfer.getData("text/plain");
  let sourceIdEl = document.getElementById(sourceId);
  console.log("this is source id ele", sourceIdEl);
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
