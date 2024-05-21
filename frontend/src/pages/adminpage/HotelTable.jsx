import React from "react";
import EditHotelButton from "../../components/buttons/EditHotelButton";

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
                <th>Hotel ID</th>
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
                    <th></th>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="font-bold">{hotel.id}</div>
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center gap-3">
                            <div>
                                <div className="font-medium">{hotel.hotelName}</div>
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
                        <span className={`badge badge-md ${
                            hotel.active ? 'badge-success text-white' : 'badge-error text-white'
                        }`}>
                            {String(hotel.active)}</span>
                    </td>
                    <td>
                        NOK {hotel.price}
                    </td>
                    <th>
                        <EditHotelButton hotelId={hotel.id} initialStatus={hotel.active}/>
                    </th>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default HotelTable;
