
let BookStore = JSON.parse(localStorage.getItem("BookInfo")) || [];
displayBook(BookStore);

function Author(name, birthYear, nationality) {
  this.Author = name;
  this.YearOfBirth = birthYear;
  this.Nationality = nationality;
}

function Book(name, birthYear, nationality, image, title, genre, price) {
  Author.call(this, name, birthYear, nationality);
  this.BookTitle = title;
  this.Genre = genre;
  this.Price = price;
  this.Poster = image;

  this.getBookInfo = function () {
    let book = {
      Title: this.BookTitle,
      Author: this.Author,
      Genre: this.Genre,
      Price: this.Price,
    };
    BookStore.push(book);
    localStorage.setItem("BookInfo", JSON.stringify(BookStore));
    return BookStore;
  };
}

function displayBook(array) {
  let Container = document.getElementById("container");
  Container.innerHTML = "";

  array.forEach(function (array) {

    let div=document.createElement("div");
    let bookName = document.createElement("h1");
    bookName.innerText = "Name : " + array.Title;
    let Author = document.createElement("h2");
    Author.innerText = "Author : " + array.Author;
    let Genre = document.createElement("p");
    Genre.innerText = "Genre : " + array.Genre;
    let Price = document.createElement("h1");
    Price.innerText = "Price : " + array.Price;
   
    let Button=document.createElement("button");
    Button.innerText="Add To Cart"
    div.append(bookName, Author, Genre, Price,Button);
    Container.append(div);
  });
}

function pushToLocalStorage() {
  if (BookStore.length === 0) {
    let Book1 = new Book(
      "Anne Frank",
      1929,
      "German",
      "The Diary Of a Young Girl",
      "Autobiography",
      200
    );
    let Book2 = new Book(
      "William Shakespeare",
      1564,
      "English",
      "Romeo and Juliet",
      "Love Story",
      150
    );
    let Book3 = new Book(
      "Chetan Bhagat",
      1974,
      "Indian",
      "2 States: The Story of My Marriage",
      "Novel",
      250
    );
    let Book4 = new Book(
      "Kiran Desai",
      1971,
      "Indian",
      "Hullabaloo in the Guava Orchard",
      "Novel",
      150
    );
    let Book5 = new Book(
      "Charles Dickens",
      1812,
      "English",
      " A Christmas Carol ",
      "Novel",
      200
    );
    let Book6 = new Book(
      "Mulk Raj Anand",
      1905,
      "Indian",
      "Untouchable ",
      "Novel",
      200
    );
    let Book7 = new Book(
      "Mulk Raj Anand",
      1905,
      "Indian",
      "Two Leaves and a Bud",
      "Novel",
      200
    );

    Book1.getBookInfo();
    Book2.getBookInfo();
    Book3.getBookInfo();
    Book4.getBookInfo();
    Book5.getBookInfo();
    Book6.getBookInfo();
  }
}

pushToLocalStorage();
