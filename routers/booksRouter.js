// routers/booksRouter.js
const express = require('express');
const router = express.Router();
const Book = require('../models/book'); // Adjust the path as necessary




// Route to display a single book's details
router.get('/', async (req, res) => {
  try {
    const books = await Book.getAllBooks();
    res.render('showALLBooks',  {books} );
  } catch (error) {
    res.status(404).send('Book not found');
  }
});

router.get('/new', async (req,res)=>{
  try{
    res.render('newBook');
  }catch(error){
    res.status(404).send('Page not found');
  }
})

router.get('/:id', async (req,res) => {
  try{
    ID = req.params.id;
    const books = await Book.getBookById(ID);
    res.render('bookById',{books});
  }catch(error){
    res.status(404).send('Book not found');
  }
})

router.post("/", async (req, res) => {
  const author = req.body.author;
  const title = req.body.title;
  const isbn = req.body.isbn;

  const result = await Book.addBook({ author, title, isbn});
  const ID = result.lastInsertRowid;

  res.redirect(`/books/${ID}`);
});


module.exports = router;

