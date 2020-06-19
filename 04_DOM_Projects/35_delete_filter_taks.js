// define ul vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// load event listeners
loadEventListeners();
// create function
function loadEventListeners() {
  // add task events
  form.addEventListener("submit", addTask);
  taskList.addEventListener("click", removeTask);
  clearBtn.addEventListener("click", clearTasks);
  filter.addEventListener("keyup", filterTask);
}

// Add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add task");
  }

  // create li element
  const li = document.createElement("li");
  li.className = "collection-item";
  // create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element
  const link = document.createElement("a");
  // ?Add classes for tag
  link.className = "delete-item secondary-content";
  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append link to li
  li.appendChild(link);
  // append link to ul
  taskList.appendChild(li);
  // clear input text
  taskInput.value = "";
  e.preventDefault();
}

// remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("are you sure ?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

function clearTasks(e) {
  // taskList.innerHTML = "";
  // faster way using loop
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function filterTask(e) {
  let text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
  console.log(text);
}
