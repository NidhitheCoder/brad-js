// define UI vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearbtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// load event listeners
loadEventListeners();

// create function
function loadEventListeners() {
    
  //  Add task events
  form.addEventListener("submit", addTask);
}

// Add Task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }
//   create li element
const li = document.createElement('li');
li.className = "collection-item";
// create text node and append to li
li.appendChild(document.createTextNode(taskInput.value));
// Create new link element
const link= document.createElement('a');
// add classes for a tag
link.classname = 'delete-item secondary-content';
// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'
// ?append link to li 
li.appendChild(link);
// append li to the ul 
taskList.appendChild(li);
// clear input
taskInput.value = "";

  e.preventDefault();
}
