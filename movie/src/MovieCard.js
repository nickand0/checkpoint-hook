// Importation de React
import React from 'react';
import './MovieCard.css'
// Composant pour afficher les détails d'un film
const MovieCard = ({ title, description, posterURL, rating }) => {
    return (
        <div className="movie-card">
            <img src={posterURL} alt={`${title} poster`} />
            <h3>{title}</h3>
            <p>{description}</p>
            <span>Rating: </span>{rating}
        </div>
    );
};

export default MovieCard;
