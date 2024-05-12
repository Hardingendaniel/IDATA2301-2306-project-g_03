import React, {useEffect, useRef, useState} from "react";
import img1 from "../../img/hotel1/1.png"
import img2 from "../../img/hotel1/2.png"
import img3 from "../../img/hotel1/3.png"
import img4 from "../../img/hotel1/4.png"
import img5 from "../../img/hotel1/5.png"
import map from '../../img/7652611.jpg'

export function HotelPage2() {
    const sectionOverviewRef = useRef();
    const sectionRoomsRef = useRef();
    const sectionReviewsRef = useRef();
    const sectionAboutRef = useRef();
    const sectionLocationRef = useRef();

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth'});
    }


    const [stickyClass, setStickyClass] = useState('relative');

    const stickNavbar = () => {
        const windowHeight = window.scrollY;
        if (windowHeight > 500) {
            setStickyClass('fixed top-0 left-0 z-50');
        } else {
            setStickyClass('relative');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    return (
        <div className="flex w-4/5 flex-col mx-auto">
            <h1 className="font-bold py-2 text-4xl">Villa Gåseid</h1>
            <div className="flex py-2 space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                     className="w-6 h-6 text-header">
                    <path fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                     className="w-6 h-6 text-header">
                    <path fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                     className="w-6 h-6 text-header">
                    <path fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                     className="w-6 h-6 text-header">
                    <path fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                     className="w-6 h-6 text-lightgrey">
                    <path fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"/>
                </svg>
            </div>


            <div className="contailer mx-auto items-center py-2">
                <div className="grid grid-cols-6 grid-rows-2 grid-flow-col gap-2 h-72">
                    <div className="col-span-3 row-span-2 w-full">
                        <img src={img1} alt="hotel1"
                             className="rounded-2xl inset-0 h-full w-full object-cover object-center"/>
                    </div>
                    <div className="row-span-2 col-start-4 w-full">
                        <img src={img3} alt="hotel2"
                             className="rounded-2xl inset-0 h-full w-full object-cover object-center"/>
                    </div>
                    <div className="col-span-2 col-start-5 w-full">
                        <img src={img2} alt="hotel3"
                             className="rounded-2xl inset-0 h-full w-full object-cover object-center"/>
                    </div>
                    <div className="col-start-5 row-start-2 w-full">
                        <img src={img4} alt="hotel4"
                             className="rounded-2xl inset-0 h-full w-full object-cover object-center"/>
                    </div>
                    <div className="col-start-6 row-start-2 w-full">
                        <img src={img5} alt="hotel5"
                             className="rounded-2xl inset-0 h-full w-full object-cover object-center"/>
                    </div>
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
                <button className="btn btn-ghost text-xl rounded-2xl"
                        onClick={() => scrollToSection(sectionLocationRef)}>Location
                </button>
            </div>
            <div ref={sectionOverviewRef} className="flex flex-row pt-16">
                <div className="divider"></div>
                <div className="w-96 rounded-2xl p-2 m-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a mauris facilisis diam lacinia
                        interdum. Aliquam ultrices quam quis viverra molestie. Vivamus ultricies diam id nulla tempor
                        gravida.</p>
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
                    <div className="bg-header rounded-2xl w-full h-24 border">
                        <p className="text-2xl font-black text-gray-800">
                            NOK 4,200
                            <span className="font-normal text-font text-base">/night</span>
                        </p>
                    </div>
                    <div>Selected:</div>
                </div>
            </div>

            <div ref={sectionRoomsRef} className="pt-10">
                <div className="divider"></div>
                <h1 className="text-2xl font-bold">Rooms</h1>
                <div className="">
                    Family
                </div>
            </div>

            <div ref={sectionReviewsRef} className="pt-10">
                <div className="divider"></div>
                <h1 className="text-2xl font-bold">Reviews</h1>
                <div className="">
                    THis is a review
                </div>
            </div>

            <div ref={sectionAboutRef} className="pt-10">
                <div className="divider"></div>
                <h1 className="text-2xl font-bold">About</h1>
                <div className="">
                    This is the description of the room
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

        </div>
    );
}