import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import Home from "./Pages/Home";
import PokeMap from "./Pages/PokeMap";

const RoutesComponent = () => {
  const routesArray = [
    { path: "/", element: <Home /> },
    { path: "*", element: <Navigate replace to="/" /> },
    { path: "/map", element: <PokeMap /> },
  ];
  return (
    <BrowserRouter>
      <Routes>
        {routesArray.map((item, i) => (
          <Route key={i} path={item.path} element={item.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
