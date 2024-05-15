import React, {useEffect, useState} from "react";
import img1 from "../img/hotel1/1.png";
import {NavLink} from "react-router-dom";

const ProductCard = ({hotel}) => {
    //const {name, description, price} = hotel;

    const [data4, setData4] = useState([]);

    // Fetch data for cards
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:8080/api/hotels/4    ");
                const data = await response.json();
                setData4(data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        }
        fetchData();
    }, []);

    // Track the current index of the shown card
    const [currentIndex, setCurrentIndex] = useState(0);

    // Calculate and update the visible cards based on the current index
    const visibleCards = () => {
        const totalCards = data4.length;
        const indexes = [
            currentIndex % totalCards,
            (currentIndex + 1) % totalCards,
            (currentIndex + 2) % totalCards,
        ];

        return indexes.map(index => data4[index]);
    };

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
                    <h3 className="font-black text-gray-800 md:text-3xl text-xl">{data4.hotelName}</h3>

                    <div className="flex space-x-1">
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

                    <div className="badge bg-header p-3 text-white text-base">{data4.roomType}</div>
                    <div className="flex item-center justify-between mt-3">
                        <p className="text-xl font-black text-gray-800">
                            NOK {data4.price}
                            <span className="font-normal text-font text-base">/night</span>
                        </p>
                        <NavLink to="/hotel">
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