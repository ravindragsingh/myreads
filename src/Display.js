import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {getAll } from './BooksAPI'
import Header from './Header'



class Display extends React.Component {

    
    render (){
        //let showingNovels
        return (
            <div className="list-books">
            <div className="list-books-content">
            <div className="bookshelf">
            <ol className="books-grid"> 
             <h2>{this.props.bookTitle}</h2>
               
                      {this.props.shelfDisplay.map((bookSearch) =>

                            <div className="book">
                       <div className="book-top">
                    <p>{bookSearch.title}</p>
                    <p>{bookSearch.authors}</p>

                          </div>
                           </div>
                      )}  
                
                     
                         
 
                
       </ol>
           </div>
           </div>
          </div>
          
        
        )
    }
}
export default Display
