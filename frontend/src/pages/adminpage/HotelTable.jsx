import React from "react";
import img1 from "../../img/hotel1/1.png";
import img2 from "../../img/hotel2/1.png";
import img3 from "../../img/hotel3/2.png";
import img4 from "../../img/hotel4/2.png";
import img5 from "../../img/hotel1/4.png";
import img6 from "../../img/hotel2/4.png";
import img7 from "../../img/hotel3/4.png";
import img8 from "../../img/hotel4/4.png";
import img9 from "../../img/hotel2/3.png";
import img10 from "../../img/hotel1/5.png";
import EditButton from "../../components/EditButton";

function HotelTable() {
    return (
        <table className="table table-lg">
            <caption
                className="p-5 text-2xl font-semibold text-left rtl:text-right text-font">
                Hotels
                <p className="mt-1 text-sm font-normal text-font">Manage your hotels
                    and view their details.</p>
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
            {/* row 1 */}
            <tr className="hover:bg-tableHover">
                <th>
                    <label>
                        <input type="checkbox" className="checkbox"/>
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img1}
                                     alt="hotel1"/>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Villa Gåseid</div>
                            <div className="text-sm opacity-50">Ålesund</div>
                        </div>
                    </div>
                </td>
                <td>
                    This is a description 1
                    <br/>
                    <span className="badge badge-ghost badge-sm">Single room</span>
                </td>
                <td>
                    <span className="badge badge-ghost badge-md">Active</span>
                </td>
                <td>
                    NOK 4.200
                </td>
                <th>
                    <EditButton />
                </th>
            </tr>
            {/* row 2 */}
            <tr className="hover:bg-tableHover">
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
                                     alt="hotel2"/>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Hotel Trondheim</div>
                            <div className="text-sm opacity-50">Trondheim</div>
                        </div>
                    </div>
                </td>
                <td>
                    This is a description 2
                    <br/>
                    <span className="badge badge-ghost badge-sm">Family room</span>
                </td>
                <td>
                    <span className="badge badge-ghost badge-md">Active</span>
                </td>
                <td>
                    NOK 6.900
                </td>
                <th>
                    <EditButton />
                </th>
            </tr>
            {/* row 3 */}
            <tr className="hover:bg-tableHover">
                <th>
                    <label>
                        <input type="checkbox" className="checkbox"/>
                    </label>
                </th>
                <td>
                <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img3}
                                     alt="hotel3"/>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Totens Fineste</div>
                            <div className="text-sm opacity-50">Gjøvik</div>
                        </div>
                    </div>
                </td>
                <td>
                    This is a description 3
                    <br/>
                    <span className="badge badge-ghost badge-sm">Single room</span>
                </td>
                <td>
                    <span className="badge badge-ghost badge-md">Active</span>
                </td>
                <td>
                    NOK 3.999
                </td>
                <th>
                    <EditButton />
                </th>
            </tr>
            {/* row 4 */}
            <tr className="hover:bg-tableHover">
                <th>
                    <label>
                        <input type="checkbox" className="checkbox"/>
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img4}
                                     alt="hotel4"/>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Scandic Alta</div>
                            <div className="text-sm opacity-50">Alta</div>
                        </div>
                    </div>
                </td>
                <td>
                    This is a description 4
                    <br/>
                    <span className="badge badge-ghost badge-sm">Double room</span>
                </td>
                <td>
                    <span className="badge badge-ghost badge-md">Inactive</span>
                </td>
                <td>
                    NOK 5.200
                </td>
                <th>
                    <EditButton />
                </th>
            </tr>
            {/* row 5 */}
            <tr className="hover:bg-tableHover">
                <th>
                    <label>
                        <input type="checkbox" className="checkbox"/>
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img5}
                                     alt="hotel5"/>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Slotsgata Hotel</div>
                            <div className="text-sm opacity-50">Oslo</div>
                        </div>
                    </div>
                </td>
                <td>
                    This is a description 5
                    <br/>
                    <span className="badge badge-ghost badge-sm">Double room</span>
                </td>
                <td>
                    <span className="badge badge-ghost badge-md">Active</span>
                </td>
                <td>
                    NOK 7.500
                </td>
                <th>
                    <EditButton />
                </th>
            </tr>
            {/* row 6 */}
            <tr className="hover:bg-tableHover">
                <th>
                    <label>
                        <input type="checkbox" className="checkbox"/>
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img6}
                                     alt="hotel6"/>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Jugend Hotel</div>
                            <div className="text-sm opacity-50">Ålesund</div>
                        </div>
                    </div>
                </td>
                <td>
                    This is a description 6
                    <br/>
                    <span className="badge badge-ghost badge-sm">Single</span>
                </td>
                <td>
                    <span className="badge badge-ghost badge-md">Inactive</span>
                </td>
                <td>
                    NOK 5.800
                </td>
                <th>
                    <EditButton />
                </th>
            </tr>
            {/* row 7 */}
            <tr className="hover:bg-tableHover">
                <th>
                    <label>
                        <input type="checkbox" className="checkbox"/>
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img7}
                                     alt="hotel7"/>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Stryns Fineste</div>
                            <div className="text-sm opacity-50">Stryn</div>
                        </div>
                    </div>
                </td>
                <td>
                    This is a description 7
                    <br/>
                    <span className="badge badge-ghost badge-sm">Family room</span>
                </td>
                <td>
                    <span className="badge badge-ghost badge-md">Active</span>
                </td>
                <td>
                    NOK 2.500
                </td>
                <th>
                    <EditButton />
                </th>
            </tr>
            {/* row 8 */}
            <tr className="hover:bg-tableHover">
                <th>
                    <label>
                        <input type="checkbox" className="checkbox"/>
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img8}
                                     alt="hotel8"/>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Molde Hotel</div>
                            <div className="text-sm opacity-50">Molde</div>
                        </div>
                    </div>
                </td>
                <td>
                    This is a description 8
                    <br/>
                    <span className="badge badge-ghost badge-sm">Double room</span>
                </td>
                <td>
                    <span className="badge badge-ghost badge-md">Inactive</span>
                </td>
                <td>
                    NOK 6.500
                </td>
                <th>
                    <EditButton />
                </th>
            </tr>
            {/* row 9 */}
            <tr className="hover:bg-tableHover">
                <th>
                    <label>
                        <input type="checkbox" className="checkbox"/>
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img9}
                                     alt="hotel9"/>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Gløshaugen Hotel</div>
                            <div className="text-sm opacity-50">Trondheim</div>
                        </div>
                    </div>
                </td>
                <td>
                    This is a description 9
                    <br/>
                    <span className="badge badge-ghost badge-sm">Single</span>
                </td>
                <td>
                    <span className="badge badge-ghost badge-md">Active</span>
                </td>
                <td>
                    NOK 4.800
                </td>
                <th>
                    <EditButton />
                </th>
            </tr>
            {/* row 10 */}
            <tr className="hover:bg-tableHover">
                <th>
                    <label>
                        <input type="checkbox" className="checkbox"/>
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img10}
                                     alt="hotel10"/>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Stavanger Hotel</div>
                            <div className="text-sm opacity-50">Stavanger</div>
                        </div>
                    </div>
                </td>
                <td>
                    This is a description 10
                    <br/>
                    <span className="badge badge-ghost badge-sm">Double</span>
                </td>
                <td>
                    <span className="badge badge-ghost badge-md">Inactive</span>
                </td>
                <td>
                    NOK 6.200
                </td>
                <th>
                    <EditButton />
                </th>
            </tr>
            </tbody>
        </table>
    )
}

export default HotelTable;