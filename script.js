// Buttons ID
const addBookButton = document.getElementById('add-book-btn');
const submitButton = document.getElementById('submit-btn');
const closeButton = document.getElementById('close-btn');

// Form 
const formContainer = document.querySelector('form');

// Inputs ID
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');

let myLibrary = [];

// Button Events
addBookButton.addEventListener('click', () => {
    formContainer.style.display = 'grid';
})

closeButton.addEventListener('click', () => {
    formContainer.style.display = 'none';
})

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
})

function Book(titleVal, authorVal, pagesVal, readVal) {
  // the constructor...
  this.titleVal = titleVal;
  this.authorVal = authorVal;
  this.pagesVal = pagesVal;
  if(readVal.checked){
    this.readVal = true;
  }
  else if(!readVal.checked){
    this.readVal = false;
  }
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
  const titleVal = title.value;
  const authorVal = author.value; 
  const pagesVal = pages.value;
  const readVal = document.getElementById('read'); 

  const bookConstructor = new Book(titleVal, authorVal, pagesVal, readVal);
  myLibrary.push(bookConstructor);
  display();
}

function display(){
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = '';
    //   For Each Loop
    myLibrary.forEach((book, index) => {
        // Title
        const cardTitle = document.createElement('p');
        cardTitle.textContent = `Title: ${book.titleVal}`;

        // Author
        const cardAuthor = document.createElement('p');
        cardAuthor.textContent = `Author: ${book.authorVal}`;

        // Pages
        const cardPages = document.createElement('p');
        cardPages.textContent = `Pages: ${book.pagesVal}`;
        
        // Read or Not
        const cardReadStatus = document.createElement('p');
        
        // Delete Button and Read or Not Button 
        const deleteOrRead = document.createElement('div');
        deleteOrRead.classList = 'delete-or-read';
        // Delete
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            display();
        })
        // Read or not
        const readOrNotButton = document.createElement('button');

        if(book.readVal){
            cardReadStatus.textContent = `Read`;
            readOrNotButton.textContent = `Not Read`;
        }
        else if(!book.readVal){
            cardReadStatus.textContent = `Not Read`;
            readOrNotButton.textContent = `Read`;
        }

        deleteOrRead.append(deleteButton, readOrNotButton);
        cardContainer.append(cardTitle, cardAuthor, cardPages, cardReadStatus, deleteOrRead);
    })
}
