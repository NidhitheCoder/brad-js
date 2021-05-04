// REPLACE ELEMENTS
// create element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = "task-title";
// new text node creation
newHeading.appendChild(document.createTextNode("task List"));
// get the old heading
const oldHeading=document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');
// replace child element of the card action div
cardAction.replaceChild(newHeading,oldHeading);

 console.log(newHeading);

//  REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
// // remove list item
// lis[0].remove();
// // remove child element
// list.removeChild(lis[3]);

// CLASSES AND ATTRIBUTES
const firstLi =  document.querySelector('li:first-child');
const link=firstLi.children[0];
let val;

// classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// attributes
val = link.getAttribute('href');
link.setAttribute('href','http://google.com'); 
val = link.hasAttribute('href');
val = link.hasAttribute('title');
val = link.setAttribute('title','google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val  = link;
console.log(val);
