import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { getListOfBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListOfBooks());
  }, []);
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
