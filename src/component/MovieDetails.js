import React, { useEffect, useState } from 'react'

import {useNavigate} from "react-router-dom"



export const MovieDetails = () => {
  const [info,setInfo]=useState()
        useEffect(()=>{
        var details=JSON.parse(localStorage.getItem("info"))
        setInfo(details)
        },[])
        const navigate = useNavigate();
        
        return (
          <div>
            <h1>{info?.title}</h1>
           <p>{info?.trailerLink.description}</p>
           <iframe width="560" height="315" src={info?.trailerLink.trailerLink} 
           title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className='buton'>
            <button onClick={()=>navigate(-1)}>Go Back Home</button>
         
            
         
          </div>
          
          </div>
       
    
      
  );
};
