import React, { useState } from "react";
import { AuthContext } from "../utils/context.js";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signin = (user, callback) => {
      setUser(user);
      callback();
  };

  const signout = (callback) => {
      setUser(null);
      callback();
  };
  const value = { user, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
