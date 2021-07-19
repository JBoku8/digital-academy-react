import { Redirect, useLocation } from "react-router-dom";

import { checkValue } from "../service/localStorage";
import { AUTH_TOKEN } from "../service/auth.constants";

export const withAuthProtection = (Component) => {
  const WithAuthProtection = (props) => {
    const location = useLocation();
    const isAuthorized = checkValue(AUTH_TOKEN);
    return isAuthorized ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: "/login",
          state: location.pathname,
        }}
      />
    );
  };

  return WithAuthProtection;
};
