const userInput = document.querySelector("input");
const formButton = document.getElementById("newBook");
const form = document.querySelector("form");
const submitButton = document.getElementById("submitButton");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookRead = document.getElementsByName("isRead");
const table = document.querySelector("table");

let myLibrary = [];
let newBook;

function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
}

// const hp = new Book("Harry Potter", "J.K. Rowling", 500, true);
// const lotr = new Book("Lord of the Rings", "JRR Tolkien", 1000, true);

// myLibrary.push(hp);
// myLibrary.push(lotr);

function addBookToLibrary(book) {
    myLibrary.push(book);
}

// function displayBooks() {
//     for (let i = 0; i < myLibrary.length; i++) {
//         let card = document.createElement("p");
//         card.textContent = myLibrary[i].info();
//         container.appendChild(card);
//     }
// }

function displayBooks(book) {
    const row = document.createElement("tr");
    const title = document.createElement("td");
    title.textContent = book.title;
    const author = document.createElement("td");
    author.textContent = book.author;
    const isRead = document.createElement("td");
    isRead.textContent = book.isRead;
    const remove = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.classList.add("removeButton");
    table.appendChild(row);
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(isRead);
    row.appendChild(remove);
    remove.appendChild(removeButton);

    // Only removes last row row
    removeButton.onclick = () => {
        row.remove();
    }
}


// formButton.onclick = () => {
//     form.classList.remove("hidden");
// }

submitButton.addEventListener("click", () => {
    newBook = new Book(bookTitle.value, bookAuthor.value, bookRead.checked);
    addBookToLibrary(newBook);
    displayBooks(newBook);
});

