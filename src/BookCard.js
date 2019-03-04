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
            <div class="imageContainer">
                <img 
                    className="bookImage"
                    src={thumbnail}
                    alt={"Cover for " + bookData.title}>
                </img>
            </div>
            <div class="bookInfo">
                <div class="title">{bookData.title}</div>
                <div class="authors">{authors}</div>
                <div class="publisher">{bookData.publisher}</div>
                <a href={bookData.infoLink}>More info</a>
            </div>
        </div>
    );
}

export default BookCard;