// Importation de React et du composant MovieCard
import React from 'react';
import MovieCard from './MovieCard';
import './movielist.css';

// Composant pour afficher une liste de films
const MovieList = ({ movies }) => {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
