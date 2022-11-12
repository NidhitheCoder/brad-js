// ?set item to the local Storage
// localStorage.setItem('name','john');
// localStorage.setItem('age','33');

// // set session store item
// sessionStorage.setItem('name','sara');

// /remove from local storege
// localStorage.removeItem('name');

// // get items from local storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();
// console.log(name,age);

document.querySelector("form").addEventListener("submit", function(e) {
  // console.log(123);
  const task = document.getElementById('task').value;
  // console.log(task);
  let tasks=[];
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  //   localStorage.setItem('task',task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert("task saved to Local Storage");
  e.preventDefault();
});
const tasks = JSON.parse( localStorage.getItem('tasks'));

tasks.forEach(function(task){
console.log(task);
})