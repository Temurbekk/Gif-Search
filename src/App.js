import React, { useState } from "react";
import Search from "./Components/Search";
import GifTrending from "./Components/GifTrending";
const App = () => {
  const [searching, setSearching] = useState(true);
  return (
    <div className="container box">
      {!searching ? (
        <div className="">
          <div className="button" onClick={() => setSearching(true)}>
            Search
          </div>
          <GifTrending />
        </div>
      ) : (
        <div className="">
          <div className="button" onClick={() => setSearching(false)}>
            Trending
          </div>
          <Search />
        </div>
      )}
    </div>
  );
};

export default App;
