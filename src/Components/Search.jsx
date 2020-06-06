import React, { useState, Suspense } from "react";
import axios from "axios";
import GifItem from "./GifItem";

const Search = () => {
  const [inputValue, setinputValue] = useState("");
  const [giphyData, setGiphyData] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}`;
  const objParam = {
    limit: "50",
    offset: "0",
    rating: "G",
    lang: "en",
  };

  const serializeGetParams = (input) => {
    const str = Object.entries(objParam)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");
    const finalUrl = url + "&q=" + input + "&" + str;
    return finalUrl;
  };

  const handleChange = (e) => {
    setinputValue(e.target.value);
  };

  const callToGetData = async (value) => {
    const responseFromGiphy = await axios.get(serializeGetParams(value));
    if (responseFromGiphy) {
      setGiphyData(responseFromGiphy.data.data);
    }
  };

  const handleClick = () => {
    callToGetData(inputValue);
  };

  return (
    <div>
      <div className="box columns">
        <input
          className="input column"
          type="text"
          placeholder="Search Gifs.."
          onChange={(event) => handleChange(event)}
        />
        <div
          className="button is-primary column is-one-quarter"
          onClick={handleClick}
        >
          Search
        </div>
      </div>
      {giphyData.length > 0 ? (
        <div>
          <Suspense fallback={<h1>Loading Giphys</h1>}>
            <GifItem data={giphyData} />
          </Suspense>
        </div>
      ) : null}
    </div>
  );
};

export default Search;
