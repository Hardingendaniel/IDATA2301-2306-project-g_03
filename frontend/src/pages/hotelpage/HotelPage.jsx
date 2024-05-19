import React, { useEffect, useRef, useState } from "react";
import map from '../../img/7652611.jpg';
import { useLocation, useParams } from "react-router-dom";

export function HotelPage() {
    const { id } = useParams();
    const location = useLocation();
    const [hotel, setHotel] = useState(location.state?.hotel || null);

    const sectionOverviewRef = useRef();
    const sectionRoomsRef = useRef();
    const sectionReviewsRef = useRef();
    const sectionAboutRef = useRef();
    const sectionLocationRef = useRef();

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

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
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

    return (
        <div className="flex w-4/5 flex-col mx-auto">
            {hotel ? (
                <>
                    <h1 className="font-bold py-2 text-4xl">{hotel.hotelName}</h1>
                    <div className="flex py-2 space-x-1">
                        {/* Render stars here */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-6 h-6 text-header">
                            <path fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749
                          2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373
                          21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273
                          -4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-6 h-6 text-header">
                            <path fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749
                          2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373
                          21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273
                          -4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-6 h-6 text-header">
                            <path fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749
                          2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373
                          21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273
                          -4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-6 h-6 text-header">
                            <path fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749
                          2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373
                          21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273
                          -4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-6 h-6 text-lightgrey">
                            <path fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749
                          2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373
                          21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273
                          -4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clipRule="evenodd" />
                        </svg>
                    </div>


                    <div className="container mx-auto items-center py-2">
                        <div className="md:grid md:grid-cols-6 md:grid-rows-2 grid-flow-col gap-2 md:h-72 h-full flex flex-col">
                            {hotelImages.map((image, index) => (
                                <div key={index} className={`md:col-span-${index === 0 ? 3 : 2} md:row-span-2 w-full transition-opacity hover:opacity-85`}>
                                    <img src={image} alt={`hotel${index + 1}`}
                                         className="rounded-2xl inset-0 h-full w-full object-cover object-center"
                                         onClick={() => document.getElementById(`image_modal${index + 1}`).showModal()} />
                                    <dialog id={`image_modal${index + 1}`} className="modal">
                                        <div className="modal-box w-11/12 max-w-5xl">
                                            <img src={image} alt={`Hotel${index + 1}`} className="w-full" />
                                        </div>
                                        <form method="dialog" className="modal-backdrop">
                                            <button>close</button>
                                        </form>
                                    </dialog>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`navbar sticky w-full bg-white border-lightgrey border-b ${stickyClass}`}>
                        <button className="btn btn-ghost text-xl rounded-2xl" onClick={() => scrollToSection(sectionOverviewRef)}>Overview</button>
                        <button className="btn btn-ghost text-xl rounded-2xl" onClick={() => scrollToSection(sectionRoomsRef)}>Rooms</button>
                        <button className="btn btn-ghost text-xl rounded-2xl" onClick={() => scrollToSection(sectionReviewsRef)}>Reviews</button>
                        <button className="btn btn-ghost text-xl rounded-2xl" onClick={() => scrollToSection(sectionAboutRef)}>About</button>
                        <button className="btn btn-ghost text-xl rounded-2xl" onClick={() => scrollToSection(sectionLocationRef)}>Location</button>
                    </div>
                    <div ref={sectionOverviewRef} className="flex flex-row pt-16">
                        <div className="divider"></div>
                        <div className="w-96 rounded-2xl p-2 m-2">
                            <p>{hotel.description}</p>
                        </div>
                        <div className="w-96 m-2 relative overflow-hidden flex items-center justify-center flex-col">
                            <img
                                src={map}
                                alt="map"
                                className="rounded-2xl object-cover"
                            />
                            <div
                                className="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                                <div className="btn bg-main roudned-2xl text-white font-bold text-xl hover:bg-header">Show on
                                    map
                                </div>
                            </div>
                        </div>
                        <div className="w-96 border rounded-2xl m-2">
                            <div className="flex bg-lightblue rounded-2xl w-full h-24 border">
                                <p className="text-2xl font-black m-auto items-center">
                                    NOK {hotel.price}
                                    <span className="font-normal text-font text-base">/night</span>
                                </p>
                                <div className="btn bg-main text-white rounded-2xl hover:bg-header m-auto items-center">Book
                                    now
                                </div>
                            </div>
                            <div className="font-semibold text-lg m-2">Selected:</div>
                            <div className="divider" />
                            <div className="flex flex-col px-2">
                                <div className="flex py-4">
                                    <h2 className="font-semibold pr-2">Hotel:</h2>
                                    <div>{hotel.hotelName}</div>
                                </div>
                                <div className="flex py-4">
                                    <h2 className="font-semibold pr-2">Start date:</h2>
                                    <div>"START DATE"</div>
                                </div>
                                <div className="flex py-4">
                                    <h2 className="font-semibold pr-2">End date:</h2>
                                    <div>"END DATE"</div>
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
                        <div className="flex justify-evenly">
                            <div className="rounded-2xl border p-2 w-72">
                                <h2 className="font-semibold">Review 1</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a mauris facilisis diam lacinia interdum. Aliquam ultrices quam quis viverra molestie. Vivamus ultricies diam id nulla tempor gravida.</p>
                            </div>
                            <div className="rounded-2xl border p-2 w-72">
                                <h2 className="font-semibold">Review 2</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a mauris facilisis diam lacinia interdum. Aliquam ultrices quam quis viverra molestie. Vivamus ultricies diam id nulla tempor gravida.</p>
                            </div>
                            <div className="rounded-2xl border p-2 w-72">
                                <h2 className="font-semibold">Review 3</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a mauris facilisis diam lacinia interdum. Aliquam ultrices quam quis viverra molestie. Vivamus ultricies diam id nulla tempor gravida.</p>
                            </div>
                        </div>
                    </div>

                    <div ref={sectionAboutRef} className="pt-10">
                        <div className="divider"></div>
                        <h1 className="text-2xl font-bold">About</h1>
                        <div className="">
                            Welcome to this hotel. Hope you enjoy yourself at your stay
                        </div>
                    </div>

                    <div ref={sectionLocationRef} className="pt-10">
                        <div className="divider"></div>
                        <h1 className="text-2xl font-bold">Location</h1>
                        <div className="w-96 m-2 relative overflow-hidden flex items-center justify-center flex-col">
                            <img
                                src={map}
                                alt="map"
                                className="rounded-2xl object-cover"
                            />
                            <div
                                className="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                                <div className="btn bg-main roudned-2xl text-white font-bold text-xl hover:bg-header">Show on
                                    map
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}
