# Section 2

## 05_File setup

### Script tag

    - <script> tag is used for add javascript into a html file.
        eg: <script>
            alert("hellow world");
            </script>

    - You can add a javasccript file with src property of <script> to the html file.
        eg: <script src="app.js"></script>

## 06_Using the console

### Console window

    - You can open console window with right click ->      select inspect -> select console
    - You can alert and change style content trough     console window
        eg:- alert("hello")
        eg:- document.querySelector('h1').style.color="red"  will change color of the h1 element in the page.

## 07_Variables and declarations

### 3 Types of datatypes in Javascripts

    - var       var name="jordan";
    - let       let name="sara";
    - const     const name="smith"
        const is not re assignable

### Initializing variables

    - var name;
    - let age;
    - const must need a value when it declared.

### Multi-word var

    - var firstName - camelcase
    - var first_name - underscore
    - var FirstName -pascal case
        normally using for naming constructor and classes in oops.
    - firstname

## 08_Datatypes

### Primitive Datatypes

    - Stored directly in the location variable access.
    - Stored in stack
    - String,number,null,undefined,symbols,boolean
        undefined means value of a variable is not defined

### Referance Datatypes

    - Access by referance
    - Objects that are stored in the heap
    - A pointer to a location in memmory

### Javascript is a dynamically typed laguage

    - Type are associated with values not variables
    - The same variable can hold multiple variables
    - We do not need to specify types
    - Allow static typing(Typescript,flow)
    - type of a null valued variable is object.

## 09_Type Conversion

### Number to String

    - Use String() to convert number into a string datatype.
        - Length property only for string datatypes
        - Comas in the arrays also consider as string when String() using for Conversion
    - Use Number for convert string into numbers
        - ParseInt() does not show fraction part.
        - boolean to numbers
            true-1,false=0
        - null=0
        - toFixed() helps to show float values
            eg val=5.22,console.log( val.toFixed())  print 5
                console.log(val.tofixed(2))  print 5.22

document.body.innerHTML=html;

## 10_Numbers with Math objects

### basic operations

        -when num1=10,num2=3
        - For addition num1 + num2 = 13
        - For substraction num1 - num2 = 7
        - For Multiplication num1 * num2 =30
        - For Division num1 / num2 = 3
        - For modulas num1 % num2 = 1

### Math objects

        - Math.PI - for pi value
        - Math.E - for Euler's
        - Math.round() - for round float values.
                - eg Math.round(2.6) gives 3
        - Math.floor() - for floor value.
                - eg Math.floor(2.8) gives 2
        - Math.ceil() - for ceil value.
                - eg Math.ceil(2.4) gives 3
        - Math.sqrt() - for square root
        - Math.abs() - for absolute number.
                - eg. Math.abs(-3) gives 3
        - Math.pow() - for findout power of a number.
                - eg. Math.pow(2,4) gives 16
        - Math.min() - for minimal number among given.
                - eg. Math.min(23,3,4,5,3,2) gives 2
        - Math.max() - for find largest among given numbers.
                - eg.Math.max(23,3,4,5,3,2) gives 23
        - Math.Random() - for generate random numbers.

## 11_string methods

### Basics

        - when str1="Sara" str2="John"
                - Add strings
                  val = str1 + str2 return 'SaraJohn'
                - Concatinate string s
                 val = str1 + " " + str2 return 'Sara John'
                - Append string
                  val = str2 += str1 return "SaraJohn
                - Escaping  from error when put quotes inside the string
                  - Use double quotes eg. let val = "that's awesome";
                  - Use backslash let val = "that\'s awesome";

### Methods

        - length - find length of the string

        - concat() - using for concatinate strings
                - eg. str1.concat('',str2) return 'Sara John'

        - toUppercase() - for make string capitalize

        - indexOf() - for find index of the given string in s string
                - there is no values statisfied in given criteria then return -1

        - charAt() - for find character of the given index.
                - there is no values satisfied in given criteria then return -1

        -subString() - for return  a string between the given indexes. eg. str1.subString(0,2) return 'Sa'

        - slice() - for slice a part of a string
                eg.1 str1.slice(0,2) return 'Sa'
                eg.2 str1.slice(-2) return 'ra'

        - spilt() - for spliting string using given string
                eg. str1.split('a') return ['S','r']

        - replace() - replace a string part with anouther given string
                eg. str1.replace('ra','mantha'); return 'Samantha'

        - includes() - return a true or false value that identify  the given string is include in a string or not
                eg. str1.includes('sa') return true

