import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  const [results, setResults] = useState(null);
  const [word, setWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary container-fluid">
      <nav className="navbar navbar-light bg-light ">
        <form className="form-inline d-flex" onSubmit={search}>
          <input
            className="form-control mr-sm-2 "
            type="search"
            placeholder="Search word"
            onChange={handleWordChange}
          ></input>
          <button
            className="btn btn-outline-dark my-2 my-sm-0"
            type="submit"
            placeholder="search"
          >
            Search
          </button>
        </form>
        <div>
          <button className="btn btn-outline-dark">Eng</button>
          <button className="btn btn-outline-dark">Kor</button>
          <button className="btn btn-outline-dark">Chi</button>
        </div>
      </nav>
      <div className="Main">
        <Results result={results} />
        {/* // read API */}
      </div>
      <hr />
    </div>
  );
}
