import React, { Component } from "react";
import { Switch, Route, Router } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import AuthRoute from "./components/AuthRoute";
import NotFound from "./pages/NotFound";
import history from "./utils/history";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route path={"/login"} component={Login} />
            <AuthRoute path={"/home"} component={Layout} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
