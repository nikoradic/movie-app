import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleMovie from "./pages/SingleMovie";
import SearchBox from "./components/SearchBox";

function App() {
  const [searchValue, setSearchValue] = useState("Batman");
  return (
    <div>
      <nav className="color-nav">
        <div className="container-fluid d-flex justify-content-between  ">
          <Link to="/">
            <h3>TMDB</h3>
          </Link>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home searchValue={searchValue} />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
      </Routes>
    </div>
  );
}

export default App;
