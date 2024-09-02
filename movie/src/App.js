// Importation des modules nécessaires de React
import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Importation des composants enfants
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter';
import MovieDetail from './components/MovieDetails';
import MovieData from './components/MovieData'; 
import './App.css'

// Composant principal de l'application
const App = () => {
  // État initial des films
  const [movies, setMovies] = useState(MovieData);

  // État pour stocker la liste des films après filtrage
  const [filteredMovies, setFilteredMovies] = useState(movies);

  // Fonction pour ajouter un nouveau film à la liste
  const addMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
      setMovies(updatedMovies);
      setFilteredMovies(updatedMovies);
      // Masquer le formulaire après l'ajout du film
      setShow(false);
  };

  // Fonction pour filtrer les films par titre et note
  const filterMovies = (title, rating) => {
    // Filtrage des films en fonction du titre et de la note
    const filtered = movies.filter(movie => {
      return (
        // Vérifie si le titre du film contient le texte saisi 
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        // Vérifie si la note du film est supérieure ou égale à la note saisie ou si aucune note n'est saisie
        (rating === '' || movie.rating >= parseInt(rating))
      );
    });
    // Mise à jour de l'état des films filtrés avec la nouvelle liste filtrée
    setFilteredMovies(filtered);
  };

  //
  const [shows,setShow]=useState(false);

  //Pour controler le bouton
  const toggleShow = ()=>{
      setShow(!shows)
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route path="/" element={
            <>
              <Filter onFilter={filterMovies} />
              <button className='buttonShow' onClick={toggleShow}>
                {shows ? 'Hide' : 'Add Movies'}
              </button>
              <MovieList movies={filteredMovies} />
              {shows && (
                <AddMovie onAddMovie={addMovie} />
              )}
            </>
          } />
          {/* Route pour la page de description du film */}
          <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
