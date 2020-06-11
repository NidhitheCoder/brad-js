let val

// number to string
//  val=5;
val = String(555)
val = String(4+4);
console.log(val);
console.log(typeof val);
console.log(val.length);

// boolean to string
val = String(true);
console.log(val);
console.log(typeof val);
console.log(val.length);

// date to string
val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

// array to string
val=String([1,2,3,4]);
console.log(val);
console.log(typeof val);
console.log(val.length);

val  = (5).toString();
console.log(val);
console.log(typeof val);
console.log(val.length);

val = (true).toString();
console.log(val);
console.log(typeof val);
console.log(val.length)

// String to numbers
// val='5';
val = Number('5')
console.log(val);
console.log(typeof val);
console.log(val.toFixed());
console.log(val.toFixed(2));

// boolean to numbers
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("hellow");
val = Number([1,2,3,4]);
val = parseInt('100');
val = parseInt('100.12');
val = parseFloat('100.34');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

// const val1 = 5;
const val1 = String(5)
const val2 = 4;
const sum = val1 + val2;
console.log( sum );
