import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TrendingSection from "./components/TrendingSection";
import ReasonsSection from "./components/ReasonsSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Auth from './components/Auth';
import './index.css';
import './script.js';
import './auth.css';

// Wrap the conditional logic in a child component
const AppContent = () => {
  const location = useLocation();
  const isAuthPage = location.pathname.startsWith('/auth');

  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
      </Routes>
      {!isAuthPage && (
        <div className="container">
          <Header />
          <HeroSection />
          <main>
            <TrendingSection />
            <ReasonsSection />
            <FAQSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};
export default App;
