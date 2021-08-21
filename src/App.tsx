import LoginForm from "./Pages/LoginForm/LoginForm";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LoginContext from "./store/login-context";
import { MoviesContextProvider } from "./store/movies-context";
import { useContext, useEffect } from "react";
import Header from "./Components/Header/Header";
import UserPage from "./Pages/UserPage/UserPage";
import FavoriteMovies from "./Pages/FavoriteMovies/FavoriteMovies";

function App() {
  const loginCtx = useContext(LoginContext);

  useEffect(() => {
    const username = document.cookie.split("=")[1];
    if (username) {
      loginCtx.isLoggedIn = true;
    }
  });

  return (
    <>
      <Header isLoggedIn={loginCtx.isLoggedIn} />
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
