import React, { Component, Suspense } from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
// import Login from "./pages/Login";
// import Layout from "./pages/Layout";
import AuthRoute from "./components/AuthRoute";
import NotFound from "./pages/NotFound";
import history from "./utils/history";
// import Home from "./pages/Home";

const Layout = React.lazy(() => import("./pages/Layout"));
const Login = React.lazy(() => import("./pages/Login"));

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Suspense fallback={<div>loading</div>}>
            <Switch>
              <Route path={"/login"} component={Login} />
              <AuthRoute path={"/home"} component={Layout} />

              <Redirect from={"/"} to={"/home"} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    );
  }
}

export default App;
