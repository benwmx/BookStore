import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';
import Progress from './Progress';
import Chapter from './Chapter';
import './index.scss';

const Book = (props) => {
  const { bookInfo } = props;
  return (
    <div className="bookInfoContainer">
      <Info bookInfo={bookInfo} />
      <Progress />
      <div className="verticalSeparator"> </div>
      <Chapter />
    </div>
  );
};

Book.propTypes = {
  bookInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
