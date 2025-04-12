const Book = require('../models/book');

// Function to get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.render('books/index', { books });
  } catch (err) {
    res.status(500).send(err);
  }
};

// Function to get a single book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).send('Book not found');
    }
    res.render('books/show', { book });
  } catch (err) {
    res.status(500).send(err);
  }
};

// Function to create a new book
exports.createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.redirect('/books');
  } catch (err) {
    res.status(400).send(err);
  }
};

// Function to update a book by ID
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).send('Book not found');
    }
    res.redirect(`/books/${updatedBook.id}`);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Function to delete a book by ID
exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).send('Book not found');
    }
    res.redirect('/books');
  } catch (err) {
    res.status(500).send(err);
  }
};
