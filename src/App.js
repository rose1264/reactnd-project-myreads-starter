import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import BookShelf from './components/BookShelf'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then(books=>{
        this.setState({ books })
      })
  }


  handleMove = (book, shelf) => {
    if (this.state.books) {
      BooksAPI.update(book,shelf)
        .then(() => {
          book.shelf = shelf;
          this.setState(state => ({
            books: state.books.filter(bookElement => bookElement.id !== book.id).concat([ book ])
        }))
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <BookShelf
              handleMove={this.handleMove}
              books={this.state.books}
            />
            <div className="open-search">
              <Link to="/search" />
            </div>
          </div>
        )}/>

        <Route path="/search" render={() => (
          <SearchBooks
            handleMove={this.handleMove}
            books={this.state.books}
          />
        )}/>
      </div>
    )}
}


export default BooksApp
