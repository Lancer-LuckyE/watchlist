import React, {useState} from "react";
import {ResultCard} from "./ResultCard";

export const Add = () => {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const onSearchInput = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    if (event.target.value.trim() !== '') {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1&include_adult=true&query=${event.target.value}`
      ).then(res => res.json())
        .then((data) => {
          if (!data.errors) {
            setResults(data.results);
          } else {
            setResults([]);
          }
        });
    } else {
      setResults([]);
    }
  };

  // I can use useEffect to fetch data for next page

  return (
    <div className={"add-page"}>
      <div className={"container"}>
        <div className={"add-content"}>
          <div className={"input-wrapper"}>
            <input
              type={"text"}
              placeholder={"Search for movies"}
              value={query}
              onChange={onSearchInput}
            />
          </div>
          <ul style={{display: results.length > 0 ? '' : 'none'}} className={"results"}>
            {results.map((moive, index) => (
              <li key={index}>
                <ResultCard movie={moive}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
