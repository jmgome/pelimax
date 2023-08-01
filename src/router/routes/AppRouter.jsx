import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesDashboard } from "./RoutesDashboard";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RoutesDashboard/>} />
      </Routes>
    </BrowserRouter>
  );
};
