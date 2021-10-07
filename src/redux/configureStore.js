import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
