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
          <Route path="/search">
            <h1>This is the search page</h1>
          </Route> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
