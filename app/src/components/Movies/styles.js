import React from 'react'

import Movie from "../Movie";
import { MoviesContainer } from "./index";

const Movies = ({ movies }) => {
    return (
      <MoviesContainer>
        {movies.map((movie, index) => {
        return (
        <Movie key={`${index}-${movie.title}`} movie={movie}/>)
      })}
      </MoviesContainer>
    )
  }
;

export default Movies