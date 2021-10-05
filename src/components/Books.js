import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const books = [
    {
      title: 'Books',
      author: 'Rachid',
      category: 'Action',
    },
    {
      title: 'Books',
      author: 'Rachid',
      category: 'Action',
    },
    {
      title: 'Books',
      author: 'Rachid',
      category: 'Action',
    },
  ];
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
