// document.querySelector('.clear-tasks').addEventListener('click',onClick);
document.querySelector(".clear-tasks").addEventListener("mouseover", onClick);
function onClick(e) {
  // console.log("clicked");
  let val;
  val = e;
  //    console.log(val);
  // event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  e.target.innerText = "hello";

  // event type
  val = e.type;

  // timestamp
  val = e.timeStamp;

  //   coords events relative to the window
  val = e.clientY; // this is the length from the top of the window to we clicked or mouse overed place.
  val = e.clientX; // return length from leftside bar from button space we clicked or mouse overed.

//   coords events relative to the element
val = e.offsetY;
val = e.offsetX;
  console.log(val);
}
