class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById("book-list");
    // create tr element
    const row = document.createElement("tr");
    // insert cols
    row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" class="delete">X</a>
          `;
    list.appendChild(row);
  }

  showAlert(message, className) {
    // create div
    const div = document.createElement("div");
    // add classes
    div.className = `alert ${className}`;
    // add text
    div.appendChild(document.createTextNode(message));
    // ?get parents
    const container = document.querySelector(".container");
    // get form
    const form = document.querySelector("#book-form");
    // insert alert
    container.insertBefore(div, form);

    // set timeout after 3 seconds
    setTimeout(function() {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

// EVENT LISTENERS for add book
document.getElementById("book-form").addEventListener("submit", function(e) {
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // instanitate book
  const book = new Book(title, author, isbn);
  // ?instantiate UI
  const ui = new UI();
console.log(ui);

  // validate fields
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // Add book to list
    ui.addBookToList(book);

    // show success
    ui.showAlert("Book Added", "success");
    // clear fields
    ui.clearFields();
  }
  e.preventDefault();
});

// EVENT LISTENER FOR DELETE BOOK
document.getElementById("book-list").addEventListener("click", function(e) {
  // instantiate UI
  const ui = new UI();

  // delete book
  ui.deleteBook(e.target);

  // show message
  ui.showAlert("Book Removed", "success");
  e.preventDefault();
});
