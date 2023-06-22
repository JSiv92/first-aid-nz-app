/*
->App.js serves as the entry point for the app
->High level layouts and page routing are defined here
*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

//stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

//pages
import HomePage from "./pages/HomePage.js";
import ShopPage from "./pages/ShopPage.js";
import AboutPage from "./pages/AboutPage.js";
import ContactPage from "./pages/ContactPage.js";
import CoursesPage from "./pages/CoursesPage.js";
import MedicPage from "./pages/MedicPage.js";
import ScreeningPage from "./pages/ScreeningPage.js";
import LearnerPage from "./pages/LearnerPage.js";
import Success from "./components/Shop/Success.js";
import Cancel from "./components/Shop/Cancel.js";

//components
import Navbar from "./components/Nav/Navbar.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  );

  return (
    <div className="App">
      <div className="pageWrapper">
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <Navbar />

            <div>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ShopPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/medics" element={<MedicPage />} />
                <Route path="/screening" element={<ScreeningPage />} />
                <Route path="/learn" element={<LearnerPage />} />
                <Route path="/success" element={<Success />} />
                <Route path="/cancel" element={<Cancel />} />
              </Routes>
            </div>
          </Elements>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
