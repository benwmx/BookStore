const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [{
  id: '01', title: 'Book', author: 'John', category: 'action',
}, {
  id: '02', title: 'Book', author: 'John', category: 'action',
}];

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: return [...state, action.payload];
    case REMOVE_BOOK: return state.filter((book) => book.id !== action.payload);
    default: return state;
  }
};

export { booksReducer as default, addBook, removeBook };
