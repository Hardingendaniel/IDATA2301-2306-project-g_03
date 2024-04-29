import './App.css';
import './pages/hotelpage/hotelStyle.css';
import './pages/frontpage/FrontPage.css'
import Footer from "./components/Footer";
import Header2 from "./components/Header2";
import React from "react";
import { MainContent } from "./MainContent";
import { BrowserRouter as Router } from "react-router-dom";


/**
 * A component representing the whole application
 * @return {JSX.Element}
 * @constructor
 */
export function App() {
  return (
      <Router>
        <Header2 />
        <MainContent />
        <Footer />
      </Router>
  );
}