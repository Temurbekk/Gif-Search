import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=`;
const URL_EXTENTION = "&limit=15&offset=0&rating=G&lang=en";

const useFetch = ({ search }) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(`${BASE_URL}${search}${URL_EXTENTION}`);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${search}${URL_EXTENTION}`)
      .then((response) => {
        console.log(response.data.data);
        setGifs(response.data.data.image);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [search]);
  return { gifs, isLoading };
};

export default useFetch;
