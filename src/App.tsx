import LoginForm from "./Pages/LoginForm/LoginForm";
import { Switch, Route, Redirect } from "react-router-dom";
import MovieList from "./Pages/MovieList/MovieList";
import { useContext } from "react";
import LoginContext from "./store/login-context";
import Home from "./Pages/HomePage/HomePage";
import Layout from "./Components/Layout/Layout";

function App() {
  const authCtx = useContext(LoginContext);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <LoginForm />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/movielist">
            <MovieList />
          </Route>
        )}
        {!authCtx.isLoggedIn && (
          <Route path="*">
            <Redirect to="/" />
          </Route>
        )}
      </Switch>
    </Layout>
  );
}

export default App;
