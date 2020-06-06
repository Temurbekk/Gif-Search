import React, { useState, useEffect, Suspense } from "react";
import GifItem from "./GifItem";
import axios from "axios";

function GifTrending() {
  const [trending, setTrending] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;

  useEffect(() => {
    const fetchTrending = async () => {
      const responseFromGiphy = await axios.get(url);
      if (responseFromGiphy) {
        setTrending(responseFromGiphy.data.data);
      }
    };
    fetchTrending();
  }, [url]);
  return (
    <>
      <div>
        <Suspense fallback={<h1>Loading Giphys</h1>}>
          <GifItem data={trending} />
        </Suspense>
      </div>
    </>
  );
}

export default GifTrending;
