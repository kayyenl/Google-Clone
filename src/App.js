import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <h1>hey lets build the google clone! 🚀 </h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
