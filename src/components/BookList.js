import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Book from './Book';
import { fetchBook } from '../redux/books/books';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook());
  }, []);
  return (
    <div className="mb-5 mt-5 ">
      {books.length ? books.map((book) => <Book key={book.item_id} book={book} />)
        : <p>No Books available!</p>}
    </div>
  );
};
export default BookList;
