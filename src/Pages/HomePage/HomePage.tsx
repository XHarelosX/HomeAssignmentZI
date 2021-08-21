import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./HomePage.module.css";
import { useContext } from "react";
import LoginContext from "../../store/login-context";

const HomePage: React.FC = () => {
  const history = useHistory();
  const loginCtx = useContext(LoginContext);

  const displayLoginLink = !loginCtx.isLoggedIn ? (
    <Link to="/login" className={styles.login}>
      Please Log in
    </Link>
  ) : (
    <div>Logging in...</div>
  );

  useEffect(() => {
    const username = document.cookie.split("=")[1];
    if (username) {
      loginCtx.login(username);
      history.push("/userpage");
    }
  }, [loginCtx, history]);
  return (
    <div className={styles.divContainer}>
      <p>Welcome to StarWars UI API!</p>
      <p>Simple App For All the Star Wars Information</p>
      <p>based on swapi.dev API.</p>
      <div>{displayLoginLink}</div>
    </div>
  );
};

export default HomePage;
