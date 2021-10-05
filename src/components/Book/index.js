import React from 'react';
import Info from './Info';
import Progress from './Progress';
import Chapter from './Chapter';

const Book = () => (
  <div className="bookInfoContanier">
    <Info />
    <Progress />
    <span className="verticalSeparator"> </span>
    <Chapter />
  </div>
);

export default Book;
