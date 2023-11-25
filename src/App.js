import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path={"/login"} component={Login} />
            <Route path={"/home"} component={Layout} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
