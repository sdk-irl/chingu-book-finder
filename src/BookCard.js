import React, { Component } from 'react';

//stateless component

const BookCard = props => {
    const bookData = props.bookData;

    const thumbnail = bookData.imageLinks ? bookData.imageLinks.smallThumbnail : null;
    const authors = bookData.authors ? bookData.authors.join() : "None";


    //component returns
    console.log(bookData.title)
    console.log(bookData.publisher)
    console.log(authors);

    return (
        <div class="bookCard">
            <img 
                className="bookImage"
                src={thumbnail}
                alt={"Cover for " + bookData.title}>
            </img>
            <div>{bookData.title}</div>
            <div>{bookData.publisher}</div>
            <div>{authors}</div>
            <a href={bookData.infoLink}>More info</a>
        </div>
    );
}

export default BookCard;