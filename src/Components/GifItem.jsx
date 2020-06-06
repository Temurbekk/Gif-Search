import React from "react";

const GifItem = ({ data }) => {
  return (
    <div className="columns">
      <div className="column">
        {data.map((item, id) => {
          return (
            <>
              <iframe id={id} src={item.embed_url} title={item.id} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default GifItem;
