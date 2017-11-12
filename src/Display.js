import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {getAll } from './BooksAPI'
import Header from './Header'



class Display extends React.Component {
    
    render (){
        //let showingNovels
        return (
            <div className="list-books">
           
            <ol> 
             {
                 this.props.allNovelList.map((bookSearch) => 
               <li>
                    <p>{bookSearch.title}</p>

               <p>{bookSearch.authors}</p>
               </li>
               
                
                
              )
             }
       </ol>
          
          </div>
          
        
        )
    }
}
export default Display
