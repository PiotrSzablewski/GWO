import axios from '../../axios-orders';


export const REQ_BOOKS = 'REQ_BOOKS';
export const BOOKS_SUCCESS = 'BOOKS_SUCCESS';
export const BOOKS_FAIL = 'BOOKS_FAIL';


export const requestBooks = () => ({
  type: REQ_BOOKS,

});
export const booksSuccess = (books) => ({
  type: BOOKS_SUCCESS,
  books: books
})
export const booksFail = (error) => ({
  type: BOOKS_FAIL,
  error: error
})

export function fetchBooks(term) {

  return (dispatch) => {
    dispatch(requestBooks());
    return axios.get(`/search?query=${term} `)
      .then(response => {
        dispatch(booksSuccess(response.data));
      })
      .catch(err => {
        dispatch(booksFail(err));
      });
  }
}
