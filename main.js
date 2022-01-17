function Book(title, author, pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return "Book name: " + title + "\n" + "author: " + author;
    }
}


let MyLibrary = [];

function addBookToLibrary(book){
    MyLibrary.push(book);
}

function displayBooks(arr){
    for(const book in arr){
    let tag = document.createElement('li');
    const text = document.createTextNode(book.info());
    tag.appendChild(text);
    uList = document.getElementById('bookList');
    uList.appendChild(tag);
    }
}
let book1 = new Book("name1","author1",50,true);
let book2 = new Book("name2","author2",30,false);

addBookToLibrary(book1);
addBookToLibrary(book2);
displayBooks(MyLibrary);
