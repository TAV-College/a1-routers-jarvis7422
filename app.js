// app.js
const express = require('express');
const app = express();
const path = require('path');
const booksRouter = require('./routers/booksRouter');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Set up view engine (e.g., EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the booksRouter for routes starting with /books
app.use('/books', booksRouter);

// Existing routes and middleware
// ...

module.exports = app;
