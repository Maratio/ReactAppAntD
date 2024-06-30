import React from "react";
import { LayoutSite } from "../components/Layout/LayoutSite.jsx";
import { authRoutes, spareRoutes } from "../utils/routing.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthProvider from "../context/AuthProvider.jsx";
import { RequireAuth } from "../context/RequireAuth.jsx";

const RouteApp = () => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};

export default RouteApp;
