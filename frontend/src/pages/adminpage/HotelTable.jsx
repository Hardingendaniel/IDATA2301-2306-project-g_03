import React from "react";
import img1 from "../../img/hotel1/1.png";
import img2 from "../../img/hotel2/1.png";
// Import other images as necessary
import EditButton from "../../components/EditButton";

function HotelTable({ hotels }) {
    return (
        <table className="table table-lg">
            <caption className="p-5 text-2xl font-semibold text-left rtl:text-right text-font">
                Hotels
                <p className="mt-1 text-sm font-normal text-font">Manage your hotels and view their details.</p>
            </caption>
            {/* head */}
            <thead className="uppercase">
            <tr>
                <th></th>
                <th>Hotel name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Price</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {hotels.map((hotel, index) => (
                <tr key={index} className="hover:bg-tableHover">
                    <th>
                        <label>
                            <input type="checkbox" className="checkbox"/>
                        </label>
                    </th>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={img2}
                                         alt={`hotel${index + 1}`}/>
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{hotel.hotelName}</div>
                                <div className="text-sm opacity-50">{hotel.location}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        {hotel.description}
                        <br/>
                        <span className="badge badge-ghost badge-sm">{hotel.roomTypes}</span>
                    </td>
                    <td>
                        <span className="badge badge-ghost badge-md">Active</span>
                    </td>
                    <td>
                        {hotel.price}
                    </td>
                    <th>
                        <EditButton />
                    </th>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default HotelTable;
