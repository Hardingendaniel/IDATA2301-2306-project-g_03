import React from "react";

function Bookings({bookings}) {

    if (!bookings || bookings.length === 0) {
        return <div>No bookings found.</div>;
    }

    return (
        <table className="table table-lg">
            <caption className="p-5 text-2xl font-semibold text-left rtl:text-right text-font">
                <div className="flex">
                    <div>
                        Your Bookings
                        <p className="mt-1 text-sm font-normal text-font">View your bookings and view their
                            details.</p>
                    </div>
                </div>

            </caption>
            {/* head */}
            <thead className="uppercase">
            <tr>
                <th>Customer</th>
                <th>Hotel</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Amount</th>
            </tr>
            </thead>
            <tbody>
            {bookings.map((booking, index) => (
                <tr key={index} className="hover:bg-tableHover">
                    <td>
                        <div className="flex items-center gap-3">
                            <div>
                                <div className="font-medium">{booking.firstName}</div>
                                <div className="text-sm opacity-50">{booking.email}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center gap-3">
                            <div>
                                <div className="font-medium">{booking.hotelName ? booking.hotelName : "Not set"}</div>
                                <div className="text-sm opacity-50">{booking.location ? booking.location : "Not set"}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div>{booking.startDate ? booking.startDate : "Not Set"}</div>
                    </td>
                    <td>
                        <div>{booking.endDate ? booking.endDate : "Not Set"}</div>
                    </td>
                    <td>
                        <div className="text-sm opacity-50">NOK {booking.price} /night</div>
                        <div className="font-medium">NOK {booking.totalPrice}</div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Bookings;