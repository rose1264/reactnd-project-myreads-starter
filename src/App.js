import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import BookList from './components/BookList'

class BooksApp extends React.Component {
  state = {
    currentlyReading:[],
    wantToRead:[],
    read:[],
    searchedBooks:[],
  }

  //data for testing purpose to set initial books on each shelf
  componentDidMount(){
    BooksAPI.getAll()
      .then(books=>{
        this.setState({
          currentlyReading: [books[0], books[1]],
          wantToRead: [books[2],books[3]],
          read: [books[4], books[5]],
        })
      })
  }

  handleSearch = (e, searchTerm) => {
    e.preventDefault()
    BooksAPI.search(searchTerm)
      .then(books=>{
        this.setState({
          searchedBooks:books
        })
      })

  }

  handleMove = (value, book, shelf) => {
    if (shelf === 'currentlyReading') {
      const arrayOfBooks = this.state.currentlyReading
      const indexOfBook = arrayOfBooks.indexOf(book)

      if (value !== 'currentlyReading') {
        arrayOfBooks.splice(indexOfBook, 1)
      }

      this.setState({
        ...this.state,
        currentlyReading: arrayOfBooks
      })

      if (value === 'wantToRead') {
        this.setState({
          ...this.state,
          wantToRead:[...this.state.wantToRead, book]
        })
      } else if(value === 'read') {
        this.setState({
          ...this.state,
          read:[...this.state.read, book]
        })
      }

    } else if (shelf === 'wantToRead') {
      const arrayOfBooks = this.state.wantToRead
      const indexOfBook = arrayOfBooks.indexOf(book)

      if (value !== 'wantToRead') {
        arrayOfBooks.splice(indexOfBook, 1)
      }

      this.setState({
        ...this.state,
        wantToRead: arrayOfBooks
      })

      if (value === 'currentlyReading') {
        this.setState({
          ...this.state,
          currentlyReading:[...this.state.currentlyReading, book]
        })
      } else if(value === 'read') {
        this.setState({
          ...this.state,
          read:[...this.state.read, book]
        })
      }

    } else if (shelf === 'read') {
      const arrayOfBooks = this.state.read
      const indexOfBook = arrayOfBooks.indexOf(book)

      if (value !== 'read') {
        arrayOfBooks.splice(indexOfBook, 1)
      }

      this.setState({
        ...this.state,
        read: arrayOfBooks
      })

      if (value === 'currentlyReading') {
        this.setState({
          ...this.state,
          currentlyReading:[...this.state.currentlyReading, book]
        })
      } else if(value === 'wantToRead') {
        this.setState({
          ...this.state,
          wantToRead:[...this.state.wantToRead, book]
        })
      }
    } else {
      if (value === 'currentlyReading') {
        this.setState({
          ...this.state,
          currentlyReading:[...this.state.currentlyReading, book]
        })
      } else if(value === 'wantToRead') {
        this.setState({
          ...this.state,
          wantToRead:[...this.state.wantToRead, book]
        })
      } else if(value === 'read') {
        this.setState({
          ...this.state,
          read:[...this.state.read, book]
        })
      }
    }
  }

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => <SearchBooks
            handleSearch={this.handleSearch}
            searchedBooks={this.state.searchedBooks}
            handleMove={this.handleMove}
            currentlyReading={this.state.currentlyReading}
            wantToRead={this.state.wantToRead}
            read={this.state.read}
            />
          }
        />
        <Route
          path="/"
          exact
          render={() => <BookList
            handleMove={this.handleMove}
            currentlyReading={this.state.currentlyReading}
            wantToRead={this.state.wantToRead}
            read={this.state.read}
            />
          }
        />
      </div>
  )}
}


export default BooksApp
