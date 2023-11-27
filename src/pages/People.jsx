import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Pagination from "../molecules/Pagination";
import Button from "../atoms/Button";
import Error404 from "../molecules/Error404";
import Loading from "../molecules/Loading";
import { useGetPeopleQuery } from "../api/apiCombined";
import { useSelector, useDispatch } from "react-redux";
import { setPeopleCurrentPage } from "../redux/paginationSlice"; // Підключаємо відповідний action
import styles from "./pages.module.css";
import Header from "../molecules/Header";

const PeopleBlock = () => {

  const animal = '20'
  // console.log(Object.getPrototypeOf(animal))
  const arr = []
  console.log(Object.getPrototypeOf(arr))




  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.peoplePagination.currentPage);

  const { data: people, isLoading, error } = useGetPeopleQuery(currentPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }
    dispatch(setPeopleCurrentPage(page)); // Викликаємо відповідний action
  };

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!isLoading && people) {
      setTotalPages(Math.ceil(people?.count / 12));
    }
  }, [isLoading, people]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error404 />;
  }

  return (
    <>
    <Header/>
      <h2 className={styles.mainTitle}>People</h2>
      <ul className={styles.blockOfCards}>
        {people.results.map((person) => (
          <li key={person.url} className={styles.card}>
            <p className={styles.itemName}>Name: {person.name}</p>
            <p className={styles.itemName}>Age: {person.birth_year}</p>
            <Link to={`/people/${person.url.match(/\d+/)[0]}`}>
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

PeopleBlock.propTypes = {
  person: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default PeopleBlock;
