import React from 'react';
import Book from './Book';

const books = {
  title: 'The Hunger Games',
  author: 'Suzanne Collins',
};
const BookList = () => (
  <div className="mb-5 mt-5 ">
    <Book books={books} />
  </div>
);
export default BookList;
