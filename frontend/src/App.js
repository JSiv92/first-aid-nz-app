/*
->App.js serves as the entry point for the app
->High level layouts and page routing are defined here
*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

//pages
import HomePage from "./pages/HomePage.js";
import ShopPage from "./pages/ShopPage.js";
//components
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ShopPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
