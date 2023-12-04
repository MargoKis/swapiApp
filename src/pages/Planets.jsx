import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Button from "../atoms/Button";
import Error404 from "../molecules/Error404";
import Loading from "../molecules/Loading";
import Pagination from "../molecules/Pagination";
import { useGetPlanetsQuery } from "../api/apiCombined";
import { useSelector, useDispatch } from "react-redux";
import { setPlanetsCurrentPage } from "../redux/paginationSlice"; 
import styles from "./pages.module.css";
import Header from "../molecules/Header";

const PlanetsBlock = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.planetsPagination.currentPage); 
  const { data: planets, isLoading, error } = useGetPlanetsQuery(currentPage);
 
  const [totalPages, setTotalPages] = useState(1);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }
    dispatch(setPlanetsCurrentPage(page)); 
  };
  
  useEffect(() => {
    if (!isLoading && planets) {
      setTotalPages(Math.ceil(planets?.count / 12));
    }
  }, [isLoading, planets]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error404 />;
  }

  return (
    <>
    <Header/>
      <h2 className={styles.mainTitle}>Planets</h2>
      <ul className={styles.blockOfCards}>
        {planets.results.map((planet) => (
          <li key={planet.url} className={styles.card}>
            <p className={styles.itemName}>Name: {planet.name}</p>
            <p className={styles.itemName}>Climate: {planet.climate}</p>
            <Link to={`/planets/${planet.url.match(/\d+/)[0]}`}>
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

PlanetsBlock.propTypes = {
  planet: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default PlanetsBlock;