import React from "react";
import map from '../../img/7652611.jpg'
import ProductCard from "../../components/ProductCard";
import img1 from '../../img/hotel1.jpg'
import img2 from '../../img/hotel2.jpg'
import img3 from '../../img/hotel3.jpg'
import {NavLink} from "react-router-dom";

const BrowsePage = () => {
    return (
        <div className="">

            <div className="static navbar h-16 bg-header flex flex-col">

                <form action="/browse" className="absolute top-24 flex h-20 justify-center  w-4/5 mb-8" method="GET">
                    <div className="join w-full flex">
                        <input className="input input-bordered join-item h-14 bg-inputField" placeholder="Where to?"/>
                        <input className="input input-bordered join-item h-14 bg-inputField" placeholder="Start date"/>
                        <input className="input input-bordered join-item h-14 bg-inputField" placeholder="End date"/>
                        <input className="input input-bordered join-item h-14 bg-inputField" placeholder="Rooms"/>

                        <button
                            className="btn join-item rounded-r-2xl bg-main text-white text-lg font-bold h-14 w-1/5">SEARCH
                        </button>
                    </div>
                </form>
            </div>

            <div className=" flex justify-center w-4/5 mx-auto pt-20">
                <div className="drawer lg:drawer-open flex basis-1/4">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2"
                               className="btn bg-main text-white font-bold drawer-button lg:hidden">
                            Show filter
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="p-4 w-80 min-h-full text-base-content">
                            {/* Sidebar content here */}

                            <div className="text-sm breadcrumbs text-main">
                                <ul>
                                    <li>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li><a>Country</a></li>
                                    <li><a>State</a></li>
                                    <li>City</li>
                                </ul>
                            </div>

                            <div className="relative overflow-hidden flex items-center justify-center flex-col">
                                <img
                                    src={map}
                                    alt="map"
                                    className="rounded-2xl object-cover"
                                />
                                <div
                                    className="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                                    <div className="btn bg-main text-white font-bold text-xl">Show on map</div>
                                </div>
                            </div>

                            <div className="flex flex-col w-full py-10">

                                <div className="">
                                    <h2 className="text-2xl font-bold mb-4">Range Slider</h2>
                                    <div className="mb-4">
                                        <label form="price-range" className="block text-gray-700 font-bold mb-2">Price
                                            Range</label>
                                        <input type="range" id="price-range" className="w-full accent-main"
                                               min="0" max="1000" value="500" oninput="updatePrice(this.value)"/>
                                    </div>
                                    <div className="flex justify-between text-gray-500">
                                        <span id="minPrice">NOK 0</span>
                                        <span id="maxPrice">NOK 1000</span>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className="">
                                    <p>First Filter:</p>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Filter one</span>
                                            <input type="radio" name="radio-10" className="radio checked:bg-main"
                                                   checked/>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Filter two</span>
                                            <input type="radio" name="radio-10" className="radio checked:bg-main"
                                                   checked/>
                                        </label>
                                    </div>
                                </div>

                                <div className="divider"></div>
                                <div className="">
                                    <p>Meals:</p>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Buffet</span>
                                            <input type="radio" name="radio-10" className="radio checked:bg-main"
                                                   checked/>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Breakfast included</span>
                                            <input type="radio" name="radio-10" className="radio checked:bg-main"
                                                   checked/>
                                        </label>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className="">
                                    <p>Star rating:</p>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-main"/>
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-main"
                                               checked/>
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-main"/>
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-main"/>
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-main"/>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className="">Filter 4</div>
                                <div className="divider"></div>
                            </div>
                        </ul>
                    </div>
                </div>


                <div className="basis-3/4 px-4 py-4">
                    <div>
                        <h2 className="text-font">Results from Ålesund: 40 properties found</h2>
                        <button className="btn">
                            Sort by
                            <div className="badge">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"/>
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div className="flex flex-col justify-center ">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrowsePage;