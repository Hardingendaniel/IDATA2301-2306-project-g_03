import React from "react";
import map from '../../img/7652611.jpg'
import {NavLink} from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import SearchForm from "../../components/SearchForm";

const BrowsePage = () => {
    return (
        <div className="">
            <div className="navbar h-20 bg-header flex flex-col">
                <SearchForm/>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-4/5 mx-auto">
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
                            <div className="relative overflow-hidden flex items-center justify-center flex-col">
                                <img
                                    src={map}
                                    alt="map"
                                    className="rounded-2xl object-cover"
                                />
                                <div
                                    className="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                                    <div className="btn bg-main text-white font-bold text-xl hover:bg-header">Show on
                                        map
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-full py-10">

                                <div className="">
                                    <div className="mb-4">
                                        <label form="price-range" className="block text-gray-700 font-bold mb-2">Price
                                            Range</label>
                                        <input type="range" id="price-range" className="w-full accent-main"
                                               min="0" max="1000" value="500" onInput="updatePrice(this.value)"/>
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
                
                <div className="basis-3/4 col-span-2 px-4 py-4">
                    <div>
                        <h2 className="text-font font-semibold">Results from Ålesund: 40 properties found</h2>

                        <div className="dropdown dropdown-bottom">
                            <div tabIndex={0} role="button"
                                 className="btn m-1 bg-white text-font font-medium rounded-2xl">
                                Sort by
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"/>
                                </svg>
                            </div>
                            <ul tabIndex={0}
                                className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-2xl w-52">
                                <li><a>Recommended</a></li>
                                <li><a>Star Rating</a></li>
                                <li><a>Price - Low to High</a></li>
                                <li><a>Price - High to Low</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center ">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrowsePage;