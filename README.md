# Books REST API !

A simple RESTful API built with **Node.js** and **Express** to manage a list of books with full CRUD operations. This project is ideal for learning REST API basics, Express routing, and in-memory data handling.

---

## Features

- **GET /books** - Retrieve all books
- **POST /books** - Add a new book
- **PUT /books/:id** - Update an existing book
- **DELETE /books/:id** - Delete a book

---

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing with Postman](#testing-with-postman)
- [Sample Data](#sample-data)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/books-rest-api.git
   cd books-rest-api
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the server:**
   ```bash
   npm start
   ```

The server will run on `http://localhost:3000`

---

## Usage

You can interact with the API using tools like **curl**, **Postman**, or any HTTP client.

### Example with curl

- **Get all books:**
  ```sh
  curl http://localhost:3000/books
  ```
- **Add a new book:**
  ```sh
  curl -X POST http://localhost:3000/books -H "Content-Type: application/json" -d '{"title":"Book Title","author":"Author Name"}'
  ```
- **Update a book:**
  ```sh
  curl -X PUT http://localhost:3000/books/1 -H "Content-Type: application/json" -d '{"title":"Updated Title","author":"Updated Author"}'
  ```
- **Delete a book:**
  ```sh
  curl -X DELETE http://localhost:3000/books/1
  ```

---

## API Endpoints

### GET /books
Returns all books in the system.

**Response:**
```json
[
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald"
  }
]
```

### POST /books
Adds a new book to the system.

**Request Body:**
```json
{
  "title": "Book Title",
  "author": "Author Name"
}
```
**Response:**
```json
{
  "id": 4,
  "title": "Book Title",
  "author": "Author Name"
}
```

### PUT /books/:id
Updates an existing book by ID.

**Request Body:**
```json
{
  "title": "Updated Book Title",
  "author": "Updated Author Name"
}
```
**Response:**
```json
{
  "id": 1,
  "title": "Updated Book Title",
  "author": "Updated Author Name"
}
```

### DELETE /books/:id
Deletes a book by ID.

**Response:**
```json
{
  "message": "Book deleted successfully",
  "book": {
    "id": 3,
    "title": "1984",
    "author": "George Orwell"
  }
}
```

---

## Testing with Postman

1. Open Postman
2. Create requests for each endpoint:
   - GET: `http://localhost:3000/books`
   - POST: `http://localhost:3000/books` (with JSON body)
   - PUT: `http://localhost:3000/books/1` (with JSON body)
   - DELETE: `http://localhost:3000/books/1`

**Tip:** Set `Content-Type: application/json` for POST and PUT requests.

---

## Sample Data

The API comes with 3 sample books pre-loaded:
- The Great Gatsby by F. Scott Fitzgerald
- To Kill a Mockingbird by Harper Lee
- 1984 by George Orwell

---

## Troubleshooting
- **Book not found:** Ensure you are using the correct numeric ID. Use GET `/books` to list current books.
- **Data loss after restart:** The API uses in-memory storage. All added books are lost when the server restarts.
- **400 Bad Request:** Both `title` and `author` are required in POST/PUT requests.

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

---

## License

This project is licensed under the MIT License. 
