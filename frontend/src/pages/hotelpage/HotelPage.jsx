import React, {useEffect, useState} from "react";
import scandic from '../../img/scandic.jpg';
import hotel1 from '../../img/hotel1.jpg';
import hotel3 from '../../img/hotel3.jpg';
import map from "../../img/7652611.jpg";

export function HotelPage() {
    const [hotelData, setHotelData] = useState([]);

    // Using fetch instead of axios atm.
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/hotels');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setHotelData(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData().catch(error => console.error('Failed to fetch data:', error));
    }, []);

    useEffect(() => {
        fetch('http://localhost:8080/api/hotels')
            .then(response => response.json())
            .then(data => setHotelData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="flex flex-col items-center w-4/5 mx-auto">
            <main className="my-4 w-4/5 mx-auto">
                <h1 className="text-4xl font-bold  my-4">{hotelData.map(hotel => (
                    <li key={hotel.id}>{hotel.name}</li>
                ))}

                </h1>
                <div className="text-yellow-400 text-xl ">★★★★☆</div>

                <div className="grid grid-cols-3 gap-4 my-4">
                    <div className="col-span-2">
                        <img src={scandic} alt="Hotel view" className="w-full h-auto rounded-lg"/>
                    </div>
                    <div className="space-y-4">
                        <img src={hotel1} alt="Hotel lobby" className="w-full h-auto rounded-lg"/>
                        <img src={hotel3} alt="Hotel room" className="w-full h-auto rounded-lg"/>
                    </div>
                </div>
                <div className="m-5 px-20 space-x-5 ">
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
                <div className="">
                    <hr className="solid"/>
                </div>

                <div className="flex flex-row">
                    <div className="card w-96 ">
                        <div className="card-body">
                            <h2 className="card-title text-neutral-950">Description</h2>
                            <p>Located in the heart of the mountains, Villa GoatEid offers luxury and comfort
                                with its stunning views and exceptional service.</p>

                        </div>
                    </div>
                    <div className="card w-96 bg-primary text-primary-content">
                        <div className="card-body">
                            <div className="relative overflow-hidden flex items-left justify-center flex-col">
                                <img
                                    src={map}
                                    alt="map"
                                    className="rounded-2sm object-cover"
                                />
                                <div
                                    className="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                                    <div className="btn bg-main text-white font-bold text-xl">Show on map</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 ">
                        <div className="card-body ">
                            <h2 className="card-title text-neutral-950">NOK 4,200 / Night</h2>
                            <div className="card-actions justify-end">
                                <button className="btn bg-main text-neutral-50 m-10 justify-center">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
