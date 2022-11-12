// // EVENT BUBBLING
// document.querySelector('.card-title').addEventListener('click',
// function(){
//     console.log('card title');
// });
// document.querySelector('.card-content').addEventListener('click',
// function(){
//     console.log('card-content');
// });
// document.querySelector('.card').addEventListener('click',
// function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click',function(){
//     console.log('col');
// });

// EVENT DELEGETION
// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click',deleteItem);

document.body.addEventListener("click", deleteItem);
function deleteItem(e) {
  // console.log('delete item');
  // if (e.target.className === 'fa fa-remove') {

  //   if (e.target.parentElement.className === "delete-item secondary-content") {
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log(e.target);
    //  for remove item
    e.target.parentElement.parentElement.remove();
  }
}
