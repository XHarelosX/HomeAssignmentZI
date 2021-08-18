import LoginForm from "./Pages/LoginForm/LoginForm";
import { Switch, Route, Redirect } from "react-router-dom";
import MovieList from "./Pages/MovieList/MovieList";
import Home from "./Pages/HomePage/HomePage";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/login" component={LoginForm} />

        <Route path="/movielist">
          <MovieList />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
