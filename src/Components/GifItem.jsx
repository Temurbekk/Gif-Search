import React from "react";

const GifItem = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return <iframe src={item.embed_url} title={item.id}></iframe>;
      })}
    </div>
  );
};

export default GifItem;
