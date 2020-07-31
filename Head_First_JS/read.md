## Chapter 3

#### Functions

    Function is a reusable statement block that we can write inside a set of curly braces ({}). We can reuse a function over and over when you want.
    Function have name and parameters(optional) and function name is used for involking function with ().
    Function helps you avoid reusability of code and program become more readable.


    syntax :-

        function functionName(parameter-1,parameter-2...,parameter-N) {
            //^ paramenters are optional
            // statement block
        }

        functionName(arg-1,arg-2...,arg-N); // call or involk function with arguments(optional)


    - Javascript passes arguments to a function using pass-by-value.
    - there is no argument pass then parametes set to undefined.

        eg.
        function makeTea(cups,tea) {
            console.log(cups + " cups of " + tea);   // output :- 3 cups of undefined
        }
        maekTea(3);

    - If we pass too many arguments JS ignores the extra arguments.
    - Function return
        funtion addNumbers (no1,no2){
            let sum = no1 + no2;    // local variable
            return sum;
        }

        let  result = addNumbers(12,12);   // global variable
        console.log(result);   // output:-24


    - variable scope of a variable inside the function is within the function.
    - Parameters shadow global variables.
    -Javascript make 2 passes over the program(Read all the definitions, Executing the code).
    - If you forgot to declare a globel variable it will become global variable.
