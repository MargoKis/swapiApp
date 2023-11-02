import React, { useState, useEffect } from "react";
import axios from "axios";

const Starships = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/${id}`).then((response) => {
      setStarships(response.results);
    });
  }, [id]);

  return (
    <div>
      <h2>Космічні кораблі</h2>
      <ul>
        {starships.map((starship, name) => (
          <li key={name}>
            <p>Ім'я: {starship.name}</p>
            <p>Модель: {starship.model}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Starships;