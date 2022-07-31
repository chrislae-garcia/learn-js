# Basic Construction Exercise

<b>Instructions:</b>
Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s `title`, `author`, the number of `pages`, and whether or not you have `read` the book.

Put a function into the constructor that can report the book info like so:

```js
theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
```

Note: It is almost *always* best to `return` things rather than putting `console.log()` directly into the function. In this case, return the `info` string and log it after the function has been called:

```js
console.log(theHobbit.info());
```

[TOP Reference](https://www.theodinproject.com/lessons/node-path-javascript-objects-and-object-constructors#exercise).