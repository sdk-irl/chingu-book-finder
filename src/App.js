import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar.js';
import BookCards from './BookCards.js';

class App extends Component {
  state = {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Book Finder</h1>
        </header>
        <SearchBar/>
        <BookCards/>

      </div>
    );
  }
}

export default App;
