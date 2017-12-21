import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import { Route } from 'react-router-dom'
import Display from './Display'
import Header from './Header'

class BooksApp extends React.Component {
  state = {
   
    allNovelList: [],
   
    shelfs: ['currentlyReading', 'wantToRead', 'read'],
    
  }

  //const currentlyReading = allNovelList.filter((num) => num.shelf == "currentlyReading") 

  componentDidMount() {
    BooksAPI.getAll().then((allNovelList) => {
      this.setState({ allNovelList })
    })
    console.log(this.state.allNovelList.shelf)
  }




  render() {

    return (

      <div>
        <Header text="My Reads" />
        <div className="app">

          <Route path="/" exact render={() => (
            <div>
              {this.state.shelfs.map((shelf) =>
                <Display
                  shelfDisplay={this.state.allNovelList.filter((book) => book.shelf == shelf)}
                  bookTitle={shelf}
                />

              )}

            </div>

          )}

          />
            
          <Route path="/search" exact 
          component={Search} 
          
          />
          
         
         </div> 

      </div>


    )
  }
}

export default BooksApp
