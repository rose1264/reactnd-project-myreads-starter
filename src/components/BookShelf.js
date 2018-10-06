import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    handleMove: PropTypes.func.isRequired
  }

  render(){
    const shelves = ["currentlyReading", "wantToRead", "read"]
    const shelveNames = ["Currently Reading", "Want To Read", "Read"]
    return (
      <div>
        {shelves.map((shelf, index) => {
          return(
            <div key={index} className="list-books-content">
              <div className="bookshelf">
                <h2 className="bookshelf-title">{shelveNames[index]}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                      {this.props.books.filter(book => book.shelf === shelf)
                        .map(book => (
                          <Book handleMove={this.props.handleMove} key={book.id} book={book} />
                      ))}
                  </ol>
                </div>
              </div>
            </div>
          )}
        )}
      </div>
    )

  }
}

export default BookShelf
