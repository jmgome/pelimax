import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesDashboard } from "./RoutesDashboard";

export default function ({}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RoutesDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