## 12_With templates

        - document.body.innerHTML='something'
                - helps to write html  using javascript.
                - eg: let html="<p> this is a paragraph written using javascript code.</p>"
                  document.body.innerHTML=html it shows that the above pragraph to thehtml page.
        - Without literals way
                - let name="sara",age:23;
                    eg.1  let html="<ul><li>Name : " + name + "</li><li>Age : " + age + "</li></ul>
                      document.body,innerHTML=html

                    eg.2  let html="<ul>" +
                                "<li>Name :" + name +"</li>" +
                                "<li>Age : " + age + "</li>" +
                                </ul>
                                document.body.innerHTML= html
        - With Templates
                - html=`<ul>
                        <li>Name : ${name}</li>
                        <li>Age : ${age}</li>
                        </ul>`
                  document.body.innerHTML=html
        - We can also use expressions and functions inside the ${}.

## 13_Arrays

### declaration and functions

        - You can declare array using two methods :-
               1. let number = [12,33,23,43];
               2. let number = new Array(12,33,23,43)
        - length - for findout array length. eg number.length
        - Arrays are 'zero' based(indexing from 0).
        - Use [index] for get retrive a value from an array.
                - eg. let val = number[3]  return 3rd index value(4th value).
        - indexOf() - for find index of a value in the array.
                - eg. let val = number.indexOf(23) return 2
        - isArray() - check a variable is an array or not.
                - eg. let val= Array.isArray(number) return true

### Mutating Arrays

        - push() - add an element end of an array.
        - pop() - remove / delete an element end of an array.
        - unshift() - add an element starting of an array.
        - shift() - remove/delete an element from starting of an array.
        - splice() - remove  given number of elements from given array index.
                syntax:- number.splice(1,2) it remove 2 elements from index 1
                 in above example array remove 33 and 23.
        - reverse() - reversing an array.
        - concat() - concatenating 2 arrays.
        - sort() - sort array elements
                - compare function is needed for sort number element arrays.
                 eg. let val= number.sort(function compare(a,b){
                         return a - b;
                 })
        - find - for find first element that satisfy given condition.
                eg. funciton over50(num){
                        return num > 50
                }
                let val= number.find(over50);

## 14_object literals

### Retrive Values from object

        - let person={
                name:"jancy",
                age:34;
                dob:function(){
                        return 1994;
                }
         }
                 method 1 :- let val = person.name;
                 method 2 :- let val = person['name']
        - Call function inside an object
                let val = person.dob(); return 1994
        - Retrive data from objects using for loop
                for(let i=0;i < person.length;i++){
                        console.log(person[i].name)
                }

## 15_Dates and times

### Date functions

        - getMonth() - return month in given date. eg. birthday.getMonth();
        - getaDate() - return date in given date.
        - getDay() - return weekday of given date.
        - getFullyear() -return year in given date.
        - gethours() - return hours in given date.
        - getMinutes() - return Minutes in given date.
        - getSeconds() - return Seconds in given date.
        - getMilliseconds() - return milliseconds of the given date.

### set values

        - setMonth() - for set month for given date.
                eg. const day1 = new Date(12-May-1988)
                    day1.setMonth(2) // output 12-March-1988
        - setDate() - for set date for given date.
        - setFullYear() - for set year for given date.
        - setHours() - for set hours for given date.
        - setMinutes() - for set minutes for given date.
        - setSeconds() - for set seconda for given date.

## 16_If Statement

### If statement

        - Syntax
                if ( condition) {
                        statement block -1 // if condition become true
                } else {
                        statement block -2 // condition become false
                }

### comparison operators

        - == (equal to)
                - Satisfy when values are equal.
        - != (not equal to)
                - Satisfy when values are not equal.
        - ===
                - Satisfy when values and types of both items are equal.
        - !==
                - Satisfy when values and types are not equal
        - > (greater than)
                - Satisfy when first item is greater than second one.
        - < (less than)
                - Satisfy when first item in less than second one.
        - >= (greaterthan equal to)
                - Satisfy when first item greater than or equal to second one.
        - <= (less than equal to) - Satisfy when first item is lessthan or equal to second one

### if else

        - Syntax
                if( condition-1){
                        statement block - 1
                } else if( condition-2){
                        statement block - 2
                }
                .
                .
                .
                 else if(condition -n){
                        statement block - n
                } else {
                         default statement
                }

