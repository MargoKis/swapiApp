import React from "react";
import styles from "./molecules.module.css";
import { useLocation } from "react-router-dom";

const Error404 = () => {
  let location = useLocation();

  return (
    <>
    <div className={styles.errorWrap}>
      <p className={styles.error}>Oops, error happend</p>
      <p className={styles.error}>No match for {location.pathname}</p>
      <p className={styles.error}>You need to turn back</p>
    </div>
    </>
  );
};

export default Error404;