/* eslint-disable no-restricted-syntax */
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const ADD_LIST_OF_BOOKS_FROM_API = 'bookstore/books/ADD_LIST_OF_BOOKS_FROM_API';

const initialState = [];
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/i0GsPAoEktSI0pl0yKFK/books/';

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const addListOfBooksFromApi = (payload) => ({
  type: ADD_LIST_OF_BOOKS_FROM_API,
  payload,
});

// redux thunks middlewares for adding/getting/removing books from the API.
const addBookToApi = (payload) => (dispatch) => {
  const book = { item_id: payload.id, title: `${payload.title} #author# ${payload.author}`, category: payload.category };
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

const getListOfBooks = () => (dispatch) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => dispatch(addListOfBooksFromApi(data)));
};
//
const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const separateTitleFromAuthor = (titleAuthor) => ({
  title: titleAuthor.split('#author#')[0],
  author: titleAuthor.split('#author#')[1],
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: return [...state, action.payload];
    case REMOVE_BOOK: return state.filter((book) => book.id !== action.payload);
    case ADD_LIST_OF_BOOKS_FROM_API: {
      const bookList = [];
      const rawData = action.payload;
      for (const id in rawData) {
        if (Object.prototype.hasOwnProperty.call(rawData, id)) {
          const { category, title } = rawData[id][0];
          const titleAuthor = separateTitleFromAuthor(title);
          const book = {
            id,
            category,
            ...titleAuthor,
          };
          bookList.push(book);
        }
      }
      return bookList;
    }
    default: return state;
  }
};

export {
  booksReducer as default,
  addBook,
  removeBook,
  addBookToApi,
  getListOfBooks,
};
