// BOOK CONSTRUCTOR 
function Book(title,author,isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//  UI CONSTRUCTOR 
function UI(){}

// Add to book list 
UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    // create tr element
    const row = document.createElement('tr');
    // insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a>
    `;
    list.appendChild(row);
}

// show alert
UI.prototype.showAlert = function (message,className) {
    // create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector('.container');
    // get form
    const form = document.querySelector('#book-form');
    // insert alert
    container.insertBefore(div,form);

    // set timeout after 3 seconds
    setTimeout(function() {
      document.querySelector('.alert').remove();
    }, 3000);
}

// clear fields
UI.prototype.clearField = function () {
document.getElementById('title').value = "";
document.getElementById('author').value = "";
document.getElementById('isbn').value = "";
}

// EVENT LISTENERS 
document.getElementById('book-form').addEventListener('submit', function(e) {
const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

    // instantiate book
    const book = new Book(title,author,isbn);

    // instantiate UI
    const ui = new UI();

    // validate field
    if (title === '' || author === '' || isbn === '') {
        // alert("Failed to Add. please fill all the fields");
        ui.showAlert('Please fill in all fields' ,'error');
    } else {
    // add book to list
    ui.addBookToList(book);

    // show success
    ui.showAlert('Book Added!','success');

    // clear fields
    ui.clearField();
    }
    e.preventDefault();
})