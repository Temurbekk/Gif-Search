import React, { useState } from "react";

import useFetchTrending from "./CustomHooks/useFetchTrending";
import SearchBar from "./Components/SearchBar";
import GifList from "./Components/GifList";

function App() {
  const [gifs, setGifs] = useState([
    {
      id: 1,
      url: "http://fakeimg.pl/300/",
    },
    {
      id: 2,
      url: "http://fakeimg.pl/300/",
    },
    {
      id: 3,
      url: "http://fakeimg.pl/300/",
    },
  ]);
  const { trendingGifs, isLoading } = useFetchTrending("happy");
  const handleTermChange = (term) => {
    console.log(term);
  };
  console.log("gifs", { trendingGifs });
  return (
    <>
      <SearchBar onTermChange={handleTermChange} />
      <GifList gifs={gifs} />
    </>
  );
}

export default App;
