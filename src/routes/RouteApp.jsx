import React from "react";
import { LayoutSite } from "../components/Layout/LayoutSite.jsx";
import { authRoutes, spareRoutes } from "../utils/routing.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import ContentSiteNotAuth from "../components/Content/ContentSiteNotAuth.jsx";

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutSite/>}>
          {/* <Route element={<ContentSiteNotAuth />} path="/" /> */}

          {spareRoutes.map((route) => (
            <Route element={route.element} path={route.path} key={route.path} />
          ))}
          {authRoutes.map((route) => (
            <Route element={route.element} path={route.path} key={route.path} />
          ))}

          {/* <Route element={<NotFound />} path="*" /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteApp;
