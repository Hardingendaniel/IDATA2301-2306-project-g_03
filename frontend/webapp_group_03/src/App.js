import logo from  './img/NTNU hovedlogo - hvit - hoyde.png';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import  './Footer.css';
import './Header.css'
import './FrontPage.css'
import Frontpage from "./Frontpage";


function App() {
  return (
    <div className="App">
      <header className="header">
          <Header/>
      </header>

        <body className={'body'}>
        <Frontpage/>
        </body>

      <footer>
          <Footer/>
      </footer>
    </div>
  );


}

export default App;

