const user = {email : "xyz@gmailcom"}

try {
 // // produce Referance error
//   MyFunction();

// // produce TypeError
// null.myFunction();

// // produce Syntax Error
// eval('hello world');

// // ?produce UI errors 
// decodeURIComponent('%');

if(!user.name) {
    // throw 'userhas no name';
    throw new SyntaxError('userhas no more');
}

} catch (e) {
    console.log(`${e}`);
        // console.log(e);
        // console.log(e.message);
        // console.log(e.name);
        // console.log(e instanceof ReferenceError)
} finally {
    console.log("log from finally. ")
}
 console.log('program continues....');

//  if i give MyFunction(); console.log(myfunciton) then program never continued
