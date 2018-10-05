import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBooks extends Component {
  state={
    searchTerm:''
  }

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    console.log(this.props);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/"></Link>
          <div className="search-books-input-wrapper">
              <form onSubmit={e =>this.props.handleSearch(e, this.state.searchTerm)}>
                <input type="text" onChange={this.handleChange} placeholder="Search by title or author" value={this.state.searchTerm}/>
              </form>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.props.searchedBooks.map(book=> {
                let shelf = null

                this.props.currentlyReading.includes(book) ? shelf='currentlyReading' : null
                this.props.wantToRead.includes(book) ? shelf='wantToRead' : null
                this.props.read.includes(book) ? shelf='read' : null
                console.log(shelf);
                return (
                  <li key={book.id}>
                    <Book
                      handleMove={this.props.handleMove}
                      book={book}
                      shelf={shelf ? shelf :'none'}
                    />
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      )
  }
}

export default SearchBooks
