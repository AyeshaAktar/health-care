import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../../../context/AuthProvider";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const [loginUser, setLoginUser] = useContext(AuthContext);
  console.log(loginUser);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loginUser?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
