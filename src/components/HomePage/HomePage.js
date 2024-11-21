
import React from 'react';
import './HomePage.css'; // Si vous avez un fichier CSS pour styliser ce composant
import artworkImage from '../path/to/Untitled_Artwork.jpg'; // Remplacez par le chemin correct vers votre image

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Bienvenue sur notre site</h1>
      <img src={artworkImage} alt="Artwork" className="artwork-image" />
    </div>
  );
};

export default HomePage;
