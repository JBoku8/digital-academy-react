import React, { useState, useContext } from "react";
import { AUTH_TOKEN } from "../service/auth.constants";
import { checkValue } from "../service/localStorage";

export const UserContext = React.createContext(null);

UserContext.displayName = "UserContext";

export const UserContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(() => {
    return checkValue(AUTH_TOKEN);
  });

  return (
    <UserContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const userContextData = useContext(UserContext);
  if (!userContextData) {
    throw new Error("Calling useUserContext hook out of UserContextProvider");
  }

  return userContextData;
};

const exporting = {
  UserContext,
  UserContextProvider,
};
export default exporting;
