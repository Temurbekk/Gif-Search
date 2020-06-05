import React from "react";

import GifItem from "./GifItem";

const GifList = ({ gifs }) => {
  const gifItems = gifs.map((image) => {
    return <GifItem key={image.id} gif={image} />;
  });
  return (
    <div>
      <ul>{gifItems}</ul>
    </div>
  );
};

export default GifList;
