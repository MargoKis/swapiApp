import React from "react";
import robot from "../assets/robot.png";
import Header from "../molecules/Header";
import styles from "./pages.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.img}>
        <img className={styles.robot} src={robot} alt="starwars" />
      </div>
    </>
  );
};

export default Home;
