import React, { useState, useEffect } from "react";
import axios from "axios";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}`).then((response) => {
      setPeople(response.results);
    });
  }, []);

  return (
    <div>
      <h2 className="text-gray">Персонажі</h2>
      <ul>
        {people.map((person, name) => (
          <li key={name}>
            <p>Ім'я: {person.name}</p>
            <p>Вік: {person.birth_year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default People;
