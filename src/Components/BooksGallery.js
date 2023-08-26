import React,{useState} from "react";
import styles from "./style.css"


const BooksGallery = ({ books ,setSelectedBook}) => {

    console.log(books)

    return (
        <div className="books-container">
            {books.map((book) => {
                let imageUrl = book.volumeInfo && book.volumeInfo.imageLinks 
                    ? book.volumeInfo.imageLinks.smallThumbnail 
                    : null;
                return (
                    <div id="book-info" key={book.id || Math.random()} onClick={setSelectedBook(book)} >
                        <div className="left-container">
                            {imageUrl && <img src={imageUrl} alt="bookname" />}
                        </div>
                        <div className="right-container">
                            <div className="title">
                                <span>Title: {book.volumeInfo.title}</span>
                            </div>
                            {/* <div className="description">
                                <span> {book.volumeInfo.description}</span>
                            </div> */}
                            <div>
                                <button onClick={()=>window.location.href = `${book.volumeInfo.previewLink}`}>Now Read!</button>
                            </div>
                        </div>
                        
                    </div>
                    
                );
            })}
        </div>
    );
}
 
export default BooksGallery;

