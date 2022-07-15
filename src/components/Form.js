import { React, useState } from 'react';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux/es/exports';
import { addBookStore } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    const uid = v4();
    const category = 'book';
    setInputs((values) => ({
      ...values, item_id: uid, [name]: value, category,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookStore(inputs));
    setInputs('');
  };
  return (
    <form className="mb-8" onSubmit={handleSubmit} action="/">
      <div className="border-t border-t-slate-200 pt-5 mt-8">
        <h2 className="text-lg font-bold text-gray-400">ADD NEW BOOK</h2>
      </div>
      <div className="md:flex">
        <div className="md:w-1/2 sm:w-full md:pr-8">
          <input
            type="text"
            name="title"
            value={inputs.title || ''}
            onChange={handleChange}
            className="form-input mt-3 block w-full border-slate-500 rounded-sm border-gray-300 shadow-sm py-2 rounded"
            placeholder="Book Title"
          />
        </div>
        <div className="md:w-1/3 sm:w-full md:pr-8 ">
          <input
            type="text"
            name="author"
            value={inputs.author || ''}
            onChange={handleChange}
            className="form-input mt-3 border-slate-500 block w-full rounded-sm border-gray-300 shadow-sm py-2 rounded"
            placeholder="Author"
          />
        </div>
        <div className="md:w-1/4 sm:w-full border-none "><button type="submit" className="form-input mt-3 px-12 py-2  w-full bg-blue-500 border-none text-white rounded-sm">Add Book</button></div>
      </div>
    </form>
  );
};
export default Form;
