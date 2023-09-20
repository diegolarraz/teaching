import { Book } from "./library";

describe("Book class tests", () => {
  it("should require title and author as strings", () => {
    const book = new Book("Sample Title", "Sample Author");

    expect(typeof book.title).toBe("string");
    expect(typeof book.author).toBe("string");
  });

  it("should have yearPublished as an optional number", () => {
    const bookWithYear = new Book("Sample Title", "Sample Author", 2023);
    const bookWithoutYear = new Book("Sample Title", "Sample Author");

    expect(typeof bookWithYear.yearPublished).toBe("number");
    expect(bookWithoutYear.yearPublished).toBeUndefined();
  });

  it("should correctly create a book instance and return its summary", () => {
    const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
    expect(book1.getSummary()).toBe(
      "Title: To Kill a Mockingbird, Author: Harper Lee, Year Published: 1960"
    );

    const book2 = new Book("1984", "George Orwell");
    expect(book2.getSummary()).toBe("Title: 1984, Author: George Orwell");
  });
});

// UNCOMMENT THE CODE BELOW TO RUN THE BONUS TESTS - not this line

// import { Library } from "./library";

// describe("Library class", () => {
//   let library: Library;

//   beforeEach(() => {
//     library = new Library();
//   });

//   describe("addBook", () => {
//     it("should add a book to the library", () => {
//       const newBook = new Book("Sample Title", "Sample Author");
//       const response = library.addBook(newBook);
//       expect(response).toBe("Book added successfully.");
//     });

//     it("should not allow duplicate titles", () => {
//       const newBook1 = new Book("Sample Title", "Sample Author");
//       const newBook2 = new Book("Sample Title", "Another Author");
//       library.addBook(newBook1);
//       const response = library.addBook(newBook2);
//       expect(response).toBe("Duplicate title not allowed.");
//     });
//   });

//   describe("removeBook", () => {
//     it("should remove a book by title", () => {
//       const newBook = new Book("Sample Title", "Sample Author");
//       library.addBook(newBook);
//       const response = library.removeBook("Sample Title");
//       expect(response).toBe("Book removed successfully.");
//     });

//     it("should return a message if the book is not found", () => {
//       const response = library.removeBook("Nonexistent Title");
//       expect(response).toBe("Book not found.");
//     });
//   });

//   describe("listBooks", () => {
//     it("should list all books in the library", () => {
//       const newBook1 = new Book("Title 1", "Author 1");
//       const newBook2 = new Book("Title 2", "Author 2");
//       library.addBook(newBook1);
//       library.addBook(newBook2);
//       const listedBooks = library.listBooks();
//       expect(listedBooks.length).toBe(2);
//       expect(listedBooks).toContain(newBook1);
//       expect(listedBooks).toContain(newBook2);
//     });
//   });
// });
