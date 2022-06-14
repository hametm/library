const form = document.querySelector("form");
const submitButton = document.getElementById("submitButton");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookRead = document.querySelector('input[name="isRead"]:checked'?.value);
const table = document.querySelector("table");

let myLibrary = [];
let newBook;

function Book(title, author, isRead) {
    this.title = title.value;
    this.author = author.value;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    // book.setAttribute('id', myLibrary.indexOf(book));
    // console.log(book.getAttribute('id'))
    

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
    const author = document.createElement("td");
    const isRead = document.createElement("td");
    const remove = document.createElement("td");
    const removeButton = document.createElement("button");

    title.textContent = book.title;
    author.textContent = book.author;
    isRead.textContent = book.isRead;
    removeButton.textContent = "X";
    removeButton.classList.add("removeButton");

    table.appendChild(row);
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(isRead);
    row.appendChild(remove);
    remove.appendChild(removeButton);

    // Only removes last row
    for (let i = 0; i < myLibrary.length; i++) {
        row.setAttribute('id', i);
        removeButton.setAttribute('id', i);
    }

    removeButton.onclick = () => {
        // if (removeButton.getAttribute("id") === row.getAttribute("id")) {
        //     let matchingId = removeButton.getAttribute('id');
        //     console.log(matchingId);
        // }
        // let removedRow = document.querySelector('[data-id=matchingId');
        // removedRow.remove();
        row.remove();
    }
}

submitButton.addEventListener("click", () => {
    newBook = new Book(bookTitle, bookAuthor, bookRead);
    addBookToLibrary(newBook);

    displayBooks(newBook);
    form.reset();
});


