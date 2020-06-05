import React, { useState, useEffect } from "react";

import useFetchTrending from "./CustomHooks/useFetchTrending";
import SearchBar from "./Components/SearchBar";
import GifList from "./Components/GifList";
import axios from "axios";

function App() {
  const [gifs, setGifs] = useState([]);
  const { trendingGifs, isLoading } = useFetchTrending("happy");
  useEffect(() => {
    handleTermChange("dog");
  }, []);
  const handleTermChange = (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${process.env.REACT_APP_API_KEY}&limit=24`;

    axios.get(url).then((response) => {
      setGifs(response.data);
    });
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
