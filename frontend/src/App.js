import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
//pages and components
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Shop />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
