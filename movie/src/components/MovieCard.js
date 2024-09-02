// Importation de React
import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css'

// Composant pour afficher les détails d'un film
const MovieCard = ({ movie }) => {
    return (
        <div className=' movie-card'>
            <Link to={`/movie/${movie.id}`} className="block overflow-hidden rounded-lg shadow-lg">
                <img src={movie.posterURL} alt={`${movie.title} Poster`} />
                <h3 className="text-white text-lg font-semibold mt-4">{movie.title}</h3>
                <p className="text-white text-sm">Rating: {movie.rating}</p>
            </Link>
        </div>
    );
};

export default MovieCard;
