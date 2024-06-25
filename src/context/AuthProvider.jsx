import React, { useEffect, useState } from "react";
import { AuthContext } from "../utils/context.js";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const signin = (user, callback) => {
    setUser(user);
    callback();
    sessionStorage.setItem("user", user);
  };

  const signout = (callback) => {
    setUser("");
    callback();
    sessionStorage.setItem("user", "");
  };

  function gettSessionStorage() {
    const isAuthSession =
      sessionStorage.getItem("user") && sessionStorage.getItem("user") !== user;

    if (isAuthSession) {
      setUser(sessionStorage.getItem("user"));
    }
  }

  useEffect(gettSessionStorage, [user]);

  const value = { user, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
