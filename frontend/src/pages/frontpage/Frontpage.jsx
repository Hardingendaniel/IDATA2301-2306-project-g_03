import React, { useEffect, useState } from "react";
import logo from "../../img/hotel1.jpg";
import logo2 from "../../img/hotel2.jpg";
import logo3 from "../../img/hotel3.jpg";
import Aalesund from "../../img/Ålesund.jpg";
import Bergen from "../../img/Bergen.jpg";
import SearchForm from "../../components/SearchForm";
import { useNavigate } from "react-router-dom";

function Frontpage() {
    const StarRating = ({ rating }) => {
        const getStars = (rating) => {
            const maxStars = 6; // ensure this matches your max rating logic
            return '★'.repeat(rating) + '☆'.repeat(maxStars - rating);
        };

        return (
            <p className="text-lg font-semibold text-main">
                {getStars(rating)}
            </p>
        );
    };

    const [data1, setData1] = useState([]);
    const [locationCounts, setLocationCounts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:8080/api/hotels");
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
        for (let i = 1; i <= 1; i++) {
            try {
                images.push(require(`../../img/hotel${hotelId}/${i}.png`));
            } catch (err) {
                console.error(`Error loading image ${i} for hotel ${hotelId}`, err);
            }
        }
        return images;
    };

    return (
        <div>
            <div className="static navbar h-48 bg-header flex flex-col">
                <div className="flex flex-col text-white text-2xl font-bold">
                    <p>Welcome to Stay Finder, your </p>
                    <p>premier destination for discovering</p>
                    <p>the most exceptional accommodation deals</p>
                </div>

                <div className="static navbar h-14 bg-header flex flex-col">
                    <SearchForm />
                </div>
            </div>

            <h2 className="mt-4 text-center text text-2xl">Get the best experience with Stay Finder</h2>
            <div className="flex justify-evenly relative w-4-5 mr-[10%] ml-[10%]">
                {visibleCards().map((hotel, index) => (
                    hotel && hotel.id && (
                        <button key={index} className="card" onClick={() => handleCard(hotel)}>
                            {getHotelImages(hotel.id).map((image, imgIndex) => (
                                <img key={imgIndex} src={image} alt={`Hotel ${index + 1}`} className="w-full h-48 object-cover rounded-t-2xl" />
                            ))}
                            <div className="text-center p-4">
                                <h3 className="text-lg font-semibold">{hotel ? hotel.hotelName : ""}</h3>
                                <p className="text-lg font-light">{hotel ? hotel.description : ""}</p>
                                <StarRating rating={hotel ? hotel.rating : 0} />
                            </div>
                        </button>
                    )
                ))}

                <button
                    id="Shuffle_reviews"
                    className="shuffle col-span-1"
                    onClick={() => setCurrentIndex(currentIndex + 1)}
                >
                    <span className="arrow" />
                </button>
                <button
                    id="Shuffle_reviews2"
                    className="shuffle2 col-span-1"
                    onClick={() => setCurrentIndex(currentIndex - 1)}
                    style={{ display: currentIndex === 0 ? 'none' : 'block' }}
                >
                    <span className="arrow2" />
                </button>
            </div>

            <div className="w-5-6">
                <h3 className="mt-4 text-center text text-2xl">Popular travel destinations</h3>
                <div className="mt-4 mb-4">
                    <div className="flex justify-around ml-28 mr-28">
                        {["Ålesund", "Gjøvik", "Oslo", "Trondheim", "Stryn"].map((location, index) => (
                            <button onClick={() => handleChange(location)} key={index} className="">
                                <img
                                    src={
                                        location === "Ålesund" ? Aalesund :
                                            location === "Gjøvik" ? Bergen :
                                                location === "Oslo" ? logo3 :
                                                    location === "Trondheim" ? logo :
                                                        logo2
                                    }
                                    alt={location} className="w-44 h-44 object-cover rounded-2xl" />
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
                <h4 className="mt-4 text-center text text-2xl"> Why choose stay Finder?</h4>
            </div>

            <div className="flex justify-around ml-[10%] mr-[10%] mb-4 mt-4">
                <div className="box-border border w-1/3"></div>
                <div className="box-border border w-1/3 text-center">TO BE STYLED</div>
                <div className="box-border border w-1/3"></div>
            </div>
        </div>
    );
}

export default Frontpage;
