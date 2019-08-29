import React from "react";

const Book = props => {
  const { title, img, setFavorites } = props;

  const handleClick = () => setFavorites({ title, img });
  return (
    <div>
      <h2>{title}</h2>
      <img onClick={handleClick} src={img}></img>
    </div>
  );
};

export default Book;
