import React, { useState } from "react";
import { LayoutSite } from "../components/Layout/LayoutSite.jsx";
import { authRoutes, spareRoutes } from "../utils/routing.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthProvider from "../context/AuthProvider.jsx";
import { RequireAuth } from "../context/RequireAuth.jsx";
import AppContext from "../context/appContext.jsx";

const RouteApp = () => {
  const [colorTheme, setColorTheme] = useState(false);
  const colorThemeState = {
    colorTheme,
    setColorTheme,
  };

  return (
    <AuthProvider>
      <AppContext.Provider value={colorThemeState}>
        <BrowserRouter>
          <Routes>
            <Route element={<LayoutSite />}>
              {spareRoutes.map((route) => (
                <Route
                  element={route.element}
                  path={route.path}
                  key={route.path}
                />
              ))}

              {authRoutes.map((route) => (
                <Route
                  element={<RequireAuth>{route.element}</RequireAuth>}
                  path={route.path}
                  key={route.path}
                />
              ))}
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </AuthProvider>
  );
};

export default RouteApp;
