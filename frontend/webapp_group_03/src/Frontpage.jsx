import React from "react";
import logo from './img/hotel1.jpg'
import logo2 from './img/hotel2.jpg'
import logo3 from './img/hotel3.jpg'
import logo4 from './img/HotelBeach.jpg'
import logo5 from './img/scandic.jpg'
import logo6 from './img/sengscandic.jpg'
import shuffle from './shuffle';

function Frontpage () {
    return (
        <div className="main">

            <h2 className="subheading">Get the best experience with Stay Finder</h2>
            <div className="cards">
                <div className="card">
                    <img src={logo} alt="Hotel 1" />
                    <p>OMG Stay Finder is the best!</p>
                    <div className="rating">★★★★★</div>
                </div>
                <div className="card">
                    <img src={logo2} alt="Hotel 2" />
                    <p>These guys have the best deals!</p>
                    <div className="rating">★★★★★</div>
                </div>
                <div className="card">
                    <img src={logo3} alt="Hotel 3" />
                    <p>Stay Finder for the win!</p>
                    <div className="rating">★★★★★</div>
                </div>
                <div className="card">
                    <img src={logo4} alt="Hotel 3" />
                    <p>Beautiful room with great prize</p>
                    <div className="rating">★★★★★</div>
                </div>
                <div className="card">
                    <img src={logo5} alt="Hotel 3" />
                    <p>Nice hotel for a fair prize Ålesund</p>
                    <div className="rating">★★★★★</div>
                </div>
                <div className="card">
                    <img src={logo6} alt="Hotel 3" />
                    <p>Amazing hotel for a fair prize Ålesund</p>
                    <div className="rating">★★★★★</div>
                </div>
                <button id="Shuffle_reviews" className="shuffle">
                    <span className="arrow" />
                </button>
                <button id="Shuffle_reviews2" className="shuffle2">
                    <span className="arrow2" />
                </button>
            </div>
        </div>
    );

}

export default Frontpage;

