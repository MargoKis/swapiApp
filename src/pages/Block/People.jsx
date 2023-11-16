import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import Button from "../../atoms/Button";
import Pagination from "../../molecules/Pagination";
import Error404 from "../../molecules/Error404";
import Loading from "../../molecules/Loading";
import { usePagination } from "../../context/PaginationContext";

const PeopleBlock = () => {
  // const { data: people, isLoading, error } = useGetPeopleQuery(1);
 
  const { currentPage, setCurrentPage } = usePagination();
  const [people, setPeople] = useState([]); // стан для зберігання масиву персонажів
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1); // стан для визначення загальної кількості сторінок

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://swapi.dev/api/people/?page=${currentPage}`)
      .then((response) => {
        setPeople(response.data.results);
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
      <h2>Персонажі</h2>
      <ul className="blocks-of-item">
        {people.map((person) => (
          <li key={person.url} className="block-of-item">
            <p>Ім'я: {person.name}</p>
            <p>Вік: {person.birth_year}</p>
            <Link to={`/people/${person.url.match(/\d+/)[0]}`}>
              {" "}
              {/* // регулярний вираз, щоб знайти перше число в рядку, яке є індексом персонажа. Таким чином, формується URL, наприклад, /people/1 */}
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

PeopleBlock.propTypes = {
  person: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default PeopleBlock;