### Logical Operations

        - && (AND)
                - check both  conditions are satisfied.
        - || (OR)
                - check if any of the condition is satisfied among both.
        - ternary operator (condition? statement 1: statement 2)
                - if condition is true then take  statement-1 otherwise choose statement-2

### Without Braces

        - we can write if statements without braces.
                eg. if (id == 10)
                        console.log("ten")
                    else
                        console.log("not ten")

## 17_Switches

        - Syntax
                switch (expression) {
                        case vale-1 :
                           statement block-1
                           break;
                        case vale-2 :
                           statement block-2
                           break;
                        .
                        .
                        .
                        case value-n :
                           statement block-n
                           break;
                        default :
                           default statement
                           break;
                }

## 18_Function Declaration

### Function declaration

        - function <functionname>() {
                do something here
        }
        - call function like
                <function name>();
        - function with console
                function test() {
                   console.log("hello");
                }
                test(); // display 'hello' on the console screen

        - funciton with return
                function test(){
                        return "hello";
                }
                console.log(test()); // display 'hello' on the console sreen

        - function with parameters
                - function test(name ="julie") {
                        return 'hello ' + name;
                }
                console.log(test("Sara")); // print 'hello Sara'

                -  // 'julie' is the default value of name in above example. if there no parameter value passed then pnamerint 'hello julie'

### Immedialety involcable function expression - IIFE

        - Syntax
                (function(<parameter value>) {
                statements- do something here
                })(<parameter value>);
        - Eg.
                (function(name) {
                        console.log("hi " +name)
                })('smith')
                // display  'hi smith'

### Property Method

        - when a function is put inside an object is called method
        - eg.
                const todo = {
                        add : function(){
                                console.log("add");
                        },
                        edit : function(no){
                                console.log("edit " + no);
                        }
                }

        - declare a function outside of the object
                - todo.delete = function() {
                        console.log("delete");
                }
        - call the above functions
                 todo.add();
                 todo.edit(33);
                 todo.delete()

## 19_General Loops

### for loop

        - Syntax
                for(initialization; condition; increament) {
                        statement block
                }

### while loop

        - Syntax
                while (condition) {
                        statement block
                        increamental section // if needed
                }

### do while

        - Syntax
         do {
                 statement block
                  increamental section // if needed
         } while (condition)

         - while loop executed atleast 1 time.

### Loop Through Array

        - eg.
                const numbers=['one','two','three']
                for (let i=0;i < numbers.length;i++) {
                        console.log(numbers[i])
                }
        - output
                one
                two
                three

### forEach loop

        - numbers.forEach(function(number){
                console.log(number);
        })
        - output like
                one
                two
                three

### for in loop

        - for (x in number){
                console.log(`${x} : ${number}`);
        }
        - output like
                0 : one
                1 : two
                2 : three

### MAP

        - const users =[
                {id :2},
                {id :3},
                {id :4}
        ]
        const ids= users.map(function(user){
                return user.id // return each element's id
        });
        consoel.log(ids);

## 20_Window objects

### prompt and confirm

        - prompt - accept input from user.
                const input = prompt();
        - confirm - confirm a decision
                - confirm("are you sure ?) // there are two buttons ok and cancel
                - eg. if(confirm("are you sure ?")) {
                        console.log("yes");
                } else {
                        console.log("no)
                }

### Window

         - window.outerWidth; - return outer width of the browser window.
         -  window.outerHeight; - return outer height of the browser window.
         - window.innerWidth; - return inner width of thew browser window (if inspect open then its not added).
         - window.innerHeight; -return inner Height of the browser window.
         window. scrollY - return scroll position of y axis.
         - window.scrollX - return scroll position of x axis.
         - window.location - return location details,host name post name etc..
                - hostname,href,port,search,reload etc..
        - window.history.length - length of the history(how may sites visited previously in current session).
        - window.navigator -return basic detials of browser like appName,appversion,userAgent,platform,vendor,language etc..

## 21_Block scope of let const

### global scope

        - all over the program.

### functional scope

        - variables declare inside a function have scope only inside function(scope only inside the  function brackets{})

### block scope

        -global variable declared in var data type have scope on a blocks(like if statement).
        - eg.
             var a = 2;
             let b = 4;
             const c = 5;
             if (true) {
                     var a = 5;
                     let b = 6;
                     const c = 8;
             }
             console.log(a) // return 5
             console.log(b) // return 4
             console.log(c) // return 5
