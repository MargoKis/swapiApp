import React, { useState, useEffect } from "react";
import axios from "axios";

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`).then((response) => {
      setPlanets(response.results);
    });
  }, []);

  return (
    <div>
      <h2>Планети</h2>
      <ul>
        {planets.map((planet, name) => (
          <li key={name}>
            <p>Ім'я: {planet.name}</p>
            <p>Клімат: {planet.climate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Planets;
