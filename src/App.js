// App.js


import MovieList from './component/MovieList';
import {Routes, Route} from "react-router-dom"
import { MovieDetails } from './component/MovieDetails';
import movies from './data/Movies';
import './App.css';




const App = () => {
    return (
      <> 
      <div className="logo">
        <h1> Movie Stream</h1>


      </div>

      <Routes>
      
      <Route path='/' element={ <MovieList movies={movies} /> }/>
        <Route path='/moviedetails' element={ <MovieDetails />}/>
      </Routes>
  </>
 );
  
  
};
export default App;