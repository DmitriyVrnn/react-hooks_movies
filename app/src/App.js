import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Search from "./components/Search";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch()
  })

  return (
    <div className="App">
      <Header text="Movies Search"/>
      <Search/>
    </div>
  );
}

export default App;
