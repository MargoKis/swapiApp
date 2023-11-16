import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from 'prop-types';
import Button from "../../atoms/Button";
import Error404 from "../../molecules/Error404";
import Loading from "../../molecules/Loading";
import Pagination from "../../molecules/Pagination";
import { usePagination } from "../../context/PaginationContext";

const StarshipsBlock = () => {
  const { currentPage, setCurrentPage } = usePagination();
  const [starships, setStarships] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1); // стан для визначення загальної кількості сторінок

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://swapi.dev/api/starships/?page=${currentPage}`)
      .then((response) => {
        setStarships(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 12));
      })

      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [currentPage]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error404 />;
  }

  return (
    <div>
      <h2>Космічні кораблі</h2>
      <ul className="blocks-of-item">
        {starships.map((starship) => (
          <li key={starship.url} className="block-of-item">
            <p>Назва: {starship.name}</p>
            <p>Модель: {starship.model}</p>
            <Link to={`/starships/${starship.url.match(/\d+/)[0]}`}>
              <Button classNameButton="load-more-btn">More details</Button>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

StarshipsBlock.propTypes = {
  starship: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default StarshipsBlock;
