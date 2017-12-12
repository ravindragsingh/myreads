import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {getAll } from './BooksAPI'
import Header from './Header'
import Display from './Display'

class CurrentlyReading extends React.Component {
    
    render (){
        
        return (
            <div>
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="list-books-content">
            <div className="bookshelf">
            <ol className="books-grid"> 
                
            </ol>
            </div>
            </div>


            </div>
        )
    }
}
export default CurrentlyReading
