import React from "react"
import scandic from '../../img/scandic.jpg'
import hotel1 from '../../img/hotel1.jpg'
import hotel3 from '../../img/hotel3.jpg'
import hotel2 from '../../img/hotel2.jpg'
import hotel4 from '../../img/sengscandic.jpg'

export function HotelPage() {
    return (
        <div className="main">
            <div className="top">
                <h1 className="subheading">Villa GoatEid</h1>
                <div className="star-rating">★★★★☆</div>
                <div className="photo-gallery-row">
                    <div className="photo-gallery-column1">
                        <img src={scandic} alt="pool"/>
                    </div>
                    <div className="photo-gallery-column2">
                        <img src={hotel1} alt="pool"/>
                    </div>
                    <div className="photo-gallery-column3">
                        <img src={hotel3} alt="pool"/>
                    </div>
                    <div className="photo-gallery-column4">
                        <img src={hotel2} alt="pool"/>
                    </div>
                    <div className="photo-gallery-column5">
                        <img src={hotel4} alt="pool"/>
                    </div>
                </div>
                <div className="hotel-info">
                    <nav>
                        <div className="divider">
                            <link/>
                            <a href="#Overview">Overview</a>
                            <link/>
                            <a href="#Rooms">Rooms</a>
                            <link/>
                            <a href="#Reviews">Reviews</a>
                            <link/>
                            <a href="#About">About</a>
                            <link/>
                            <a href="#Location">Location</a>
                        </div>
                        <div className="dividerSolid">
                            <hr className="solid"/>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="bottom">
                <div></div>
            </div>
        </div>

    );
}

export default HotelPage;