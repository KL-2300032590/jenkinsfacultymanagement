import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Faculty from "./pages/Faculty";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/faculty">Faculty</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faculty" element={<Faculty />} />
      </Routes>
    </div>
  );
}

export default App;
