import React, { useContext, useState } from "react";

export const ThemeContext = React.createContext("");
ThemeContext.displayName = "ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const themeData = useContext(ThemeContext);
  if (!themeData) {
    throw new Error("Calling useThemeContext hook out of ThemeProvider");
  }

  return themeData;
};
