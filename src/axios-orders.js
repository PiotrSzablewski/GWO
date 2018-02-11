import axios from 'axios';

const instance = axios.create({
    baseURL:'https://gwo.pl/booksApi/v1/'
});
export default instance;
