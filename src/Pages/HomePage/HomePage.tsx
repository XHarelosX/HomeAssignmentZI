import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
  return (
    <div className={styles.divContainer}>
      <p>Welcome to StarWars UI API!</p>
      <p>Simple App For All the Star Wars Information</p>
      <p>based on swapi.dev API.</p>
      <div>
        <Link to="/login" className={styles.login}>
          Please Log in
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
