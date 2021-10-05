import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const books = [];
  return (
    <>
      <div className="booksContainer">
        {books.map((book) => (
          <Book key={book.id} />
        ))}
      </div>
      <div className="horizontalSeparator"> </div>
      <AddBook />
    </>
  );
};

export default Books;
