# Chapter 9 : Asynchronous coding : Handiling events

### Events
 - Responses from the users 

 ### Event Handlers
 - We write handlers to handle events. Handlers are typically a small pieces of code that know what to do  when an event occurs. In terms of code,a handler is just a function.
 - Whenever the click event handler is called, its passed an event object.
 - document.getElementById()  helps to get an element using it's id.
    - usage :  let element = document.getElementById("<elementIdHere>");
 - Functions are used for handlers becouse function allow us to package up code to be executed later.
 - Event handlers are asynchronus.
 - Event objects contain properties with  extra information about the event, including the type.

 #### setTimeout & setInterval
  - The fucntions setTimeout and setInterval are used to generate time based  events after a certain time has passed.

    - setTimeout - syntax:
        setTimeout(function, time);

    - setInterval - syntax:
        setInterval(funciton,time);
        
        - Time in milliseconds.
        - You can use an anonymous function and a normal function in function place.


 - The getElementByTagName helps to get multiple elements using a specific tagname(like div, span,img,button etc..).
