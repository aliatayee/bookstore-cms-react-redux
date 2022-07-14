import axios from 'axios';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';
const initialState = [];

const onSuccess = (books) => ({
  type: FETCH_BOOKS,
  payload: books,
});

export const fetchBook = () => async (dispatch) => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jMHCk1wdPqSkkAgg4ygB/books');
  const booksFetched = Object.entries(response.data).map((item) => {
    const {
      title, author, category,
    } = item[1][0];
    return {
      item_id: item[0],
      title,
      author,
      category,
    };
  });
  dispatch(onSuccess(booksFetched));
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: {
    item_id: book.item_id,
    title: book.title,
    author: book.author,
    category: book.category,
  },
});
export const addBookStore = (book) => async (dispatch) => {
  await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jMHCk1wdPqSkkAgg4ygB/books', book, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch(addBook(book));
};

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: {
    item_id: book,
  },
});

export const removeBookStore = (book) => async (dispatch) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jMHCk1wdPqSkkAgg4ygB/books/${book}`);
  dispatch(removeBook(book));
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return [...state, action.payload];
    }
    case REMOVE_BOOK: {
      return state.filter((book) => book.item_id !== action.payload.item_id);
    }
    case FETCH_BOOKS: {
      return action.payload;
    }
    default: { return state; }
  }
};

export default bookReducer;
