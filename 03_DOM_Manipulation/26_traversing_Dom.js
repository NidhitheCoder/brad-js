let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');
val = listItem;
val = list;

// get child nodes
val = list.childNodes;// it return total count as  child list + line breaker
val = list.children; // children return exact childs and its length.
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// *** Nodetypes 
// 1. element
// 2. Attribute
// 3. tex Node
// 8. comment
// 9. document itself
// 10. doctype
val = list.childNodes;
val = list.childNodes[7].nodeType;

val = list.children[1];
val = list.children[1].textContent="hello";

// children of children
val = list.children[0].children[0].id ='sample'
val = list.children[0].children[0];
// first child
val = list .firstChild; 
val = list.firstElementChild;
// last child
val = list.lastChild;
val = list.lastElementChild;
// count child elements
val = list.childElementCount; 

// get parentnode
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
val= listItem.nextElementSibling.nextElementSibling.previousElementSibling;
console.log(val);