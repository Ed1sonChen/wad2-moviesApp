import "./App.css";
import React, { Component } from "react";
import {
  HashRouter,
  Redirect,
  Switch,
  Route
} from "react-router-dom";
import Search from "./components/Search/Search";
import VerticalNav from "./components/VerticalNav/VerticalNav";
import Movies from "./components/Movies/Movies";
import MovieDetails from "./components/Movies/MovieDetails";

import Loading from "./components/Loader/Loading";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/MoviesApp">
   
   
        <React.Fragment>
]         <VerticalNav />
          <Loading />
          <Switch>
            <Route exact path="/movies" component={Movies} />
            <Route
              exact
              path="/"
              component={() => <Redirect to="/movies" />}
            />
            <Route path="/search" component={Search} />
            <Route path="/movies/details/:id" component={MovieDetails} />

          </Switch>
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;
