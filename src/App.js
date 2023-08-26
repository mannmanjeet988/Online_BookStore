import React, {useState, useEffect} from "react"
import axios from "axios"
import './App.css';
import Book from "./Components/Book";
import BooksGallery from "./Components/BooksGallery";
import SelectedBookInfo from "./Components/SelectedBookInfo";

function App() {

  const [books, setBooks] =useState([])
  const[selectedbook, setSelectedBook] = useState("");

  return (
    <div className="App">
     
     <Book setBooks={setBooks} />
     <BooksGallery books={books} setSelectedBook={setSelectedBook} />

    {/* {
       selectedbook!=="" && <SelectedBookInfo selectedbook={selectedbook}  />
   } */}
    
   
    </div>
  );
}

export default App;
