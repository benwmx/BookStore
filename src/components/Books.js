import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <>
      <div className="booksContainer">
        {books.map((book) => (
          <Book
            key={book.id}
            bookInfo={book}
          />
        ))}
      </div>
      <div className="horizontalSeparator"> </div>
      <AddBook />
    </>
  );
};

export default Books;
