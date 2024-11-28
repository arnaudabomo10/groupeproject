import React from 'react';
import './HomePage.css';
import video from '../../Assets/video.mp4'; // Assurez-vous que le chemin est correct

const HomePage = () => {
  return (
    <section className="Homepage">
      <div className="overlay"></div>
      <video
        className="background-video"
        src={video}
        muted
        autoPlay
        loop
        type="video/mp4"
      />
      <div className="homeContent container">
        <div className="textDiv">
          <span className="SmallText">Christmas Packages</span>
          <h1 className="HomePageTitle">Search your destination</h1>
        </div>
      </div>

      <div className="CardDiv grid">
        {/* Champ 1 : Destination */}
        <div className="destinationInput">
          <label htmlFor="city">Search your destination:</label>
          <div className="input flex">
            <input id="city" type="text" placeholder="Enter destination here..." />
          </div>
        </div>

        {/* Champ 2 : Date */}
        <div className="dateInput">
          <label htmlFor="date">Search by date:</label>
          <div className="input flex">
            <input id="date" type="date" placeholder="Select a date..." />
          </div>
        </div>

        {/* Champ 3 : Prix */}
        <div className="priceInput">
          <div className="label_total flex">
            <label htmlFor="price">Max price :</label>
            <h3 className="total">$5000</h3>
          </div>  

          <div className="input flex">
            <input type="range" max="5000" min="700" />
          </div>
        </div>
      </div> {/* Fermeture correcte de CardDiv */}

    </section> // Fermeture correcte de section
  );
};

export default HomePage;
