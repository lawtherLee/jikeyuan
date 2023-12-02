import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { getToken } from "../../utils/storage";

class AuthRoute extends Component {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(props) => {
          const token = getToken();
          if (token) return <Component {...props} />;
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  fromPath: props.location.pathname,
                },
              }}
            />
          );
        }}
      />
    );
  }
}

export default AuthRoute;
