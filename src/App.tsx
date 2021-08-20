import LoginForm from "./Pages/LoginForm/LoginForm";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LoginContext from "./store/login-context";
import { MoviesContextProvider } from "./store/movies-context";
import { useContext } from "react";
import Header from "./Components/Header/Header";
import UserPage from "./Pages/UserPage/UserPage";
import FavoriteMovies from "./Pages/FavoriteMovies/FavoriteMovies";

function App() {
  const loginCtx = useContext(LoginContext);

  return (
    <>
      <Header isLoggedIn={loginCtx.isLoggedIn} />
      <Switch>
        <Route exact path="/home" component={HomePage} />

        <Route exact path="/login" component={LoginForm} />

        <Route exact path="/favorites">
          <MoviesContextProvider>
            <FavoriteMovies />
          </MoviesContextProvider>
        </Route>

        <Route exact path="/userpage">
          <MoviesContextProvider>
            <UserPage />
          </MoviesContextProvider>
        </Route>

        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
