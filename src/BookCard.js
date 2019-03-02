import React, { Component } from 'react';

//stateless component

const BookCard = props => {
    const bookData = props.bookData;
    //ternary operators to handle no data returned for thumbnails and authors, and to join the authors array
    const thumbnail = bookData.imageLinks ? bookData.imageLinks.smallThumbnail : null;
    const authors = bookData.authors ? bookData.authors.join() : "None";

    //renders book card component with image, title, pub, author(s), and link to more info
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