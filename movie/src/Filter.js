// Importation de React et des hooks useState
import React, { useState } from 'react';
import './filter.css'

// Composant pour filtrer les films par titre et note
const Filter = ({ onFilter }) => {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');

    const handleFilter = () => {
        onFilter(title, rating);
    };

    return (
        <div className="filter">
            <input
                className='inputFilter' 
                type="text" 
                placeholder="Filter by title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <input 
                className='inputFilter'
                type="number" 
                placeholder="Filter by rating" 
                value={rating} 
                onChange={(e) => setRating(e.target.value)} 
            />
            <button className='searchButton' onClick={handleFilter}>Search</button>
        </div>
    );
};

export default Filter;