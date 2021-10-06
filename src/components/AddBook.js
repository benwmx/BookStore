import React, { useState } from 'react';

const AddBook = () => {
  const categories = [];
  const [book, setBook] = useState({ id: '', title: '', author: '' });

  const onChange = (event) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };

  const submitBookToStore = (event) => {
    event.preventDefault();
    console.log(book);
  };
  return (
    <>
      <h1 className="header">Add new book </h1>
      <form onSubmit={submitBookToStore}>
        <input type="text" className="bookTitle" placeholder="Book Title" name="title" value={book.title} onChange={onChange} />
        <input type="text" className="bookAuthor" placeholder="Book Author" name="author" value={book.author} onChange={onChange} />
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
