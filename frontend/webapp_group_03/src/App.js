
import  './Footer.css';

import logo from  './img/NTNU hovedlogo - hvit - hoyde.png';
import './App.css';
import Footer from "./Footer";
import "./Header";

function App() {
  return (
    <div className="App">
      <header className="header">
          <Header/>
      </header>
      <footer>
          <Footer/>
      </footer>
    </div>
  );
}

export default App;

