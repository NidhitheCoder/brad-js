// create element
const li = document.createElement('li');

// add class
li.className = 'collection-item';

// add id
li.id='new-item';

// Add attribute
li.setAttribute('title','name');

// Create text node and append
li.appendChild(document.createTextNode('hello world'));

// create link element
const link = document.createElement('a');

// Add classes
link.className = "delete-item secondary-content";

// Add icon html
link.innerHTML = "<i class='fa fa-remove'></i>";

// append li inot child
li.appendChild(link);   

//  Add li to ul 
document.querySelector('ul.collection').appendChild(li);
console.log(link.innerHTML);