import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  const { favorites, removeFavorite } = props;
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>
        {favorites.map(b => (
          <Book setFavorites={removeFavorite} {...b} />
        ))}
      </ul>
    </div>
  );
};

export default Bookshelf;
