const userInput = document.querySelector("input");
const container = document.getElementById("container");
const formButton = document.getElementById("newBook");
const form = document.querySelector("form");
const submitButton = document.getElementById("submitButton");

let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function() {
        return `${title}, by ${author}, ${pages} pages, ${isRead}`;
      }
}

const hp = new Book("Harry Potter", "J.K. Rowling", 500, true);
const lotr = new Book("Lord of the Rings", "JRR Tolkien", 1000, true);

myLibrary.push(hp);
myLibrary.push(lotr);

function addBookToLibrary() {
    myLibrary.push(userInput);
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement("p");
        card.textContent = myLibrary[i].info();
        container.appendChild(card);
        console.log(container.textContent);
    }
}

formButton.onclick = () => {
    form.classList.remove("hidden");
}

submitButton.onclick = () => {
    new Book()
}

displayBooks();