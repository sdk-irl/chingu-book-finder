import React, { Component } from 'react';

//const API_KEY = "AIzaSyA8mV96_G2-uDhDT5EfxxYowv0wima9Jwg";
let googBooksUrl = "https://www.googleapis.com/books/v1/volumes?q=";

//Creates search bar component
class SearchBar extends Component {
    //sets a reference input to refer back to when searching for item
    setInputRef = ref => {
        this.inputValue = ref;
    }

    //update search function to handle fetching and returning Google Books API information
    updateSearch = () => {
        const request = new Request (googBooksUrl + this.inputValue.value, {
            method: "GET",
            dataType: "json"
        });

        //fetches Google book API info
        return fetch(request)
            //if response isn't okay, reads out error message
            .then(response => {
                if(!response.ok) {
                    throw new Error('HTTP error, status = ' + response.status);
                }
                return response;
            })
            //if response is okay, send back json version of response
            .then(response => response.json())
            //sends updates properties for response items
            .then(response => {
                this.props.update(response.items)
            })
            //catches any errors
            .catch(error => {
                console.log("There has been a problem with the fetch operation: ', ", error.message);
            });
    }
              
    render() {
        //returns search bar for input and search button
        return (
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search"
                    ref={this.setInputRef}
                />
                <button className="button" onClick={this.updateSearch}>Search</button>
            </div>
        )
    }
}


export default SearchBar;