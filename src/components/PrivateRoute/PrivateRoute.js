import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ContextToken } from "../../App";

const PrivateRoute = ({ component: Component, ...props }) => {
  const { token } = React.useContext(ContextToken);

  return (
    <Route
      exact
      path={props.to}
      render={() => (token ? <Component /> : <Redirect to={props.redirect} />)}
    />
  );
};

export default PrivateRoute;
