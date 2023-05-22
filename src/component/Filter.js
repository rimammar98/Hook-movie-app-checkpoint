import React from 'react';

const Filter = ({ filterTitle, filterRating, handleTitleChange, handleRatingChange }) => {
  return (
    <div className="filter">
      <span>Title:</span>
      <input
        type="text"
        placeholder="Search by title"
        value={filterTitle}
        onChange={handleTitleChange}
      />
      <span>Rating:</span>
      <input
        type="number"
        min="1"
        max="10"
        placeholder="Search by rating"
        value={filterRating}
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;
