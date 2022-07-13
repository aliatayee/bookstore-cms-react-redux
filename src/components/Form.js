import React from 'react';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux/es/exports';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    const [title, author] = e.target.elements;
    if (title.value.trim() && author.value.trim()) {
      const bookObject = {
        id: v4(),
        title: title.value.trim(),
        author: author.value.trim(),
      };
      dispatch(addBook(bookObject));
      title.value = '';
      author.value = '';
      title.focus();
    }
  };
  return (
    <form className="mb-8" onSubmit={handleForm} action="/">
      <div className="border-t pt-5 mt-8">
        <h2>Add new book</h2>
      </div>
      <div className="md:flex">
        <div className="md:w-1/2 sm:w-full md:pr-4">
          <input
            type="text"
            name="title"
            className="form-input mt-3 block w-full rounded-md border-gray-300 shadow-sm py-2 rounded"
            placeholder="Book Title"
          />
        </div>
        <div className="md:w-1/3 sm:w-full md:pr-4 ">
          <input
            type="text"
            name="author"
            className="form-input mt-3 block w-full rounded-md border-gray-300 shadow-sm py-2 rounded"
            placeholder="Author"
          />
        </div>
        <hr />
        <div className="md:w-1/4 sm:w-full "><button type="submit" className="form-input mt-3 px-12 py-2  w-full bg-blue-500 border-none text-white rounded">Add Book</button></div>
      </div>
    </form>
  );
};
export default Form;
