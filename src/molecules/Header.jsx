import React from "react";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import styles from "./molecules.module.css";
// import robot from '../assets/robot.png'

const Header = () => {
  return (
    <>
    <div className={styles.headerWrap}>
      <div className={styles.headerBtnWrap}>
        <Link to='/'>
        <p className={styles.headerLogo}>
          STAR
          <br />
          WARS
        </p>
        </Link>
        <Link to="/people">
          <Button nameButton="people" classNameButton={styles.headerLink}>
            People
          </Button>
        </Link>
        <Link to="/starships">
          <Button nameButton="starships" classNameButton={styles.headerLink}>
            Starships
          </Button>
        </Link>
        <Link to="/planets">
          <Button nameButton="planets" classNameButton={styles.headerLink}>
            Planets
          </Button>
        </Link>
      </div>
    </div>
    {/* <img className={styles.robot} src={robot} alt="starwars"/> */}
    </>
  );
};

export default Header;
