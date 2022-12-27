import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddMovie } from "./pages/AddMovie";
import { WatchedMovies } from "./pages/WatchedMovies";
import { WatchListMovies } from "./pages/WatchListMovie";
import "./App.css";
import { Header } from "./components/layouts/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WatchListMovies />} />
        <Route path="/watched" element={<WatchedMovies />} />
        <Route path="/add" element={<AddMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
