import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Search from "./components/Search";

import { MOVIE_API_URL, movieAPISearchURL } from "./utils/api";
import Movie from "./components/Movie";


const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies([jsonResponse]);
        setLoading(false);
      })
  }, []);

  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(movieAPISearchURL(searchValue))
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse)
        if(jsonResponse.Response === 'True'){
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      })
  };

  console.log(movies)

  return (
    <div className="App">
      <Header text="Movies Search"/>
      <Search/>
      {loading && !errorMessage ? (
        <span>Loading...</span>
      ) : errorMessage ? (
        <div>{errorMessage}</div>
        ) : (movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie}></Movie>
      )))}
    </div>
  );
};

export default App;
