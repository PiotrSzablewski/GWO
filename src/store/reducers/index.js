import { combineReducers } from 'redux';
import BooksReducer from './books_reduser';
const rootReducer = combineReducers({
  books : BooksReducer
});

export default rootReducer;
