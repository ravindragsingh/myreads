import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { getAll } from './BooksAPI'
import Header from './Header'



class Display extends React.Component {


    render() {
        //let showingNovels
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">{this.props.bookTitle}</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        <li>
                                            <div className="book">
                                                <div className="book-top">
                                                    {this.props.shelfDisplay.map((bookSearch) =>
                                                        <div>
                                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: bookSearch.imageLinks.thumnails }}></div>
                                                           
                                                           
                                                            <div className="book-title" >{bookSearch.title}</div>
                                                            <div className="book-authors">{bookSearch.authors}</div>
                                                            

                                                        </div>


                                                    )}
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

                                                    
        )
    }
}
export default Display
