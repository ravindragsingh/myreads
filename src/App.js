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
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    allNovelList: [],
    //currentlyReading:[]
    shelfs: ['currentlyReading', 'wantToRead', 'read'],
    //screen: 'main'
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

          <Route path="/search" exact component={Search} />

          {this.state.showSearchPage ? (
            <div>
              <Search bookList = {this.state.allNovelList}
              //onNavigate = {() =>this.setState({screen:'search'})}
              />
            </div>

          ) : (
              <div>



                <div className="open-search">
                  <Link to="/search"
                    onClick={() => this.setState({ showSearchPage: true })}>Add a book
              </Link>

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
