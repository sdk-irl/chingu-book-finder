import React, { Component } from 'react';

const API_KEY = "AIzaSyA8mV96_G2-uDhDT5EfxxYowv0wima9Jwg";
// what is this? <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
let googBooksUrl = "https://www.googleapis.com/books/v1/volumes?q=";

class SearchBar extends Component {


    setInputRef = ref => {
        this.inputValue = ref;
    }

    updateSearch = () => {
        const request = new Request (googBooksUrl + this.inputValue.value, {
            method: "GET",
            dataType: "json"
        });

        return fetch(request)
            .then(response => {
                if(!response.ok) {
                    throw new Error('HTTP error, status = ' + response.status);
                }
                return response;
            })
            .then(response => response.json())
            .then(response => {
                this.props.update(response.items)
            })
            .catch(error => {
                console.log("There has been a problem with the fetch operation: ', ", error.message);
            });
    }
              
    render() {
        return (
            <div className="Search-bar">
                <input
                    type="text"
                    placeholder="Search"
                    ref={this.setInputRef}
                />
                <button className="Button" onClick={this.updateSearch}>Search</button>
            </div>
        )
    }
}


export default SearchBar;