/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookToApi } from '../redux/books/books';

const AddBook = () => {
  const categories = useSelector((state) => state.categories);
  const [book, setBook] = useState({
    id: '', title: '', author: '', category: 'Fiction',
  });

  const [selectedCategory, setCategory] = useState('Fiction');

  const dispatch = useDispatch();

  const onChange = (event) => {
    if (event.target.name === 'category') setCategory(event.target.value);
    setBook((oldBook) => ({
      ...oldBook,
      [event.target.name]: event.target.value,
    }));
  };

  const submitBookToStore = (event) => {
    event.preventDefault();
    if (book.title.trim() !== '' && book.author.trim() !== '') {
      const newBook = { ...book, id: uuidv4() };
      dispatch(addBookToApi(newBook));
      setBook({ title: '', author: '', category: 'Fiction' });
    }
  };
  return (
    <>
      <h2 className="header">Add new book </h2>
      <form onSubmit={submitBookToStore}>
        <input type="text" className="bookTitle" placeholder="Book Title" name="title" value={book.title} onChange={onChange} required />
        <input type="text" className="bookAuthor" placeholder="Book Author" name="author" value={book.author} onChange={onChange} required />
        <select name="category" id="category" value={selectedCategory} onChange={onChange} required>
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
