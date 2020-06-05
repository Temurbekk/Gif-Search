import React, { useState } from "react";

const SearchBar = ({ onTermChange }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (term) => {
    setTerm(term);
    onTermChange(term);
  };

  return (
    <div className="search">
      <input onChange={(event) => onInputChange(event.target.value)} />
    </div>
  );
};

export default SearchBar;
