import fs from "fs";

const books = JSON.parse(fs.readFileSync("./books.json"));

const bookManager = (function (data) {
  const books = data;
  return {
    getAllTitle: function () {
      return books.map((book) => book.title);
    },
    getAllAuthor: function () {
      return books.map((book) => book.author);
    },
    getAllPrice: function () {
      return books.map((book) => book.price);
    },
    getTitleById: function (id) {
      return books.find((book) => book.id === id);
    },
  };
})(books);

console.log("AllTitle 결과 : ");
console.log(bookManager.getAllTitle());

console.log("getTitleById 결과 : ");
console.log(bookManager.getTitleById(3));
