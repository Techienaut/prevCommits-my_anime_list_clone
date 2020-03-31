import React, { useState, useEffect } from "react";
import "./Main.css";
import GenreView from "../GenreView/GenreView";
import SingleShow from "../SingleShow/SingleShow";
import { animeGenreCodes, mangaGenreCodes } from "../../data/GenreData";
import {
  Route,
  Redirect,
  Link,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";

function Main() {
  return (
    <div className="Main">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/anime-genre/all" />
          </Route>
          <Route
            path="/anime-genre/all"
            render={routerProps => (
              <GenreView type="anime" genreCodes={animeGenreCodes} />
            )}
          />
          <Route
            path="/mnaga-genre/all"
            render={routerProps => (
              <GenreView type="manga" genreCodes={mangaGenreCodes} />
            )}
          />
          <Route
            path="/anime/id/:id"
            render={routerProps => <SingleShow type="anime" {...routerProps} />}
          />
        </Switch>
      </Router>
    </div>
  );
}
export default Main;
