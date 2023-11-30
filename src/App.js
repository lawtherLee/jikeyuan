import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import AuthRoute from "./components/AuthRoute";
import NotFound from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path={"/login"} component={Login} />
            <AuthRoute path={"/home"} component={Layout} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
