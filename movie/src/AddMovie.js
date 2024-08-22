// Importation de React et des hooks useState
import React, { useState } from 'react';
import './addMovie.css'

// Composant pour ajouter un nouveau film
const AddMovie = ({ onAddMovie }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posterURL, setPosterURL] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newMovie = {
            title,
            description,
            posterURL,
            rating: parseInt(rating),
        };

        onAddMovie(newMovie);

        // Réinitialisation du formulaire après l'ajout
        setTitle('');
        setDescription('');
        setPosterURL('');
        setRating('');
    };

    return (
        <div className="add-movie">
            <h2>Ajouter un nouveau film</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    className='inpAddMovie'
                    type="text" 
                    placeholder="Titre" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                /><br/>
                <input 
                    className='inpAddMovie'
                    type="text" 
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    required 
                /><br/>
                <input 
                    className='inpAddMovie'
                    type="text" 
                    placeholder="URL de l'affiche" 
                    value={posterURL} 
                    onChange={(e) => setPosterURL(e.target.value)} 
                    required 
                /><br/>
                <input 
                    className='inpAddMovie'
                    type="number" 
                    placeholder="Note" 
                    value={rating} 
                    onChange={(e) => setRating(e.target.value)} 
                    required 
                /><br/>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default AddMovie;
