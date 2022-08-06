import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="./Search.js" element="{<Search />}">
            Hey Everyone! This is the search pg.
            </Route>
            <Route exact path="./Home" element="{<Home />}">
            </Route>
              </Routes>
              </Router>
     
    </div>
  );
}

export default App;

