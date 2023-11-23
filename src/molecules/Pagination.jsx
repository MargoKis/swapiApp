import React from "react";
import PropTypes from "prop-types";
import Button from "../atoms/Button";
import styles from "./molecules.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className={styles.paginationWrap}>
      <div className={styles.paginationBtnWrap}>
        <Button
          onClickButton={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          classNameButton={styles.paginationBtn}
        >
          Next
        </Button>
      </div>
      <span className={styles.paginationPage}>
        Page {currentPage} of {totalPages}
      </span>
      <div className={styles.paginationBtnWrap}>
        <Button
          onClickButton={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          classNameButton={styles.paginationBtn}
        >
          Previous
        </Button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
