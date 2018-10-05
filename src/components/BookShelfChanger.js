import React from 'react'

const BookShelfChanger = props => {
  const handleSelect = e => {
    const value=e.target.value
    props.handleMove(value, props.book, props.shelf)
  }

  return (
    <div className="book-shelf-changer">
      <select onChange={handleSelect} defaultValue={props.shelf}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading" >Currently Reading</option>
        <option value="wantToRead" >Want to Read</option>
        <option value="read" >Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

export default BookShelfChanger
