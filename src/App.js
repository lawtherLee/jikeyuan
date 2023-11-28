import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import AuthRoute from "./components/AuthRoute";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path={"/login"} component={Login} />
            <AuthRoute path={"/home"} component={Layout} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
