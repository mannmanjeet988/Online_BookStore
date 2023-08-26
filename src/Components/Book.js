import React, {useState, useEffect} from "react"
import axios from "axios"
import styles from "./style.css"
import heart from "../Images/heart.png"
import logo from "../Images/logo.png"
import person from "../Images/person.png"
import profile from "../Images/profile.png"
import notifications from "../Images/notifications.png"

const Book = ({setBooks}) => {
    
    const [searchTerm, setSearchTerm] = useState()
 
   // console.log(searchTerm)
   //console.log(books)
 
    useEffect(()=>{
        fetchBooks()
    },[]
    )
    
 
    const fetchBooks = () => {
          
                 axios.get("https://www.googleapis.com/books/v1/volumes", {
                    params:{
                        q: searchTerm || "harry potter"  || "Sherlock homes"
                    }

                 })
                     .then((response) => {
                         setBooks(response.data.items)
                         // setSearchTerm("")
                        
                     })
                     .catch((error) => console.log(error))
           
    }
 
 
     return(
         <div  className="nav">
           
            <div className="nav-left-container">
                <span><img src={logo} alt="logo"/></span>
                <span>KeazoNBOOKS</span>
            </div >
             {/* onKeyDown={handleKeys} */}
             <div className="nav-center">
                <input type="text" placeholder="Search for an book.." 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button id="search-btn" onClick={fetchBooks}>Search</button>
             </div>
         
             <div className="nav-right-container">
                 <span> <img src={heart} alt="heart"/></span>
                 <span> <img src={notifications} alt="notifications"/></span>
                 <span> <img src={profile} alt="profile"/></span>
                 <span> <img src={person} alt="person"/></span>
             </div>
             
         </div>
     )
 }
 


export default Book
