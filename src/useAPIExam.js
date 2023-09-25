import "./App.css";
import React, { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const apiKey = "AIzaSyA5PZL32JJkihizj4a7jnRqRn8Xua0-c4U";

  const searchBooks = async () => {
    try {
      const response = await fetch(
        // `https://www.googleapis.com/books/v1/volumes?q=jostein+gaarder&key=${apiKey}`
        // `https://www.googleapis.com/books/v1/volumes?q=backman&key=${apiKey}`
        // `https://www.googleapis.com/books/v1/volumes?q=subject:best+sellers&orderBy=newest&key=${apiKey}`
        // `https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=${apiKey}`
        `https://www.googleapis.com/books/v1/volumes?q=m&orderBy=newest&key=${apiKey}`
      );
      const data = await response.json();
      setBooks(data.items);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <h1 className="text-blue-600 text-3xl font-bold">sss</h1>
      <button onClick={searchBooks}>Search Books</button>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.volumeInfo.title}</h2>
          <p>{book.volumeInfo.authors}</p>
          {book.volumeInfo.imageLinks &&
            book.volumeInfo.imageLinks.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="Book cover img"
              />
            )}
        </div>
      ))}
    </div>
  );
}

export default App;
