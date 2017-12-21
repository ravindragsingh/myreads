import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { getAll } from './BooksAPI'
import Header from './Header'


String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
class Display extends React.Component {


    render() {
        //let showingNovels
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">{this.props.bookTitle.capitalize()}</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {this.props.shelfDisplay.map((bookSearch) =>
                                            <li>
                                                <div>
                                                    <div className="book">
                                                        <div className="book-top">
                                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookSearch.imageLinks.thumbnail})` }}></div>
                                                            <div className="book-shelf-changer">
                                                                <select>
                                                                    <option value="none" disabled>Move to...</option>
                                                                    <option value="currentlyReading">Currently Reading</option>
                                                                    <option value="wantToRead">Want to Read</option>
                                                                    <option value="read">Read</option>
                                                                    <option value="none">None</option>
                                                                </select>
                                                            </div>

                                                        </div>

                                                        <div className="book-title" >{bookSearch.title}</div>
                                                        <div className="book-authors">{bookSearch.authors}</div>


                                                    </div>
                                                </div>
                                            </li>


                                        )}



                                    </ol>
                                    <div className="open-search">
                                        <Link to="/search"

                                        >Add a book
              </Link>

                                    </div>
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
