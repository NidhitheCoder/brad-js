// // iterator examples
// function NameIterator(names) {
//     let nextIndex = 0;
// console.log('this is next index',nextIndex); // for testing
//     return {
//         next :function() {
//             console.log('this is again next index',nextIndex); // for testing
//             return nextIndex < names.length ? //question mark means then
//             { value : names[nextIndex++],done : false} : {done : true} ;
//         }
//     }
// }

// // create an array of names 
// const namesArray = ['jack','john','julie'];

// // init iterator and pass in the names array
// const names = NameIterator(namesArray);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);


// // generators examples
// function* sayNames() {  //funciton* means tell to js this is not just a function it is a generator
// yield 'jack'   // yield- need for using a value in generator
// yield 'john'
// yield 'julie'
// }

// const names = sayNames();
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);


// ID creater using generaton

function*  createIDs() {
    let index = 1; 
    while(true) {
        yield index++;
    }
}

const gen = createIDs();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);