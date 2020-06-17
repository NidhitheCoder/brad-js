// define UI WARS
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// load event listeners
loadEventListeners();
// create function
function loadEventListeners() {
  // dom event listeners
  document.addEventListener("DOMContentLoaded", getTasks);

  // add task events
  form.addEventListener("submit", addTask);
  taskList.addEventListener("click", removeTask);
  clearBtn.addEventListener("click", clearTasks);
  filter.addEventListener("keyup", filterTasks);
}

// get tasks from ls
function getTasks() {
  let Tasks;
  if (localStorage.getItem("tasks") === null) {
    Tasks = [];
  } else {
    Tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  Tasks.forEach(function(task) {
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(task));
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
  });
}

// add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add Task");
  }
  // create li element
  const li = document.createElement("li");
  li.className = "collection-item";
  // create a text node and appen to li
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element
  const link = document.createElement("a");
  // add classes for a tag
  link.className = "delete-item secondary-content";
  // add icon html
  link.innerHTML = "<i class='fa fa-remove></i>";
  // append link to li
  li.appendChild(link);
  // append link to ul
  taskList.appendChild(li);

  // // local storage
  storeTaskInLocalStorage(taskInput.value);

  // clear input text
  taskInput.value = "";
  e.preventDefault();
}

// store into local storage
function storeTaskInLocalStorage(task) {

  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("are you sure ?")) {
      e.target.parentElement.parentElement.remove();

    //   remove from LS
    removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
  }
}

// remove tasks from local storage
function removeTaskFromLocalStorage(taskItem){
console.log(taskItem);
let tasks;
if(localStorage.getItem('tasks') === null) {
tasks = [];
} else { 
    tasks = JSON.parse(localStorage.getItem('tasks'));
}
 tasks.forEach(function(task,index){
     if (taskItem.textContent === task){
          tasks.splice(index,1);
     }
 })

 localStorage.setItem('tasks',JSON.stringify(tasks));
}

// clear tasks
function clearTasks(e) {
  // tasklist.innerHTML = "";
  // faster way using loop
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
//   clear tasks from ls
  clearTaskFromLocalStorage();
}

// clear tasks from local storage
function clearTaskFromLocalStorage() {
    localStorage.clear();
}

// filter function
function filterTasks() {
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
