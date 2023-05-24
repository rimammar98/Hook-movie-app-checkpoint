import React from "react";
import movies from "../data/Movies";
import {useNavigate} from "react-router-dom"
  

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
         
          <iframe
            width="560"
            height="315"
            src={movie.image}
            title={movie.title}
            allowFullScreen
          ></iframe>
          <button onClick={()=>navigate("/moviedetails")}>Movie details</button>
        </div>
        
      ))}
    </div>
  );
};


