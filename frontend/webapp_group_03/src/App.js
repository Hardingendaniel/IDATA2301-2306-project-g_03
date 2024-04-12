import './App.css';
import  './components/Footer.css';
import './components/Header.css'
import './pages/frontpage/FrontPage.css'
import FrontPage from "./pages/frontpage/FrontPage";
import { MainContent } from "./MainContent";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal/Modal";
import React from "react";

/**
 * A component representing the whole application
 * @return {JSX.Element}
 * @constructor
 */
export function App() {
  return (
      <Router>
        <Header />
        <MainContent />
        <Footer />
      </Router>
  );
}