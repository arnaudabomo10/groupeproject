import React from 'react';
import './Navbar.css'; // Assurez-vous que ce fichier CSS est dans le même répertoire

const Navbar = () => {
  return (
    <nav className="navbar">
      <button className="nav-button">Airports</button>
      <button className="nav-button">Compagnies</button>
      <button className="nav-button">Number of stopovers</button>
      <button className="nav-button">Flight time</button>
      <button className="nav-button">Price</button>
    </nav>
  );
};

export default Navbar;
