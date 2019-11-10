import React from 'react';

import { MovieCard, MovieTitle, MoviePoster, MovieDate } from './styles';

const DEFAULT_PLACEHOLDER_IMAGE =
  'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

const Movie = ({ movie }) => {
  const poster = movie.Poster = "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return(
      <MovieCard>
        <MovieTitle>{movie.Title}</MovieTitle>
        <MoviePoster alt={`The movie: ${movie.Title}`} src={poster}/>
        <MovieDate>{movie.Year}</MovieDate>
      </MovieCard>
  )
};

export default Movie;