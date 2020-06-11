//  WINDOW OBJECT | PROPERTIES | METHODS
// window.console.log("haii");
// console.log("hello");

// // alert
// window.alert("info");
// alert("info...");

// //  prompt
// const input = prompt();
// alert(input);

// //  confirm
// if (confirm("Are You Sure ?")) {
//     console.log("Yes");
// } else {
//     console.log("No")
// }

let val;

// outer height && width
val = window.outerHeight;
val = window.outerWidth;

// outer width and height
val = window.innerHeight;
val = window.innerWidth;

// scroll points
val = window.scrollY;
val = window.scrollX;

// location
val = window.location;
val = window.location.hostname;
val = window.location.href;
val = window.location.port;
val = window.location.search;

// // redirect 
// window.location.href="http://google.com"; // redirecct to google
// // reload
// window.location.reload();

//  history
// window.history.go(-3);
val = window.history.length;

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform; // for identify os
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);