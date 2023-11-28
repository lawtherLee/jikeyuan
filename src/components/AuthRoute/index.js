import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { getToken } from "../../utils/storage";

class AuthRoute extends Component {
  render() {
    const { path, component: Component } = this.props;
    return (
      <Route
        path={path}
        render={(props) => {
          console.log(props);
          const token = getToken();
          if (token) return <Component {...props} />;
          return <Redirect to={"/login"} />;
        }}
      />
    );
  }
}

export default AuthRoute;
