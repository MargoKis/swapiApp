import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import Loading from "../../molecules/Loading";
import Error404 from "../../molecules/Error404";
import styles from './details.module.css'
import Header from "../../molecules/Header";

const PersonDetails = () => {
  const { id } = useParams();

  const [person, setPerson] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((response) => {
        setPerson(response.data);
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
      <h2 className={styles.mainTitle}>Details about person {person.name}</h2>
      <div className={styles.card}>
        <p>Gender: {person.gender}</p>
        <p>Hair color: {person.hair_color}</p>
        <p>Mass: {person.mass}</p>
        <p>Skin color: {person.skin_color}</p>
      </div>
    </div>
    </>
   
  );
};

PersonDetails.propTypes = {
  id: PropTypes.string,
};

export default PersonDetails;
