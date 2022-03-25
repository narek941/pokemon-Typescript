import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home, Pokemon } from "../container";

const MainRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:poke" element={<Pokemon />} />
      </Routes>
    </Router>
  );
};
export default MainRouter;
