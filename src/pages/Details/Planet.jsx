import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Loading from "../../molecules/Loading";
import Error404 from "../../molecules/Error404";
import Header from "../../molecules/Header";
import styles from './details.module.css'

const PlanetDetails = () => {
  const { id } = useParams();

  const [planet, setPlanet] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((response) => {
        setPlanet(response.data);
      })

      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error404 />;
  }

  return (
    <>
      <Header />
      <div>
        <h2 className={styles.mainTitle}>Details about planet {planet.name}</h2>
        <div className={styles.card}>
          <p>Diameter : {planet.diameter}</p>
          <p>Gravity: {planet.gravity}</p>
          <p>Population: {planet.population}</p>
        </div>
      </div>
    </>
  );
};

PlanetDetails.propTypes = {
  id: PropTypes.string,
};

export default PlanetDetails;
