const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [];
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/i0GsPAoEktSI0pl0yKFK/books/';

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const addBookToApi = (payload) => (dispatch) => {
  const book = { item_id: payload.id, title: payload.title, category: payload.category };
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  }).then((response) => {
    if (response.status === 201) dispatch(addBook(payload));
  });
};

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

export {
  booksReducer as default,
  addBook,
  removeBook,
  addBookToApi,
};
