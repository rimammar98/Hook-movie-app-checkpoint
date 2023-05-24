// MovieCard.js

import React from 'react';
import {useNavigate} from "react-router-dom"

 const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
const handelsubmit=(trailerLink,description)=>{
  navigate("/moviedetails")
  localStorage.setItem("info",JSON.stringify({trailerLink,description}))
  
}
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} onClick={()=>handelsubmit({trailerLink:movie.trailerLink,description:movie.description})}/>
      <h2>{movie.title}</h2>
      

    </div>
    
  );
};

export default MovieCard;
