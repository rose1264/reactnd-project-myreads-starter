import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends Component {
  static propTypes = {
      books: PropTypes.array,
      handleMove: PropTypes.func.isRequired
  }

  state={
    query: '',
    books: []
  }

  handleChange = query => {
    if (!query) {
     this.setState({query: '', books: []})
   } else {
     this.setState({ query: query.trim() })
     BooksAPI.search(query).then((books) => {
       //error handling
       if (books.error) {
         books = []
       }
       books
         .map(book => (
           this.props.books
           .filter(bookElement => bookElement.id === book.id)
           .map(bookElement => book.shelf = bookElement.shelf)
         ))
       this.setState({books})
     })
   }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e => this.handleChange(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.state.books
                  .map(book => (
                    <Book
                      handleMove={this.props.handleMove}
                      key={book.id}
                      book={book}
                    />
                  ))
                }
              </ol>
            </div>
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
