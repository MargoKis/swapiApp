import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from 'prop-types';
import Button from "../../atoms/Button";
import Error404 from "../../molecules/Error404";
import Loading from "../../molecules/Loading";
import Pagination from "../../molecules/Pagination";
import { usePagination } from "../../context/PaginationContext";

const PlanetsBlock = () => {
  const { currentPage, setCurrentPage } = usePagination();
  const [planets, setPlanets] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1); // стан для визначення загальної кількості сторінок

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/?page=${currentPage}`) //  виклик API для отримання списку персонажів на поточній сторінці
      .then((response) => {
        setPlanets(response.data.results); //  оновлення стану people з отриманими даними про персонажі
        setTotalPages(Math.ceil(response.data.count / 12)); // розрахунок і встановлення загальної кількості сторінок на основі кількості персонажів з API
      })

      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [currentPage]);

  if (isLoading) {
    return <Loading/>
  }

  if (error) {
    return <Error404/>
  }

  return (
    <div>
      <h2>Планети</h2>
          <ul className="blocks-of-item">
            {planets.map((planet) => (
              <li key={planet.url} className="block-of-item">
                <p>Назва: {planet.name}</p>
                <p>Клімат: {planet.climate}</p>
                <Link to={`/planets/${planet.url.match(/\d+/)[0]}`}>
                  <Button classNameButton="load-more-btn">More details</Button>
                </Link>
              </li>
            ))}
          </ul>
          <Pagination // дочірній компонент
            currentPage={currentPage} // поточна сторінка, яку відстежує <People/>
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
    </div>
  );
};

PlanetsBlock.propTypes = {
  planet: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default PlanetsBlock;
