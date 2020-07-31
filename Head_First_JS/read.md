# Chapter 4 Arrays

#### Arrays

- An Arrays is JavaScript type that can hold many values.
  eg:-
  let persons = ["Tom","Jack","Julie","Sara"];

- You can add a new value to an array using push : array.push(value)
- Sparse arrays occur when there are undefined items in the middile of an array.
- Arrays are data scructure for ordered data
- You can access values from an array using indexes.
- Array indexes starting from 0. That means, index of the first item is 0, second one's is 1 as so on..
- In the above example persons[2] return "Julie".
- You can change value of a specific index from an array, you can use = .
  eg:-
  persons[2] = "mary";

- we can count numbers of items inside an array with property length.
  eg:-
  persons.length; // in the above example it return 4;

#### Foor loop

- Iterate items
- Syntax :-
  for(initialization;condition;increament/decreament) {
  // body of the loop / statement block
  }

- Post increament operator(++) using variable to increase its value by one.
  eg:- count = count + 1 is equal to count++;

- Post decreament operator(--)using variable to decrease its value by one.
  eg:- count = count - 1 is equal to count--;

- An Array index without value is always return undefined.
- you can create array with anouther method : var myArray = new Array(length);
