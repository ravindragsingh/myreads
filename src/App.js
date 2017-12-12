import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import {Route} from 'react-router-dom'
import Display from './Display'
import Header from './Header'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage:false,
    allNovelList:[],
    //currentlyReading:[]
    shelfs:['currentlyReading', 'wantToRead', 'read']
  }
   
  //const currentlyReading = allNovelList.filter((num) => num.shelf == "currentlyReading") 

   componentDidMount() {
    BooksAPI.getAll().then((allNovelList) => {
      this.setState({ allNovelList })
    })
  console.log(this.state.allNovelList.shelf)
  }
  
  
  
 
  render() {
    
    // const currentlyReading = this.state.allNovelList.filter((pass) => pass.shelf== "currentlyReading")
    // const readReading = this.state.allNovelList.filter((read) => read.shelf== "Read")
    // const wantToRead = this.state.allNovelList.filter((want) => want.shelf== "wantToRead")

    return (
      
      <div>
        <Header text = "My-Reads"/>
      <div className="app">
        

        {this.state.showSearchPage ? (
         <div>
               <Search/>
            </div>
         
        ) : (
          <div>
                       
            {/* {this.state.allNovelList.filter((pass) => pass.shelf== "currentlyReading")} */}
              {this.state.shelfs.map((shelf) =>
                  <Display 
                  shelfDisplay = {this.state.allNovelList.filter((book) => book.shelf== shelf )} 
                  bookTitle = {shelf}
                  /> 
             
              )}
           
            {/* <Display shelf = {readReading} />
            <Display shelf = {wantToRead} /> */}
            
            
            
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book
              </a>
              
            </div>
          </div>
        
        )
        }
      </div>

      </div>
       
       
    )
  }
}

export default BooksApp
