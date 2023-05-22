/*
->App.js serves as the entry point for the app
->High level layouts and page routing are defined here
*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

//pages
import HomePage from "./pages/HomePage.js";
import ShopPage from "./pages/ShopPage.js";
import AboutPage from "./pages/AboutPage.js";
import ContactPage from "./pages/ContactPage.js";
import CoursesPage from "./pages/CoursesPage.js";
import MedicPage from "./pages/MedicPage.js";
import QuizPage from "./pages/QuizPage.js";
import ScreeningPage from "./pages/ScreeningPage.js";
import LearnPage from "./pages/LearnPage.js";
import ServicesPage from "./pages/ServicesPage.js";
//components
import Navbar from "./components/Nav/Navbar.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <div className="pageWrapper">
        <BrowserRouter>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ShopPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/medics" element={<MedicPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/screening" element={<ScreeningPage />} />
              <Route path="/learn" element={<LearnPage />} />
              <Route path="/services" element={<ServicesPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
