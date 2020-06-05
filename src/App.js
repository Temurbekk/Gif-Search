import React from "react";

import useFetchTrending from "./CustomHooks/useFetchTrending";
import SearchBar from "./Components/SearchBar";
import GifSearch from "./Components/GifSearch";

function App() {
  const { trendingGifs, isLoading } = useFetchTrending("happy");
  const handleTermChange = (term) => {
    console.log(term);
  };
  return (
    <>
      <SearchBar onTermChange={handleTermChange} />
      <GifSearch />
    </>
  );
}

export default App;
