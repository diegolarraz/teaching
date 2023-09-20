Bonjour maddamme e monsieur, welcome to this silly excercise.

<!-- I would disable GH Copilot to get the most out of this Challenge -->

## How to use

1. only code in the `library.ts` file.
2. run `npm test` to run the tests.
3. make the tests pass.

## Your task

1. In the library.ts file, define a `class` called `Book` with the following properties:

title (string)
author (string)
yearPublished (number, optional)

This class should have a constructor that takes in the title, author, and yearPublished as its arguments.

2. Add a method to the `Book` class called `getSummary()`. This method should return a `string` that provides a brief summary of the book

If the Book does not have a yearPublished, the summary should look like this:
`Title: SOME_TITLE, Author: SOME_AUTHOR`

If the Book does have a yearPublished, the summary should look like this:
`Title: SOME_TITLE, Author: SOME_AUTHOR, Year Published: SOME_YEAR`

3. Remember to test using the `npm test` command.

<!--  -->
<!--  -->

<!-- BONUSSSSSS TASKKKK -->

1. Uncomment the tests in the `library.test.ts` file.

2. Create a `Library` class which holds an `array of books` and has the following methods:

`addBook(book: Book)`: adds a book to the library
`removeBook(book: Book)`: removes a book from the library
`listBooks()`: lists all books in the library

Ensure that when adding a book, duplicate titles are not allowed.

3. Can you pass the tests you pasted in?
