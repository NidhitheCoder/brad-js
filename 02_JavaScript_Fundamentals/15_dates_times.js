let val;
const today = new Date();
val = today;

const birthday = new Date('1995-12-12 11:25:00');
val = birthday
const secondDate = new Date('12-May-1983');
val = secondDate;
const thirdDate = new Date('9/12/1945');
val = thirdDate;

// date functions
val=today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

// set dates
birthday.setMonth(1);
birthday.setDate(22);
birthday.setFullYear(1993);
birthday.setHours(12);
birthday.setMinutes(22);
birthday.setSeconds(22);
console.log(birthday);
console.log(val);
console.log(typeof val) // return object becouse of Date is a return type