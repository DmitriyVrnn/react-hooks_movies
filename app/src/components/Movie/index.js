import React from 'react';

import { MovieCard, MovieTitle, MoviePoster, MovieDate } from './styles';


const Movie = ({ movie }) => {
  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  console.log(poster)
  return(
      <MovieCard>
        <MovieTitle>{movie.title}</MovieTitle>
        <MoviePoster alt={`The movie: ${movie.title}`} src={poster}/>
        <MovieDate>{movie.vote_average}</MovieDate>
      </MovieCard>
  )
};

export default Movie;