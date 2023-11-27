import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Button from "../atoms/Button";
import Error404 from "../molecules/Error404";
import Loading from "../molecules/Loading";
import Pagination from "../molecules/Pagination";
import { useGetStarshipsQuery } from "../api/apiCombined";
import { useSelector, useDispatch } from "react-redux";
import { setStarshipsCurrentPage } from "../redux/paginationSlice"; // Змінений імпорт
import styles from "./pages.module.css";

const StarshipsBlock = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.starshipsPagination.currentPage); // Змінено з state.pagination на state.starshipsPagination
  const { data: starships, isLoading, error } = useGetStarshipsQuery(currentPage);
  const [totalPages, setTotalPages] = useState(1);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) {
      return; 
    }
    dispatch(setStarshipsCurrentPage(page)); // Використання відповідного action для зоряних кораблів
  };

  useEffect(() => {
    if (!isLoading && starships) {
      setTotalPages(Math.ceil(starships?.count / 12))
    }
  }, [isLoading, starships])

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error404 />;
  }

  return (
    <>
    <Header/>
      <h2 className={styles.mainTitle}>Starships</h2>
      <ul className={styles.blockOfCards}>
        {starships.results.map((starship) => (
          <li key={starship.url} className={styles.card}>
            <p className={styles.itemName}>Name: {starship.name}</p>
            <p className={styles.itemName}>Model: {starship.model}</p>
            <Link to={`/starships/${starship.url.match(/\d+/)[0]}`}>
              <Button classNameButton={styles.btnLoadMore}>More details</Button>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
         currentPage={currentPage}
         totalPages={totalPages}
         onPageChange={handlePageChange}
      />
     </>
  );
};

StarshipsBlock.propTypes = {
  starship: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default StarshipsBlock;