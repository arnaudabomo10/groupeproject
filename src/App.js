import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import FlightData from './components/FlightData';

const App = () => {
  return(
    <div>
      <Header />
      <h2>Contenu principal</h2>
      <Navbar/>
      <FlightData />
    </div>
  )
}

export default App;
