/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Info = (props) => {
  const { bookInfo } = props;
  return (
    <div className="info">
      <p className="category">Action</p>
      <p className="title">{bookInfo.title}</p>
      <p className="author">{bookInfo.author}</p>
      <div className="creButtons">
        <button type="button" className="comments">Comments</button>
        <button type="button" className="remove">Remove</button>
        <button type="button" className="edit">Edit</button>
      </div>
    </div>
  );
};

Info.propTypes = {
  bookInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
export default Info;
