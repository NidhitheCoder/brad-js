const color = "blue";

switch (color){
    case 'red' :
        console.log("colour is red");
        break;
    case 'blue' :
        console.log("colour is blue");
        break;
    default :
        console.log("colour is not neither blue or red");
        break;
}

let day;

switch(new Date().getDay()){
    case 0 :
       day ="Sunday";
        break;
    case 1 :
        day = "Monday";
        break;
    case 2 :
        day = "Tuesday";
        break;
    case 3 :
        day = "Wednesday";
        break;
    case 4 :
        day = "thursday";
        break;
    case 5 :
        day = "Friday";
        break;
    case 6 :
        day = "Saturday";
        break;
}
console.log(` today is ${day}`)