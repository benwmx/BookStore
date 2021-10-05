import React from 'react';

const AddBook = () => {
  const categories = [];
  return (
    <>
      <h1 className="header">Add new book </h1>
      <form>
        <input type="text" className="bookTitle" placeholder="Book Title" />
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
