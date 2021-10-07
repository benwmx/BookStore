import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../../redux/books/books';

const Info = (props) => {
  const { bookInfo } = props;
  const dispatch = useDispatch();

  const removeBookFromStore = () => {
    dispatch(removeBookFromApi(bookInfo.id));
  };

  return (
    <div className="info">
      <p className="category">{bookInfo.category}</p>
      <p className="title">{bookInfo.title}</p>
      <p className="author">{bookInfo.author}</p>
      <div className="creButtons">
        <button type="button" className="comments">Comments</button>
        <button type="button" className="remove" onClick={removeBookFromStore}>Remove</button>
        <button type="button" className="edit">Edit</button>
      </div>
    </div>
  );
};

Info.propTypes = {
  bookInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
export default Info;
