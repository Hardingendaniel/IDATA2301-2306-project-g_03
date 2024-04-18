// Footer.js
import React from 'react';
import logo from '../img/NTNU hovedlogo - hvit - hoyde.png';

function Footer() {
    return (
        <div className="grid gap-8 md:grid-cols-2 md:items-center md:text-left py-2 px-2 bg-main">
            <div className="">
                <img
                    src={logo}
                    alt="NTNU logo"
                    className="w-1/2"
                />
            </div>
            <div className="">
                <p className="mb-2 text-white">
                    <i>This website is a result of a university group project, performed in the course
                        <span style={{color: 'black'}}>IDATA2301 Web technologies</span>, at
                        <span style={{color: 'black'}}>NTNU</span>.
                        All the information provided here is a result of imagination.
                        Any resemblance with real companies or products is a coincidence.
                    </i>
                </p>
            </div>
        </div>
    );
}

export default Footer;