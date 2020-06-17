// document.getElementByClassName()

// let item = document.getElementsByClassName('collection-item');
// console.log(item);
// console.log(item[0]);
// item[0].style.color = "green";
// item[3].textContent="hellow world";

// const listItems=document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// document.getElementBytagName()
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);   
// lis[0].style.color = "red";
// lis[3].textContent =" hello new world"

// // convert html collection into an array
// lis = Array.from(lis);
// lis.reverse();

// console.log(lis);

// lis.forEach(function(li,index){
// // console.log(li);
// // console.log(li.className);
// // li.textContent = "check";
// li.textContent=`${index} : check index`;

// })

// document.querySelectorAll()

const lists = document.querySelectorAll('ul.collection li.collection-item');
console.log(lists);

lists.forEach(function(item,index){
    item.textContent=`${index} :hellow `;
})

const even =  document.querySelectorAll('li:nth-child(even)');
const odd  = document.querySelectorAll('li:nth-child(odd)');
even.forEach(function(li){
    li.style.background = "gray";
})

odd.forEach(function(li){
    li.style.background = "purple";
})

for (let i=0;i < even.length;i++) {
even[i].style.color = "orange";
}