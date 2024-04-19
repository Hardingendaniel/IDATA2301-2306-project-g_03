import React from 'react';
import logo from '../img/NTNU hovedlogo - hvit - hoyde.png';

function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-main flex flex-col md:flex-row md:items-center justify-center">
            <aside>
                <img
                    src={logo}
                    alt="NTNU logo"
                    className="h-40 mx-auto"
                >
                </img>
            </aside>
            <div className="grid grid-flow-col gap-4 w-full md:w-1/3 text-white text-base">
                <i>This website is a result of a university group project, performed in the course
                    <span style={{color: 'black'}}> IDATA2301 Web technologies</span>, at
                    <span style={{color: 'black'}}> NTNU</span>.
                    All the information provided here is a result of imagination.
                    Any resemblance with real companies or products is a coincidence.
                </i>
            </div>
        </footer>
    );
}

export default Footer;