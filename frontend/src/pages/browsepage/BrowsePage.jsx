import React from "react";
import img1 from '../../img/7652611.jpg'
import img2 from '../../img/hotel1.jpg'
import img3 from '../../img/hotel3.jpg'
import {NavLink} from "react-router-dom";

export function BrowsePage() {
    return (
        <div className="main">
            <div className="left">
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"}>Country</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"}>State</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"}>Town</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="map">
                    <img
                        src={img1}
                        className="map-img"
                        height={200}
                        width={300}
                        alt="temporary img"
                    />
                    <button className="map-button">Show on map</button>
                </div>
                <div className="filter">
                    Filter by:
                    <hr/>
                    <div className="budget">
                        Your budget (per night)
                        <div className="slider-container">
                            <input
                                type="range"
                                min={1}
                                max={100}
                                defaultValue={50}
                                className="slider"
                                id="myRange"
                            />
                        </div>
                    </div>
                    <hr/>
                    <div className="popular">
                        Popular filters
                        <ul>
                            <li>One type of filter</li>
                            <li>Another type of filter</li>
                        </ul>
                    </div>
                    <hr/>
                    <div className="meals">
                        Meals
                        <ul>
                            <li>Buffet</li>
                            <li>Breakfast included</li>
                        </ul>
                    </div>
                    <hr/>
                    <div className="hotel-stars">
                        Hotel Stars
                        <ul className="star-filter">
                            <li/>
                            <li/>
                            <li/>
                            <li/>
                            <li/>
                        </ul>
                    </div>
                    <hr/>
                </div>
            </div>
            <div className="right">
                <div className="flex-container">
                    <div className="result">Results from Ålesund: 32 properties found</div>
                    <button className="sort-by">
                        Sort by
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                            width={20}
                            height={20}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                            />
                        </svg>
                    </button>
                </div>
                <div className="hotel-card">
                    <img
                        src={img2}
                        className="hotel-img"
                        height={200}
                        width={300}
                        alt="hotel 1"
                    />
                    <div className="hotel-info">
                        <div className="info-title">Villa GOATeid</div>
                        <div className="info-stars">★★★★★</div>
                        <div className="info-meal">Breakfast included</div>
                        <div className="info-price">NOK 4,200 night</div>
                    </div>
                    <div className="view-deal">

                    </div>
                </div>
                <div className="hotel-card">
                    <img
                        src={img3}
                        className="hotel-img"
                        height={200}
                        width={300}
                        alt="hotel 2"
                    />
                    <div className="hotel-info">
                        <div className="info-title">Hotel 2</div>
                        <div className="info-stars">★★★★★</div>
                        <div className="info-meal">Breakfast included</div>
                        <div className="info-price">NOK 5,999 night</div>
                    </div>
                    <div className="view-deal">
                        <NavLink to={"/hotel"}>
                            <button className="hotel-button">
                                View deal
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                    width={20}
                                    height={20}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </button>
                        </NavLink>
                    </div>
                </div>
                <div className="hotel-card">
                    <img
                        src={img3}
                        className="hotel-img"
                        height={200}
                        width={300}
                        alt="hotel 3"
                    />
                    <div className="hotel-info">
                        <div className="info-title">Urban Ålesund</div>
                        <div className="info-stars">★★★★★</div>
                        <div className="info-meal">Breakfast included</div>
                        <div className="info-price">NOK 3,999 night</div>
                    </div>
                    <div className="view-deal">
                        <NavLink to={"/hotel"}>
                                View deal
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                    width={20}
                                    height={20}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrowsePage;