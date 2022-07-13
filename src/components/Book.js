import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const { id, title, author } = book;
  const dispatch = useDispatch();
  const removeBookHandle = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="bg-white p-3 border rounded mb-5">
      <div className="md:grid grid-cols-2">
        <div className="grid pl-5">
          <span className="text-gray-400">Action</span>
          <h2 className="font-bold text-lg">{title}</h2>
          <p className="text-blue-400">{author}</p>
          <div className="md:flex pt-3 pb-3 text-blue-400">
            <p className="md:pr-3 md:border-r-2">Comments</p>
            <button
              type="button"
              onClick={() => removeBookHandle(id)}
              className="md:pr-3 md:pl-3 md:border-r-2"
            >
              Remove
            </button>
            <p className="md:pr-3 md:pl-3 md:border-r-2">Edit</p>
          </div>
        </div>
        <div className="md:flex items-center justify-around pl-5">
          <div className="pr-24 md:border-r">
            <h2 className="text-2xl font-bold">64%</h2>
            <div>Completed</div>
          </div>
          <div>
            <div className="text-gray-400">Current chapter</div>
            <div>Chapter 12</div>
            <div className="mt-3"><button type="button" className="form-input px-8 py-1 bg-blue-500 border-none text-white rounded">Update Progress</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
