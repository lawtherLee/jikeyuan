import React, { Component } from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import AuthRoute from "./components/AuthRoute";
import NotFound from "./pages/NotFound";
import history from "./utils/history";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route path={"/login"} component={Login} />
            <AuthRoute path={"/home"} component={Layout} />

            <Redirect from={"/"} to={"/home"} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
