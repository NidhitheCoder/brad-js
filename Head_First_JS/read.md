# Chapter 1 : Getting Your feet

### Javascript

- Javascript lets you create behaviour in your web pages.
- <script>  element helps you to get Javascript into your web page.
- Javascript also used to script applications
- we can write JS queries inside script elements
  eg:-

    <script>
        console.log("hello");
    </script>

- You can import js file from outside using <script> element's src attribute.
  eg:-
    <script src="script.js"></script>

##### while Loop

- While loop executes/iterates till when the condition is false.
- Syntax :-
  while(contition) {
  //statement block
  }

##### Naming of variables

- Use var/let/const keywords used for declare a variable.
- Variable name starts with a letter,an underscore or a dollor sign.
- Avoid JS keywords when naming a variable.
- Use Camal cases for multiword names. eg: CamelCase
- Common type of expressions - numeric,string and boolean

##### If Statement

- if statement check the conditional test is true.
- Syntax :-
  if(condition-1) {
  statement-block-1
  } else if ( condition-2) {
  statement-block-2
  }
  .
  .
  .
  else if(condition-N) {
  statement-block - N
  } else {
  Statement-block-default
  }

  - statement block-1 execute when condition-1 is true.
  - 'else if' parts 'else' part are optional.
  - 'else if' is also have same working flow of 'if'.
  - 'else' part is the default part.

#### Communication with user

- console.log() - used for simple debugging purposes.
- document.write() - Helps to insert a little html and text into a document
- alert() - Helps to deliver short messages to user
- document object model - helps to totaly control your webpage.
