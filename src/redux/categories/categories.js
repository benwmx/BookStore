import { v4 as uuidv4 } from 'uuid';

const ADD_CATEGORY = 'bookstore/books/ADD_CATEGORY';
const REMOVE_CATEGORY = 'bookstore/books/REMOVE_CATEGORY';

const initialState = [
  {
    id: uuidv4(),
    name: 'Fiction',
  },
  {
    id: uuidv4(),
    name: 'Biography',
  },
  {
    id: uuidv4(),
    name: 'Food & Drink',
  },
  {
    id: uuidv4(),
    name: 'Art & Photography',
  },
  {
    id: uuidv4(),
    name: 'Self-help',
  },
  {
    id: uuidv4(),
    name: 'Travel',
  },
  {
    id: uuidv4(),
    name: 'Humour',
  },
];

const addCategory = (payload) => ({
  type: ADD_CATEGORY,
  payload,
});

const removeCategory = (payload) => ({
  type: REMOVE_CATEGORY,
  payload,
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY: return [...state, action.payload];
    case REMOVE_CATEGORY: return state.filter((category) => category.id !== action.payload);
    default: return state;
  }
};

export {
  categoriesReducer as default,
  addCategory,
  removeCategory,
};
