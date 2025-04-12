// routers/booksRouter.js
const express = require('express');
const router = express.Router();
const Book = require('../models/book'); // Adjust the path as necessary




// Route to display a single book's details
router.get('/', async (req, res) => {
  try {
    const books = await Book.getAllBooks();
    res.render('show',  {books} );
  } catch (error) {
    res.status(404).send('Book not found');
  }
});



module.exports = router;

