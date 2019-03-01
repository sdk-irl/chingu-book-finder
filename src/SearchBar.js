import React, { Component } from 'react';

const API_KEY = "AIzaSyA8mV96_G2-uDhDT5EfxxYowv0wima9Jwg";
// what is this? <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jwuery.min.js"></script>
let googBooksUrl = "https://www.googleapis.com/books/v1/volumes/s1gVAAAAYAAJ";

class SearchBar extends Component {
    state = {

    }
    updateSearch = value => {
        let request = new Request (googBooksUrl, {
            method: "GET",
            dataType: "json"
        });
    }
              
    render() {
        return (
            <div className="Search-bar">
                <input
                    type="text"
                    placeholder="Search by title"
                    //set value

                    //set value on change 

                />
                <button className="Button">Search</button>
            </div>
        )
    }
}


export default SearchBar;