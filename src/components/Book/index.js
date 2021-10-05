import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';
import Progress from './Progress';
import Chapter from './Chapter';

const Book = (props) => {
  const { bookInfo } = props;
  return (
    <div className="bookInfoContanier">
      <Info bookInfo={bookInfo} />
      <Progress />
      <div className="verticalSeparator"> </div>
      <Chapter />
    </div>
  );
};

Book.propTypes = {
  bookInfo: PropTypes.shape.isRequired,
};

export default Book;
