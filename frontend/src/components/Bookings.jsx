import React from "react";

function Bookings({bookings}) {
    return (
        <table className="table table-lg">
            <caption className="p-5 text-2xl font-semibold text-left rtl:text-right text-font">
                <div className="flex">
                    <div>
                        Your Bookings
                        <p className="mt-1 text-sm font-normal text-font">View your bokings and view their
                            details.</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className=" text-main my-auto w-12 h-12">
                        <path
                            d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"/>
                    </svg>
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
                                <div className="font-medium">{booking.firstName} {booking.lastName}</div>
                                <div className="text-sm opacity-50">{booking.email}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center gap-3">
                            <div>
                                <div className="font-medium">{booking.hotelName}</div>
                                <div className="text-sm opacity-50">{booking.location}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className={booking.startDate}></div>
                    </td>
                    <td>
                        <div className={booking.endDate}></div>
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