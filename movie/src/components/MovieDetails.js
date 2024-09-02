import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = movies.find(movie => movie.id === parseInt(id));

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
            <h2 className="text-3xl font-bold mb-6">{movie.title}</h2>
            <div className="w-full max-w-4xl">
                <iframe
                    src={`${movie.trailerURL}`}
                    title={`${movie.title} Trailer`}
                    width="100%"
                    height="500"
                    className="rounded-lg shadow-lg"

                ></iframe>
                <p className="mt-4 text-lg">{movie.description}</p>
            </div>
            <button
                onClick={() => navigate('/')}
                className="w-40 mt-5 bg-blue-600 rounded hover:bg-blue-500 absolute top-0 right-20"
            >
                Back to Home
            </button>
        </div>
    );
};

export default MovieDetail;
