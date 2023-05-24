import React from 'react';
import { Link } from 'react-router-dom';

function MoviePage({ match }) {
  const { id } = match.params;
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div className="movie-page">
      <h2>{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} />
      <p>{movie.description}</p>
      <a href={movie.trailerURL}>Watch Trailer</a>
      <Link to="/">Go Back</Link>
    </div>
  );
}
export default MoviePage;