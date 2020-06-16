// document.getElementbyId()
console.log(document.getElementById('task-title'));

// get things from element
console.log(document.getElementById('task-title').id );
console.log(document.getElementById('task-title').className);

// change styling
document.getElementById('task-title').style.background='green';
document.getElementById('task-title').style.padding='10px';
document.getElementById('task-title').style.color="white";
// document.getElementById('task-title').style.display='none';

// change contents
document.getElementById('task-title').textContent="Task List";
document.getElementById('task-title').innerText="My Tasks";
document.getElementById('task-title').innerHTML='<span>My To-do List';

// use variable 
const taskTitle = document.getElementById('task-title')
taskTitle.style.background='red';

// query selector

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));
document.querySelector('li').style.color='orange';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'yellow';
document.querySelector('li:nth-child(3)').style.color='orangered';
document.querySelector('li:nth-child(4)').innerText="hello world";
document.querySelector('li:nth-child(even)').style.background='grey';
document.querySelector('li:nth-child(odd)').style.background = "lightgrey"