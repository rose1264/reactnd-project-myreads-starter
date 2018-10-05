import React from 'react'
import BookShelfChanger from './BookShelfChanger'

const Book = props => {
  const imageURL=props.book.imageLinks.thumbnail
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${imageURL})`,
          }}>
        </div>
        <BookShelfChanger shelf={props.shelf} book={props.book} handleMove={props.handleMove}/>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors[0]}</div>
    </div>
  )
}

export default Book
