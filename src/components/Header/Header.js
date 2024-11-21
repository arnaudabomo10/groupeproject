import React from 'react';
import './Header.css'; // Assurez-vous que ce fichier CSS est dans le même répertoire

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://cdn.pixabay.com/photo/2020/02/27/20/48/aircraft-4885805_1280.jpg" alt="Logo" />
      </div>
      <div className="home-icon">
        <a href="/">
          <img src="https://clipground.com/images/white-home-icon-transparent-png-6.png" alt="Home" />
        </a>
      </div>
      <div className="language-toggle">
        <button>Fr</button>/<button>En</button>
      </div>
    </header>
  );
};

export default Header;
