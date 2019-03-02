import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar.js';
import BookCard from './BookCard.js';

class App extends Component {
  state = {
    books: []
}
updateResults = books => {
  this.setState({books: books})
}
//function that sets the state of this component to what's passed back from search bar

  render() {
    console.log('RENDERING'); console.log(this.state.books);
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
