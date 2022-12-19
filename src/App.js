import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleMovie from "./pages/SingleMovie";

function App() {
  return (
    <div>
      <Link to="/">
        <div className="container-fluid">
          <h1>Home</h1>
        </div>
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
      </Routes>
    </div>
  );
}

export default App;
