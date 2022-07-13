import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const categoryHandle = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div className="md:w-1/4 sm:w-full ">
        <button
          type="button"
          onClick={categoryHandle}
          className="form-input mt-3 px-12 py-2  w-full bg-blue-500 border-none text-white rounded"
        >
          Check status
        </button>
      </div>
      <p>{categories}</p>
    </div>
  );
};
export default Category;
