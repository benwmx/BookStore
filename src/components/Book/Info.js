import React from 'react';
import PropTypes from 'prop-types';

const Info = (props) => {
  const { bookInfo } = props;
  return (
    <div className="info">
      <p className="category">{bookInfo.category}</p>
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
  bookInfo: PropTypes.shape.isRequired,
};
export default Info;
