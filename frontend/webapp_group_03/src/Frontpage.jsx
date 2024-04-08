import React from "react";

function Frontpage () {
    return (
        <div className="main">

            <h2 className="subheading">Get the best experience with Stay Finder</h2>
            <div className="cards">
                <div className="card">
                    <img src="../img/hotel1.jpg" alt="Hotel 1" />
                    <p>OMG Stay Finder is the best!</p>
                    <div className="rating">★★★★★</div>
                </div>
                <div className="card">
                    <img src="../img/hotel2.jpg" alt="Hotel 2" />
                    <p>These guys have the best deals!</p>
                    <div className="rating">★★★★★</div>
                </div>
                <div className="card">
                    <img src="../img/hotel3.jpg" alt="Hotel 3" />
                    <p>Stay Finder for the win!</p>
                    <div className="rating">★★★★★</div>
                </div>
                <div className="card">
                    <img src="../img/HotelBeach.jpg" alt="Hotel 3" />
                    <p>Beautiful room with great prize</p>
                    <div className="rating">★★★★★</div>
                </div>
                <div className="card">
                    <img src="../img/scandic.jpg" alt="Hotel 3" />
                    <p>Nice hotel for a fair prize Ålesund</p>
                    <div className="rating">★★★★★</div>
                </div>
                <div className="card">
                    <img src="../img/sengscandic.jpg" alt="Hotel 3" />
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