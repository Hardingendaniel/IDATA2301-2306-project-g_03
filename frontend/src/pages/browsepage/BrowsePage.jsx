import React, {useEffect, useState} from "react";
import ProductCard from "../../components/ProductCard";
import SearchForm from "../../components/SearchForm";
import { useLocation} from "react-router-dom";

const BrowsePage = () => {

    const [data4, setData4] = useState([]);
    const locationState = useLocation().state;


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(process.env.REACT_APP_BASE_URL + "/hotels");
                const data = await response.json();

                setData4(data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        }
        fetchData();
    }, []);

    const filteredHotels = data4.filter(hotel => {
        return (
            (!locationState.location || hotel.location === locationState.location) &&
            (!locationState.roomType || hotel.roomTypes.includes(locationState.roomType))
        );
    });

    const [currentIndex, setCurrentIndex] = useState(0);

    // Calculate and update the visible cards based on the current index
    // Also ensures this function only returns cards when properly populated
    //TODO make the filter fill up the empty left side, when there is a lot of cards
    const visibleCards = () => {
        if (filteredHotels.length === 0) return [];
        const totalCards = filteredHotels.length;
        const maxVisibleCards = Math.min(10, totalCards);
        const indexes = Array.from({ length: maxVisibleCards }, (_, i) => (currentIndex + i) % totalCards);
        return indexes.map(index => filteredHotels[index]);
    };

    return (
        <div className="">
            <div className="navbar h-20 bg-header flex flex-col">
                <SearchForm/>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-3/4 mx-auto">
                <aside className="flex flex-col w-64 py-4">
                    <div className="flex flex-col w-full py-2 px-2 my-4 border rounded-2xl ">
                        <div className="text-lg font-bold">Filter by</div>
                        <div className="divider"></div>
                        <div>
                            <h3 className="font-semibold text-base mx-1 mb-1">Search hotel:</h3>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" className="grow" placeholder="Search"/>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                     className="w-4 h-4 opacity-70">
                                    <path fillRule="evenodd"
                                          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                          clipRule="evenodd"/>
                                </svg>
                            </label>
                        </div>
                        <div className="divider"></div>
                        <div className="">
                            <h3 className="font-semibold text-base mx-1 mb-1">Providers:</h3>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Select Provider</option>
                                <option>Booking.com</option>
                                <option>Agoda</option>
                                <option>Momondo</option>
                                <option>Airbnb</option>
                                <option>Kayak</option>
                                <option>Hotels.com</option>
                                <option>Tripadvisor</option>
                                <option>Trip.com</option>
                            </select>
                        </div>

                        <div className="divider"></div>

                        <div className="">
                            <h3 className="font-semibold text-base mx-1 mb-1">Location:</h3>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Select Location</option>
                                <option>Alta</option>
                                <option>Gjøvik</option>
                                <option>Oslo</option>
                                <option>Stryn</option>
                                <option>Bergen</option>
                                <option>Ålesund</option>
                            </select>
                        </div>

                        <div className="divider"></div>

                        <div className="">
                            <h3 className="font-semibold text-base mx-1 mb-1">Room types:</h3>
                            <div className="grid grid-cols-2 mx-1 my-2">
                                Single
                                <input type="checkbox" className="accent-main rounded-2xl"/>
                            </div>
                            <div className="grid grid-cols-2 mx-1 my-2">
                                Double
                                <input type="checkbox" className="accent-main rounded-2xl"/>
                            </div>
                            <div className="grid grid-cols-2 mx-1 my-2">
                                Family
                                <input type="checkbox" className="accent-main rounded-2xl"/>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="">
                            <h3 className="font-semibold text-base mx-1 mb-1">Star rating:</h3>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-main"/>
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-main"
                                       checked/>
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-main"/>
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-main"/>
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-main"/>
                            </div>
                        </div>
                    </div>
                </aside>

                <div className="basis-3/4 col-span-2 px-4 py-4">
                    <div>
                        <h2 className="text-font font-semibold">Results from {locationState.location}: {filteredHotels.length || 0} {filteredHotels.length === 1 ? "property" : "properties"} found</h2>

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
                                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-2xl w-52">
                                <li><a>Recommended</a></li>
                                <li><a>Star Rating</a></li>
                                <li><a>Price - Low to High</a></li>
                                <li><a>Price - High to Low</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center ">
                        {visibleCards().map((hotel, index) => (
                            <ProductCard key={index} hotel={hotel} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrowsePage;