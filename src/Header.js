import React from 'react'
//import {Link} from 'react-router-dom'
//import * as BooksAPI from './BooksAPI'
import './App.css'
//  import Search from './Search.js'
//  import {Route} from 'react-router-dom'

class Header extends React.Component {
    
    render (){
        
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>{this.props.text}</h1>
              
            
            </div>
            
          </div>
          
        
        )
    }
}
export default Header
