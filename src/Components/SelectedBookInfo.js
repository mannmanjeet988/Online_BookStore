import React ,{useState}from 'react'
import styles from "./style.css"


const SelectedBookInfo = ({ selectedbook }) => {
    console.log(selectedbook)

  return (
    
                    <div id="selected-book-info" key={selectedbook.id || Math.random()}>
                        <div>
                             <img src={selectedbook.volumeInfo.imageLinks.smallThumbnail } alt="bookname" />
                        </div>
                        <div className="title">
                            <span>Title: {selectedbook.volumeInfo.title}</span>
                        </div>
                       <div className="author-conatiner">  
                            <span>{selectedbook.volumeInfo.authors[0]}</span>
                            <span>Published On :{selectedbook.volumeInfo.publishedDate} </span>
                        </div>
                        {/* <div className="description">
                            <span> {selectedbook.volumeInfo.description}</span>
                        </div> */}

                        {/* <p>Published Date: {book.volumeInfo.panelizationSummary.publishedDate}</p> */}
                        <div className="bottom-container">
                            <span>Avg Count: {selectedbook.volumeInfo.averageRating}⭐</span>
                            <span>Rating Count: {selectedbook.volumeInfo.ratingsCount}</span>
                            <span>Publisher :{selectedbook.volumeInfo.publisher} </span>
                            <span>Language: En</span>
                        </div>               
                        
                    </div>
  )
}

export default SelectedBookInfo