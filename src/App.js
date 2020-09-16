import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Details from "./pages/Details";

export default function router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/favorite">
          <Favorite />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
