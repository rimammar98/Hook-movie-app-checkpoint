// App.js

import React, { useState } from 'react';
import MovieList from './component/MovieList';
import Filter from './component/Filter';

import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const handleTitleChange = (change) => {
    setFilterTitle(change.target.value);
  };

  const handleRatingChange = (change) => {
    setFilterRating(change.target.value);
  };

  const handleAddMovie = () => {
    
    const newMovieId = Math.floor(Math.random() * 100);
    const newMovie = {
      id: newMovieId,
      title: 'Luca Disney and Pixar (2023)',
      description: 'Luca” is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.',
      posterURL: 'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1623690039982-E63Y1YB8S91Z3BX6P2MF/luca_poster.jpg?format=300w',
      rating: 5,
    };

    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) 
    );
  });

  return (
    <div className="app">
      <h1>Movies Stream</h1>
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        handleTitleChange={handleTitleChange}
        handleRatingChange={handleRatingChange}
      />
      <MovieList movies={filteredMovies} />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default App;
