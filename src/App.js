import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/css/style.css";

import MemberRoute from "components/Routes/MemberRoute";
import GuestRoute from "components/Routes/GuestRoute";

import NotFound from "pages/404";
import Login from "pages/Login";

function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });
  return (
    <>
      <Router history={history}>
        <Switch>
          <GuestRoute path='/login' component={Login}></GuestRoute>

          <Route path='*' component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
