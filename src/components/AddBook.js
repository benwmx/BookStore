import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const categories = [];
  const [book, setBook] = useState({ id: '', title: '', author: '' });
  const dispatch = useDispatch();

  const onChange = (event) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };

  const submitBookToStore = (event) => {
    event.preventDefault();
    if (book.title.trim() !== '' && book.author.trim() !== '') {
      const newBook = { ...book, id: uuidv4() };
      dispatch(addBook(newBook));
      setBook({ title: '', author: '' });
    }
  };
  return (
    <>
      <h1 className="header">Add new book </h1>
      <form onSubmit={submitBookToStore}>
        <input type="text" className="bookTitle" placeholder="Book Title" name="title" value={book.title} onChange={onChange} required />
        <input type="text" className="bookAuthor" placeholder="Book Author" name="author" value={book.author} onChange={onChange} required />
        <select name="categorie" id="categorie">
          {categories.map((category) => (
            <option key={category.id} value={category.name}>{category.name}</option>
          ))}
        </select>
        <button type="submit" className="submitBtn">Add Book</button>
      </form>
    </>
  );
};

export default AddBook;
