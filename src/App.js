import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import SearchBar from './containers/SearchBar/search-bar';
import BookList from './containers/BookList/BookList'
class App extends Component {
  render() {
    return (
      <div className="container">
        <Logo />
        <SearchBar />
        <BookList />
      </div>
    );
  }
}

export default App;
