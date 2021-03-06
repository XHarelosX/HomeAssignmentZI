import React, { useState } from "react";

interface context {
  token: string;
  isLoggedIn: boolean;
  login: (arg: string) => void;
  logout: () => void;
}

const LoginContext = React.createContext<context>({
  token: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const LoginContextProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState("");
  const userIsLoggendIn = !!token;

  const loginHandler = (token: string) => {
    setToken(token);
  };
  const logoutHandler = () => {
    setToken("");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggendIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
