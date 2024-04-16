// Footer.js
import React from 'react';
import logo from '../img/NTNU hovedlogo - hvit - hoyde.png';

function Footer() {
    return (
        <div>
        <footer className= 'footer'>
            <img src={logo} width="10%" height="auto" alt="NTNU Logo"/>
            <p>
                <i>This website is a result of a university group project, performed in the course
                    <span style={{ color: 'black' }}>IDATA2301 Web technologies</span>, at
                    <span style={{ color: 'black' }}>NTNU</span>.
                    All the information provided here is a result of imagination.
                    Any resemblance with real companies or products is a coincidence.
                </i>
            </p>
        </footer>
        </div>
    );
}
export default Footer;