import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    favorites: []
  };

  setFavorites = book => {
    if (!this.state.favorites.find(b => b.title === book.title)) {
      const favorites = [...this.state.favorites, book];
      this.setState({ favorites });
    }
  };

  removeFavorite = book => {
    const favorites = this.state.favorites.filter(b => b.title != book.title);
    this.setState({ favorites });
  };

  render() {
    return (
      <div className="book-container">
        <BookList setFavorites={this.setFavorites.bind(this)} />
        <Bookshelf
          removeFavorite={this.removeFavorite.bind(this)}
          favorites={this.state.favorites}
        />
      </div>
    );
  }
}

export default App;
