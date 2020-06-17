const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// click 
// clearBtn.addEventListener('click',runEvent);
// doubleclick
// clearBtn.addEventListener('dblclick',runEvent);
// // mouse down
// clearBtn.addEventListener('mousedown',runEvent);
// // mouse up
// clearBtn.addEventListener('mouseup',runEvent);
// // mouse enter
// clearBtn.addEventListener('mouseenter',runEvent);
//mouse leave
// card.addEventListener('mouseleave',runEvent);
// mouseover
// card.addEventListener('mouseover',runEvent);
// //mouseout
// card.addEventListener('mouseout',runEvent); 

// mousemove
card.addEventListener('mousemove',runEvent);

// event handler
function runEvent(e){
    console.log(`Event type : ${e.type}`);
    heading.textContent=`MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;
    document.body.style.background=`rgb(${e.offsetY},${e.offsetX},50)`;
}