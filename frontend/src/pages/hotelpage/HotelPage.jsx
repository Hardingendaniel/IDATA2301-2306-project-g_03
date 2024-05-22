import React, {useEffect, useRef, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import DatePicker from "react-datepicker";
import {useUser} from "../../UserContext";
import PropTypes from 'prop-types';
import {asyncApiRequest} from "../../tools/requests";
import StarRating from '../../components/StarRating';
import {getCookie} from "../../tools/cookies";
import ToggleFavorites from "../../components/buttons/ToggleFavorites";


export function HotelPage() {
    const {id} = useParams();
    const location = useLocation();
    const [hotel, setHotel] = useState(location.state?.hotel || null);
    const {user, logout} = useUser();
    const sectionOverviewRef = useRef();
    const sectionRoomsRef = useRef();
    const sectionReviewsRef = useRef();
    const sectionAboutRef = useRef();
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [bookingInfo, setBookingInfo] = useState();
    const [totalPrice, setTotalPrice] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleStartDateChange = (date) => {
        setStartDate(date);
        // Automatically set endDate to one day after startDate
        const nextDay = new Date(date);
        nextDay.setDate(nextDay.getDate() + 1);
        setEndDate(nextDay);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    useEffect(() => {
        async function fetchHotel() {
            try {
                const response = await fetch(`http://localhost:8080/api/hotels/${id}`);
                const data = await response.json();
                setHotel(data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        }



        fetchHotel();
    }, [id]);

    useEffect(() => {
        const fetchFavoriteStatus = async () => {
            try {
                const response = await asyncApiRequest("GET", `/favorites/${id}`);
                setIsFavorite(!isFavorite)
            } catch (error) {
                console.log("An error occurred while fetching the favorites status", error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchFavoriteStatus();
    }, [id])


    useEffect(() => {
        // Retrieve data from localStorage
        const savedStartDate = localStorage.getItem('startDate');
        const savedEndDate = localStorage.getItem('endDate');

        if (savedStartDate) setStartDate(new Date(savedStartDate));
        if (savedEndDate) setEndDate(new Date(savedEndDate));
    }, []);


    const calculateTotalPrice = () => {
        let totalPrice = 0;
        if (startDate && endDate) {
            const oneDay = 24 * 60 * 60 * 1000;
            const days = Math.round(Math.abs(endDate - startDate) / oneDay);
            totalPrice = days * hotel.price;
        }
        return totalPrice;
    }

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth'});
    };

    const [stickyClass, setStickyClass] = useState('relative');

    const stickNavbar = () => {
        const windowHeight = window.scrollY;
        if (windowHeight > 500) {
            setStickyClass('fixed top-0 left-0 z-50');
        } else {
            setStickyClass('relative');
        }
    };

    const getHotelImages = (hotelId) => {
        const images = [];
        for (let i = 1; i <= 5; i++) {
            try {
                images.push(require(`../../img/hotel${hotelId}/${i}.png`));
            } catch (err) {
                console.error(`Error loading image ${i} for hotel ${hotelId}`, err);
            }
        }
        return images;
    };

    const hotelImages = hotel ? getHotelImages(id) : [];

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const handleBooking = async () => {

        if (!user?.roles.includes("ROLE_USER")) {
            alert('Please log in to book now.');
            return;
        }

        if (!startDate || !endDate) {
            alert('Please select start and end dates for your booking.');
            return;
        }

        const bookingData = {

            startDate: startDate.toISOString().split('T')[0],
            endDate: endDate.toISOString().split('T')[0],
            hotelId: id
        };

        const headers = {
            'Content-Type': 'application/json',
        };

        const jwtToken = getCookie("jwt");
        if (jwtToken) {
            headers["Authorization"] = "Bearer " + jwtToken;
        }


        try {
            const response = await fetch(`http://localhost:8080/api/bookings/${id}`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(bookingData),
            });

            if (response.ok) {
                alert('Booking successful!');
            } else {
                const responseData = await response.json();
                console.error('Booking failed:', responseData);
                alert(`Booking failed`);
            }
        } catch (error) {
            console.error('Failed to book the hotel:', error);
            alert('Booking failed due to a network error.');
        }
    };

    if (loading) {
        return <div>loading</div>;
    }

    return (
        <div className="flex w-4/5 flex-col mx-auto">
            {hotel ? (
                <>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col">
                            <h1 className="font-bold py-2 text-4xl">{hotel.hotelName}</h1>
                            <div className="flex py-2 space-x-1">
                                <div className="hotel">
                                    <StarRating rating={hotel.rating}/>
                                </div>
                            </div>
                        </div>

                        <ToggleFavorites id={id}/>
                    </div>

                    <div className="container mx-auto items-center py-2">
                        <div
                            className="md:grid md:grid-cols-6 md:grid-rows-2 grid-flow-col gap-2 md:h-72 h-full flex flex-col">
                            <div className="md:col-span-3 md:row-span-2 w-full transition-opacity hover:opacity-85">
                                <img src={hotelImages[0]} alt="hotel1"
                                     className="rounded-2xl inset-0 h-full w-full object-cover object-center"
                                     onClick={() => document.getElementById('image_modal1').showModal()}/>
                            </div>
                            <dialog id="image_modal1" className="modal">
                                <div className="modal-box w-11/12 max-w-5xl">
                                    <img src={hotelImages[0]} alt={"Hotel1"}
                                         className="w-full"/>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>

                            <div className="md:row-span-2 md:col-start-4 w-full transition-opacity hover:opacity-85">
                                <img src={hotelImages[2]} alt="hotel2"
                                     className="rounded-2xl inset-0 h-full w-full object-cover object-center"
                                     onClick={() => document.getElementById('image_modal2').showModal()}/>
                            </div>
                            <dialog id="image_modal2" className="modal">
                                <div className="modal-box w-11/12 max-w-5xl">
                                    <img src={hotelImages[2]} alt={"Hotel2"}
                                         className="w-full"/>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>

                            <div className="md:col-span-2 md:col-start-5 w-full transition-opacity hover:opacity-85">
                                <img src={hotelImages[1]} alt="hotel3"
                                     className="rounded-2xl inset-0 h-full w-full object-cover object-center"
                                     onClick={() => document.getElementById('image_modal3').showModal()}/>
                            </div>
                            <dialog id="image_modal3" className="modal">
                                <div className="modal-box w-11/12 max-w-5xl">
                                    <img src={hotelImages[1]} alt={"Hotel3"}
                                         className="w-full"/>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>

                            <div className="md:col-start-5 md:row-start-2 w-full transition-opacity hover:opacity-85">
                                <img src={hotelImages[3]} alt="hotel4"
                                     className="rounded-2xl inset-0 h-full w-full object-cover object-center"
                                     onClick={() => document.getElementById('image_modal4').showModal()}/>
                            </div>
                            <dialog id="image_modal4" className="modal">
                                <div className="modal-box w-11/12 max-w-5xl">
                                    <img src={hotelImages[3]} alt={"Hotel4"}
                                         className="w-full"/>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>

                            <div className="md:col-start-6 md:row-start-2 w-full transition-opacity hover:opacity-85">
                                <img src={hotelImages[4]} alt="hotel5"
                                     className="rounded-2xl inset-0 h-full w-full object-cover object-center"
                                     onClick={() => document.getElementById('image_modal5').showModal()}/>
                            </div>
                            <dialog id="image_modal5" className="modal">
                                <div className="modal-box w-11/12 max-w-5xl">
                                    <img src={hotelImages[4]} alt={"Hotel5"}
                                         className="w-full"/>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>
                    </div>

                    <div className={`navbar sticky w-full bg-white border-lightgrey border-b ${stickyClass}`}>
                        <button className="btn btn-ghost text-xl rounded-2xl"
                                onClick={() => scrollToSection(sectionOverviewRef)}>Overview
                        </button>
                        <button className="btn btn-ghost text-xl rounded-2xl"
                                onClick={() => scrollToSection(sectionRoomsRef)}>Rooms
                        </button>
                        <button className="btn btn-ghost text-xl rounded-2xl"
                                onClick={() => scrollToSection(sectionReviewsRef)}>Reviews
                        </button>
                        <button className="btn btn-ghost text-xl rounded-2xl"
                                onClick={() => scrollToSection(sectionAboutRef)}>About
                        </button>
                    </div>
                    <div ref={sectionOverviewRef} className="flex flex-row justify-between pt-16">
                        <div className="w-96 rounded-2xl p-2 pl-6">
                            <p className="font-normal text-lg">{hotel.description}</p>
                        </div>
                        <div className="w-96 border rounded-2xl">
                            <div className="flex bg-lightblue rounded-2xl w-full h-24 border">
                                <div className="flex flex-col m-auto">
                                    <p className="text-2xl font-black m-auto items-center">
                                        NOK {hotel.price}
                                        <span className="font-normal text-font text-base">/night</span>
                                    </p>
                                    <div className=" font-semibold">{hotel.providers}</div>
                                </div>
                                <div className="btn bg-main text-white rounded-2xl hover:bg-header m-auto items-center"
                                     onClick={handleBooking}>Book
                                    now
                                </div>
                            </div>

                            <div className="flex flex-col px-2">
                                <div className="flex py-4">
                                    <h2 className="font-semibold pr-2">Hotel:</h2>
                                    <div>{hotel.hotelName}</div>
                                </div>
                                <div className="flex items-center py-4">
                                    <h2 className="font-semibold pr-5">Start date:</h2>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={handleStartDateChange}
                                        placeholderText="Check In Date"
                                        className="custom-datepicker join-item h-14"
                                        minDate={new Date()}
                                    />
                                </div>
                                <div className="flex items-center py-4">
                                    <h2 className="font-semibold pr-5">End date:</h2>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={handleEndDateChange}
                                        placeholderText="Check Out Date"
                                        className="custom-datepicker join-item h-14"
                                        minDate={startDate || new Date()}
                                    />
                                </div>
                                <div className="flex items-center py-4">
                                    <h2 className="font-semibold pr-5">Total Price/NOK:</h2>
                                    <div>{calculateTotalPrice()}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={sectionRoomsRef} className="pt-10">
                        <div className="divider"></div>
                        <h1 className="text-2xl font-bold">Rooms</h1>
                        <div className="">
                            {hotel.roomType}
                        </div>
                    </div>

                    <div ref={sectionReviewsRef} className="pt-10">
                        <div className="divider"></div>
                        <h1 className="text-2xl font-bold">Reviews</h1>
                        <div className="">
                            {hotel.review}
                        </div>
                    </div>

                    <div ref={sectionAboutRef} className="pt-10">
                        <div className="divider"></div>
                        <h1 className="text-2xl font-bold">About</h1>
                        <div className="pb-6">
                            Welcome to this hotel. Hope you enjoy yourself at your stay
                        </div>
                    </div>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

HotelPage.propTypes = {
    hotel: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};