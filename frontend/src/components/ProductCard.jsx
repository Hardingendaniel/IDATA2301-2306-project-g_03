import React, {useEffect, useState} from "react";
import img1 from "../img/hotel1/1.png";
import {NavLink} from "react-router-dom";
import StarRating from "./StarRating";

const ProductCard = ({hotel}) => {

    return (
            <div
                className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 border rounded-2xl max-w-xs md:max-w-4xl mx-auto bg-white my-3">
                <div className="w-full md:w-1/3 grid place-items-center">
                    <img
                        src={img1}
                        alt="hotel 1"
                        className="md:rounded-l-2xl rounded-t-2xl h-full"/>
                </div>
                <div className="w-full md:w-2/3 flex flex-col space-y-2 p-3">
                    <div className="flex justify-between item-center">

                    </div>
                        <h3 className="font-black text-gray-800 md:text-3xl text-xl">{hotel ? hotel.hotelName : ""}</h3>

                    <div className="hotel">
                        <h2>{hotel.name}</h2>
                        <StarRating rating={hotel.rating} />
                    </div>

                    <div className="badge bg-header p-3 text-white text-base">{hotel ? hotel.roomTypes : ""}</div>
                    <div className="flex item-center justify-between mt-3">
                        <div className=" font-semibold my-auto">{hotel.providers}</div>
                        <p className="text-xl font-black my-auto text-gray-800">
                            NOK {hotel ? hotel.price : ""}
                            <span className="font-normal text-font text-base">/night</span>
                        </p>

                        <NavLink to={{
                            pathname: `/hotel/${hotel.id}`,
                            state: {hotel}
                        }}>
                            <div className="btn text-white font-bold rounded-2xl bg-main hover:bg-header">View deal
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                                </svg>

                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>

    )
}
export default ProductCard;