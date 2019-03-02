import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar.js';
import BookCard from './BookCard.js';

class App extends Component {
  state = {
    books: []
}
//function that sets the state of this component to what's passed back from search bar
updateResults = books => {
  this.setState({books: books})
}
  //renders the header, search bar component, and as many book cards as the search returns, usually 10
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Book Finder</h1>
        </header>
        <SearchBar
          update={this.updateResults}
        />
        <div className="bookResults">
          {this.state.books.map((book, index) => {
            return <BookCard key={index} bookData={book.volumeInfo}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;
