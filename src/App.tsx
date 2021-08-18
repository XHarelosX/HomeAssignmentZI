import LoginForm from "./Pages/LoginForm/LoginForm";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import MovieList from "./Pages/MovieList/MovieList";
import HomePage from "./Pages/HomePage/HomePage";
import LoginContext from "./store/login-context";
import { useContext, useEffect } from "react";
import Header from "./Components/Header/Header";

function App() {
  const loginCtx = useContext(LoginContext);
  const history = useHistory();

  useEffect(() => {
    const username = document.cookie.split("=")[1];

    if (username) {
      loginCtx.isLoggedIn = true;
      loginCtx.login(username);
      history.replace("/movielist");
    }
    console.log("no Username Found");
  }, [loginCtx, history]);

  return (
    <>
      <Header isLoggedIn={loginCtx.isLoggedIn} />
      <Switch>
        <Route exact path="/home" component={HomePage} />

        <Route exact path="/login" component={LoginForm} />

        <Route exact path="/movielist">
          <MovieList isLoggedIn={loginCtx.isLoggedIn} />
        </Route>

        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
