import React, { useEffect, useState } from 'react';

const FlightData = () => {
  const [flights, setFlights] = useState([]); // État pour stocker les données des vols
  const [loading, setLoading] = useState(true); // État pour gérer le chargement
  const [error, setError] = useState(null); // État pour gérer les erreurs

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rapidapi.com/ntd119/api/sky-scanner3/playground/apiendpoint_8207ef83-59d5-436f-aa58-1f9ddcfc4f7b', {
          method: 'GET',
          headers: {
            'X-RapidAPI-Host': 'sky-scanner3.p.rapidapi.com', // Remplacez par l'hôte correct si nécessaire
            'X-RapidAPI-Key': 'd7d4ce0b58msh77a8a52a7c61bf4p139ccajsnbb0e365cd96b', // Remplacez par votre clé API RapidAPI
          },
        });

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }

        const data = await response.json();
        console.log(data)
        setFlights(data.data.itineraries); // Ajustez selon la structure de vos données
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Le tableau vide [] signifie que l'effet ne s'exécute qu'au montage du composant

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <div>
      <h2>Données des Vols</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.price.formatted} - De {flight.legs[0].origin.name} à {flight.legs[0].destination.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightData;
