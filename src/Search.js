import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { getAll } from './BooksAPI'



class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      author: ''
    }
  }



  render() {

    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">

            <div className="search-books-input-wrapper">
              {

              }
              <input type="text" placeholder="Search by title or author" />



            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Search