import React from "react";

import GifItem from "./GifItem";

const GifList = ({ gifs }) => {
  const gifList = gifs.map((gif, i) => (
    <div key={i}>
      <div>
        <GifItem gif={gif} key={gif.id} />
      </div>
    </div>
  ));
  return <div>{gifList}</div>;
};

export default GifList;
