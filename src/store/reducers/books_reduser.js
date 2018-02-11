import {
  REQ_BOOKS,
  BOOKS_SUCCESS,
  BOOKS_FAIL
} from '../actions';
const initialState = {
  books: [],
  isFetching: false,
  pages: 0,
  isEmpty: false
}
const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};
const fetchBooksSuccess = (state, action) => {

  return updateObject(state, {
    isEmpty: !Array.isArray(action.books) || action.books.length === 0,
    books: action.books,
    isFetching: false,
    pages: Math.ceil(action.books.length / 6)

  });
};
const fetchBooksFail = (state, action) => {

  return updateObject(state, {
    isFetching: false
  });
};
export default function(state = initialState, action) {
  switch (action.type) {
    case REQ_BOOKS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case BOOKS_SUCCESS:
      return fetchBooksSuccess(state, action);
    case BOOKS_FAIL:
      return fetchBooksFail(state, action);
    default:
      return state;
  }

}
