# Chapter 6 : Interacting with your webpage

### DOM : Document Object Model

- In javascipt, DOM is helps to interact with our webpages.
- Document is a global object.
- The document object has properties and methods you can use to access and modify the DOM.
- Call an element using by id with gelElementById method :- document.getElementById("<Element id Here>")
- When you grab an element from DOM using getElementById you will get al element object.
- An element object is the browser's internal representation of what you type into Your HTML file like <p>some text</p>.
- We can use innerHTML property of the element object to change the content of the element.
- If you trying to call an element id that doesn't exist, then the call to getElementById returns a null value.
- With DOM element GelElementByClassName, that you can use to get elements by class name.
- A class is like a group for giving styling. You can multiple elements in the same group.
- innerHTML property represents all the contents contained in your element.
- outerHTML property gets you all the HTML inside the element,as well as the element itself.
- textContent property represents all the text contents contained in your element.
- onload property of the window object helps you to load any code after the page fully loaded.
- setAttribute of an element object is helps to set the value of an HTML element's attribute.
  eg:- planet.setAttribute("class","red-color");

  In the above example, "planet" is the variable that hold element object, "class" is the attribute to be changed, and the value of that specific attribute is "red-color". "red-color" is a css class.

- We use setAttribute method to either add a new attribute or change an existing attribute of the specific element object.
- getAttribute method helps to get the value of an HTML element's attribute.
