// Importation des modules nécessaires de React
import React, { useState } from 'react';

// Importation des composants enfants
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Filter from './Filter';
import './App.css'

// Composant principal de l'application
const App = () => {
  // État initial des films
  const [movies, setMovies] = useState([
    { title: 'Manifest', description: 'A suspense serie', posterURL: 'https://ntvb.tmsimg.com/assets/p15516905_b_h8_av.jpg?w=960&h=540', rating: 5 },
    { title: 'The rain', description: 'A science-fiction post-apocalyptique ', posterURL: 'https://www.radiofrance.fr/s3/cruiser-production/2020/06/79fe679e-72a1-452b-bebe-209929c701e7/1200x680_the-rain.jpg', rating: 5 },
    { title: 'La Demoiselle et le Dragon', description: ' américain film suspense', posterURL: 'https://cdn.lesnumeriques.com/optim/product/74/74672/547b007b-la-demoiselle-et-le-dragon__1200_900__0-165-910-678.jpg', rating: 4 },
    { title: 'Squid game', description: ' serie televisé 2 saisons', posterURL:'https://ca-times.brightspotcdn.com/dims4/default/5410779/2147483647/strip/false/crop/5906x3937+0+0/resize/1486x991!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F58%2F4e%2Fa59edfeb4c00b85217973e5560f6%2Fsquidgame-unit-104-442.jpg', rating: 4 },
    { title: 'Locke & Key', description: 'A suspense serie 3 saisons', posterURL: 'https://img.rts.ch/medias/2020/image/a6sz77-26710066.image?w=1200&h=627', rating: 5 },
    { title: 'Le monde après nous', description: 'A suspense serie', posterURL: 'https://cdn.lesnumeriques.com/optim/product/74/74328/c69f94fd-le-monde-apres-nous__1200_1200__0-60-910-970.jpg', rating: 5 },
    { title: 'NOWHERE', description: 'A suspense film ', posterURL: 'https://decider.com/wp-content/uploads/2023/10/nowhere-true-story.jpg?quality=75&strip=all', rating: 4 },
    { title: 'La casa de papel', description: 'une série télévisée espagnole', posterURL: 'https://www.programme-tv.net/imgre/fit/~1~tel~2021~12~10~d375fdf3-70f8-4eb7-87c8-037fb7f05b91.png/720x405/crop-from/top/quality/80/focus-point/942,545/serieux-un-vrai-negociateur-juge-la-credibilite-de-la-casa-de-papel.jpg', rating: 4 },
    { title: 'Better than us', description: 'serie televisé 16 episodes', posterURL:'https://www.beliciousmuse.com/wp-content/uploads/2019/08/better-than-us-review.jpg', rating: 4 },
    { title: 'La mère de la mariée', description: 'A comedian film', posterURL: 'https://occ-0-8407-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeiXVmC2MfHWK8YfZqsS9BCWkXPDsJcHyUndK1ZPaCqCgSFYBpu8hfzhz2Z6sUoXXmBEa9Dxj-WV8eM0IPn7MR7gEH8bpSjaihf7.jpg?r=e45', rating: 5 },
  ]);

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
    <div className="app">
      <Filter onFilter={filterMovies} />
      <button className='buttonShow' onClick = {toggleShow}> 
      {shows ? 'Hide' : 'Add Movies'}
      </button>
      <MovieList movies={filteredMovies} />
      
      {shows &&(
        <AddMovie onAddMovie={addMovie} />
      )}
      
    </div>
  );
};

export default App;
