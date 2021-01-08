## Advanced Working with functions 

### 1. Recursion
- Recursion is a programming pattern that helps in situations where a task can be natuarally split into  several tasks of the same kind, but simpler.

### 2. Closure
- A closure is a function  that remember its  outer variables and can access them. In some languages, it is not possible, or a function should be written in a special way to make it happen.

### 3. The New function
- The "New function" syntax is another way to create function. It's rarely used , But sometimes  there's no alternative.
- Syntax:
    let func = new Function([arg-1,arg-2,...,arg-N],funcitonBody);

### Arrow functions
- Arrow functions are anonymous and change the way this binds in functions. It makes our code more concise  and simplifies functions scoping and this keyword.

### rest operator and spread operator
- Many javascript build in functions support an arbitory number of arguments such as.

### Global Object
- the global object provides  variables and functions that are available anywhere. By default, those that are build into the language or the environment . Recently gobal This was added to the language. As a standerdised name for a global object , that should be supported accross  all environment.

### Function objects 
- In javascript functions are objects itself.
- Properties :- name and length

### setTimeout and setInterval
- SetTimeout : Allows us to run a function once after the interval of time.
    Syntax: 
        let timerId = setTimeout(func|code,[delay],[arg1],[arg2],...);

- SetInterval :  Allows us to run a function repeatedly. Starting after the   interval of time. Then repeating continuously at that interval.
   Syntax:
        let timerId = setInterval(func|code,[delay],[arg1],[arg2],...);

### Function Binding
- When passing object methods as callbacks, for instance to setTimeout, there's a known problems of "losing this". Functions provide a build in method bind that allows fixing this.

- Syntax:
    <!-- simple syntax -->
    let boundFunc = func.bind(context);
- This is not available in arrow functions.

### Javascipt NameSpaces
- Javascript does not support namespaces. But the namespaces are important  as they help reduce the number of identifiers for variables,objects and functions that are added to the global scope in your application. Javascript is flexible language and there are ways to work around this limitation and implement your own namespaces.

### Prototypes
- In javascript, Objects have a special hidden property  known as prototype which depicts either null or referances anouther object. Now, That object is called prototype.
- Important features of prototype: prototypal inheritance and prototype methods , object without proto.

- Methods for setup prototypes
    1. Object.create(proto[,descriptors]);
    2. Object.getPrototypeOf(obj);
    3. Object.setPrototypeOf(Obj,Proto);

### Error handling
- For handling errors
- Try catch Method
    syntax:
        try {
            // code
        }
        catch(error) {
            // error handling
        }

### Modules in javascript
- A module is a self-contained piece of code  that group sematically-related variables and functions. Modules are not build in constructor in javascript. But the javascript module pattern provide a way to create modules that have well-defined  interfaces that are exposed clients of the module.

### Chaining Javascript Method
- Javascript allows you to involk mulitple methods on an object in a single expression.To involk multiple methods, We have chaining. Chaining is the process of stringing  the method calls together with dots between them.
- syntax:
        object.method1().method2().method3()...methodN();

### Generators
- Generators are special class of functions  that simplify the task of writing iterators. So, this functions produces  a sequence of results instead of a single value  and generates  a series of values.

