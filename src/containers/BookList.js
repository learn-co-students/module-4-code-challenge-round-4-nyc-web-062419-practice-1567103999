import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    fetch("http://localhost:3005/books")
      .then(r => r.json())
      .then(books => this.setState({ books }));
  }
  addBook = book => {
    const books = [...this.state.books, book];
    this.setState({ books });
  };

  render() {
    const { books } = this.state;
    const { setFavorites } = this.props;
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addBook={this.addBook.bind(this)} />
        <ul>
          {books.map(b => (
            <Book setFavorites={setFavorites} {...b} />
          ))}
        </ul>
      </div>
    );
  }
}

export default BookList;
