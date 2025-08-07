const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory storage for books
let books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" }
];

// GET /books - Return all books
app.get('/books', (req, res) => {
    res.json(books);
});

// POST /books - Add a new book
app.post('/books', (req, res) => {
    const { title, author } = req.body;
    
    if (!title || !author) {
        return res.status(400).json({ error: 'Title and author are required' });
    }
    
    const newBook = {
        id: books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1,
        title,
        author
    };
    
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT /books/:id - Update a book by ID
app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author } = req.body;
    
    const bookIndex = books.findIndex(book => book.id === id);
    
    if (bookIndex === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }
    
    if (!title || !author) {
        return res.status(400).json({ error: 'Title and author are required' });
    }
    
    books[bookIndex] = {
        id,
        title,
        author
    };
    
    res.json(books[bookIndex]);
});

// DELETE /books/:id - Remove a book by ID
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex(book => book.id === id);
    
    if (bookIndex === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }
    
    const deletedBook = books.splice(bookIndex, 1)[0];
    res.json({ message: 'Book deleted successfully', book: deletedBook });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log('  GET    /books     - Get all books');
    console.log('  POST   /books     - Add a new book');
    console.log('  PUT    /books/:id - Update a book');
    console.log('  DELETE /books/:id - Delete a book');
}); 