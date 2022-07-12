import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const reducers = configureStore({
  books: bookReducer,
  categories: categoryReducer,
});

export default reducers;
