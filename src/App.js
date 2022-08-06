import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/search" element={<h1>this is the search page!</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
