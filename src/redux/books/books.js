const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const initialState = [];
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});
export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return [...state, action.book];
    }
    case REMOVE_BOOK: {
      return state.filter((book) => book.id !== action.book);
    }
    default: { return state; }
  }
};

export default bookReducer;
