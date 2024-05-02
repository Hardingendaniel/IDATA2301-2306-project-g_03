import './App.css';
import './pages/hotelpage/hotelStyle.css';
import './pages/frontpage/FrontPage.css'
import Footer from "./components/Footer";
import Header from "./components/Header";
import React from "react";
import { MainContent } from "./MainContent";
import { BrowserRouter as Router } from "react-router-dom";
import {DataProvider} from "./DataProvider";

/**
 * A component representing the whole application
 * @return {JSX.Element}
 * @constructor
 */
export function App() {
  return (
      <DataProvider>
      <Router>
        <Header />
        <MainContent />
        <Footer />
      </Router>
      </DataProvider>
  );
}