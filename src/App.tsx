import { useContext, useEffect } from "react";
import LoginForm from "./Pages/LoginFormPage/LoginForm";
import HomePage from "./Pages/HomePage/HomePage";
import Header from "./Components/Header/Header";
import UserPage from "./Pages/UserPage/UserPage";
import FavoriteMovies from "./Pages/FavoriteMoviesPage/FavoriteMovies";
import { Switch, Route, Redirect } from "react-router-dom";
import { MoviesContextProvider } from "./store/movies-context";
import LoginContext from "./store/login-context";

function App() {
  const loginCtx = useContext(LoginContext);

  const logoutBtnHandler = () => {
    document.cookie =
      document.cookie.split("=")[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    localStorage.removeItem(`favoriteMovies=${loginCtx.token}`)
    loginCtx.isLoggedIn = false;    
    window.location.reload();
  };

  useEffect(() => {
    const username = document.cookie.split("=")[1];
    if (username) {
      loginCtx.isLoggedIn = true;
    }
  });

  return (
    <>
      <Header
        isLoggedIn={loginCtx.isLoggedIn}
        logoutBtnHandler={logoutBtnHandler}
      />
      <Switch>
        <Route exact path="/home" component={HomePage} />

        <Route exact path="/login" component={LoginForm} />

        {loginCtx.isLoggedIn ? (
          <MoviesContextProvider>
            <Route exact path="/favorites">
              <FavoriteMovies />
            </Route>

            <Route exact path="/userpage">
              <UserPage />
            </Route>
          </MoviesContextProvider>
        ) : (
          <Redirect to="/home" />
        )}

        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
