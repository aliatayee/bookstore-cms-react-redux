const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
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
