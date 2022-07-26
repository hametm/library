const form = document.querySelector("form");
const submitButton = document.getElementById("submitButton");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookRead = document.querySelector('input[name="isRead"]');
const table = document.querySelector("table");

class Book {
    constructor(title, author, isRead) {
        this.title = title.value;
        this.author = author.value;
        this.isRead = isRead.checked;
    }
}

function addBookToLibrary(book) {
    const myLibrary = [];
    myLibrary.push(book);
}

function displayBooks(book) {

    // Create display
    const row = document.createElement("tr");
    const title = document.createElement("td");
    const author = document.createElement("td");
    const isRead = document.createElement("td");
    const remove = document.createElement("td");
    const removeButton = document.createElement("button");
    const toggleButton = document.createElement("button");

    // Link display to Book keys
    title.textContent = book.title;
    author.textContent = book.author;
    removeButton.textContent = "X";
    removeButton.classList.add("removeButton");

    // Build display
    table.appendChild(row);
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(isRead);
    row.appendChild(remove);
    remove.appendChild(removeButton);
    isRead.appendChild(toggleButton);
    
    // Remove button functionality
    removeButton.onclick = () => {
        row.remove();
    }

    // isRead toggle button functionality
    checkIfRead(book, isRead, toggleButton);

}

function checkIfRead(book, isRead, toggleButton) {

    // Create toggle button with default notRead status
    toggleButton.classList.add('notReadButton');
    displayToggleButton(book, toggleButton);

    toggleButton.onclick = () => {
        toggleButton.classList.toggle("readButton");
        book.isRead = !book.isRead;
        displayToggleButton(book, toggleButton);
    }
}

function displayToggleButton(book, toggleButton) {
    if (book.isRead) {
        toggleButton.textContent = "Read";
        toggleButton.classList.add("readButton");
    } else {
        toggleButton.textContent = "Not read";
        toggleButton.classList.add("notReadButton");
    }
}

function enableSubmitButton() {
    checkFormInput();
    bookTitle.oninput = () => {
        if (!(bookAuthor.value === "")) submitButton.disabled = false;
    }
    bookAuthor.oninput = () => {
        if (!(bookTitle.value === "")) submitButton.disabled = false;
    }
}

function checkFormInput() {
    if (bookTitle.value === "" || bookAuthor.value === "") submitButton.disabled = true;
}

function submitBook() {
    enableSubmitButton();
    submitButton.addEventListener("click", () => {
        if (bookTitle.value === "") bookTitle.setCustomValidity("Please fill out the field");
        let newBook = new Book(bookTitle, bookAuthor, bookRead);
        addBookToLibrary(newBook);
        displayBooks(newBook);
        form.reset();
        checkFormInput();
    });
}

submitBook();



