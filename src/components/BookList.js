import React from 'react'
import { Link } from 'react-router-dom'

import BookShelf from './BookShelf'


const BookList = props => {
  return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
            <BookShelf
              shelf='currentlyReading'
              handleMove={props.handleMove}
              books={props.currentlyReading}
              title='Currently Reading'
            />
            <BookShelf
              shelf='wantToRead'
              handleMove={props.handleMove}
              books={props.wantToRead}
              title='Want to Read'/>
            <BookShelf
              shelf='read'
              handleMove={props.handleMove}
              books={props.read}
              title='Read'/>
        </div>

        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>

      </div>
  )
}

export default BookList
