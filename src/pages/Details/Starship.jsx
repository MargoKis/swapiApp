import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import Loading from "../../molecules/Loading";
import Error404 from "../../molecules/Error404";
import Header from "../../molecules/Header";
import styles from './details.module.css'

const StarshipDetails = () => {
  const { id } = useParams();

  const [starship, setStarship] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://swapi.dev/api/starships/${id}`)
      .then((response) => {
        setStarship(response.data);
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
    <Header/>
    <div>
      <h2 className={styles.mainTitle}>Details about starship {starship.name}</h2>
      <div className={styles.card}>
        <p>Model: {starship.model}</p>
        <p>Length: {starship.length}</p>
        <p>Passenger: {starship.passengers}</p>
      </div>
    </div>
    </>
  );
};

StarshipDetails.propTypes = {
  id: PropTypes.string,
};

export default StarshipDetails;
