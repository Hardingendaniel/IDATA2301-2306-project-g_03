import React, { useEffect, useState } from "react";
import Gjovik from "../../img/Gjøvik.jpg"
import Aalesund from "../../img/Ålesund.jpg";
import Oslo from "../../img/Oslo.jpg"
import Trondheim from "../../img/Trondheim.jpg"
import Stryn from "../../img/Stryn.jpg"
import SearchForm from "../../components/SearchForm";
import { useNavigate } from "react-router-dom";
import {useUser} from "../../UserContext";
import StarRating from "../../components/StarRating";

function Frontpage() {

    const [data1, setData1] = useState([]);
    const [locationCounts, setLocationCounts] = useState([]);
    const navigate = useNavigate();
    const {loggedIn} = useUser();

    useEffect(() => {
        if (loggedIn) {
         fetchData();
        }


        async function fetchData() {
            try {
                const response = await fetch( process.env.REACT_APP_BASE_URL + "/hotels");
                const data = await response.json();
                setData1(data);

                const counts = data.reduce((acc, hotel) => {
                    const location = hotel.location || "Unknown";
                    acc[location] = (acc[location] || 0) + 1;
                    return acc;
                }, {});
                setLocationCounts(counts);

            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        }
        fetchData();
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleCards = () => {
        const totalCards = data1.length;
        const indexes = [
            currentIndex % totalCards,
            (currentIndex + 1) % totalCards,
            (currentIndex + 2) % totalCards,
        ];

        return indexes.map(index => data1[index]);
    };

    const handleChange = (location) => {
        navigate("/browse", {
            state: {
                location: location
            }
        });
    };

    const handleCard = (hotel) => {
        if (hotel && hotel.id) {
            navigate(`/hotel/${hotel.id}`, {
                state: {
                    hotel: hotel
                }
            });
        }
    };

    const getHotelImages = (hotelId) => {
        const images = [];
        const totalHotels = 10;  // Number of unique hotel image sets
        const actualHotelId = ((hotelId - 1) % totalHotels) + 1;  // Map hotelId to available image sets

        for (let i = 1; i <= 1; i++) {  // Assuming only 1 image per hotel as in the original code
            try {
                images.push(require(`../../img/hotel${actualHotelId}/${i}.png`));
            } catch (err) {
                console.error(`Error loading image ${i} for hotel ${actualHotelId}`, err);
            }
        }

        return images;
    };

    return (
        <div>
            <div className="static navbar lg:h-72  bg-header flex flex-col lg:items-center">
                <div className="hidden lg:flex flex-col text-white h-48 w-1/2">
                    <div className="my-2 text-4xl font-bold">Welcome to Stay Finder</div>
                    <div className="items-center text-center mt-8 text-2xl font-bold">Your premier destination for discovering the most exceptional accommodation deals</div>
                </div>
                <div className="navbar h-14 flex flex-col">
                    <SearchForm />
                </div>
            </div>

            <main className="flex flex-col w-4/5 mx-auto">
                <h2 className="mt-4 text-center text text-2xl">Get the best experience with Stay Finder</h2>
                <div className="flex justify-evenly relative">
                    {visibleCards().map((hotel, index) => (
                        hotel && hotel.id && (
                            <button key={index} className="card" onClick={() => handleCard(hotel)}>
                                {getHotelImages(hotel.id).map((image, imgIndex) => (
                                    <img key={imgIndex} src={image} alt={`Hotel ${index + 1}`}
                                         className="w-full h-48 object-cover rounded-t-2xl"/>
                                ))}
                                <div className="text-center p-4">
                                    <h3 className="text-lg font-semibold">{hotel ? hotel.hotelName : ""}</h3>
                                    <p className="text-lg  text-header">{hotel ? hotel.providers : ""}</p>
                                    <p className="text-lg font-light">{hotel ? hotel.description : ""}</p>
                                        <h2>{hotel.name}</h2>
                                    <div className="flex justify-center">
                                        <StarRating rating={hotel.rating} />
                                    </div>
                                </div>
                            </button>
                        )
                    ))}

                    <button
                        id="Shuffle_reviews"
                        className="shuffle col-span-1"
                        onClick={() => setCurrentIndex(currentIndex + 1)}
                    >
                        <span className="arrow"/>
                    </button>
                    <button
                        id="Shuffle_reviews2"
                        className="shuffle2 col-span-1"
                        onClick={() => setCurrentIndex(currentIndex - 1)}
                        style={{display: currentIndex === 0 ? 'none' : 'block'}}
                    >
                        <span className="arrow2"/>
                    </button>
                </div>

                <div className="">
                    <h3 className="mt-4 text-center text-2xl">Popular travel destinations</h3>
                    <div className="mt-4 mb-4">
                        <div className="flex lg:flex-row flex-col lg:justify-between items-center mx-2 ">
                            {["Ålesund", "Gjøvik", "Oslo", "Trondheim", "Stryn"].map((location, index) => (
                                <button onClick={() => handleChange(location)} key={index} className="">
                                    <img
                                        src={
                                            location === "Ålesund" ? Aalesund :
                                                location === "Gjøvik" ? Gjovik :
                                                    location === "Oslo" ? Oslo :
                                                        location === "Trondheim" ? Trondheim :
                                                            Stryn
                                        }
                                        alt={location} className="w-44 h-44 object-cover rounded-2xl"/>
                                    <p className="text-center text-2xl">{location}</p>
                                    <p className="text-center font-light">
                                        {locationCounts[location] || 0} {locationCounts[location] === 1 ? "destination" : "destinations"}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="mt-4 text-center text text-2xl"> About Stay Finder?</h4>
                </div>
                <div className="w-3/4 md:w-1/2 mx-auto mb-8 mt-4 text-center text-lg text-gray-800">
                    <p className="mb-4">
                        Welcome to our platform! Our mission is to simplify your search for the best accommodation prices and options.
                    </p>
                    <p className="mb-4">
                        We achieve this by curating a selection of unique properties from trusted websites, all in one user-friendly platform.
                    </p>
                    <p className="mb-4">
                        Save time and compare prices side-by-side with us, ensuring you get great value every time you book.
                    </p>
                </div>
            </main>

        </div>
    );
}

export default Frontpage;
