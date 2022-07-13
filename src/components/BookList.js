import { useSelector } from 'react-redux';
import React from 'react';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="mb-5 mt-5 ">
      {books.length ? books.map((book) => <Book key={book.id} book={book} />)
        : <p>No Books available!</p>}
    </div>
  );
};
export default BookList;
