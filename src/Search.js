import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { getAll } from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'



class Search extends Component {

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     title: '',
  //     author: ''
  //   }
  // }

  state = {
      query : ''
  }
    
  
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }



  render() {

    let showingContacts
    if(this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingContacts = this.props.bookList.filter((contact) => match.test(contact.title))
    }
    else {
      showingContacts = this.props.bookList
    }

    return (
      
      <div>
         {/* {JSON.strinify(this.state)}  */}
        <div className="search-books">
          <div className="search-books-bar">

            <div className="search-books-input-wrapper">
              {

              }
              <input 
              type="text" 
              placeholder="Search by title or author" 
              value = {this.state.query}
          onChange ={(event) => this.updateQuery(event.target.value) }
          />
                 



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