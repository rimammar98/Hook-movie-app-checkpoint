// MovieList.js

import React from 'react';
import MovieCard from './MovieCard';
import Filter from './Filter';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
       <Filter/>
    </div>
     
  );
};

export default MovieList;
