import React from "react";

function UserTable() {
    return (
        <table className="table table-lg">
            <caption
                className="p-5 text-2xl font-semibold text-left rtl:text-right text-font">
                Users
                <p className="mt-1 text-sm font-normal text-font">Manage your users
                    and view their details.</p>
            </caption>
            {/* head */}
            <thead className="uppercase">
            <tr>
                <th></th>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Password</th>
                <th>Role</th>
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-12 h-12">
                                    <path fillRule="evenodd"
                                          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">1</div>
                        </div>
                    </div>
                </td>
                <td>
                    Chuck Norris
                </td>
                <td>
                    Chuck_Norris@stay-finder.com
                </td>
                <td>
                    +47 999 88 777
                </td>
                <td>
                    Nunchucks!79
                </td>
                <td>
                    <span className="badge badge-ghost badge-md">Admin</span>
                </td>
                <td>
                    <button className="btn btn-ghost btn-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                        </svg>
                    </button>
                </td>
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-12 h-12 text-main">
                                    <path fillRule="evenodd"
                                          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">2</div>
                        </div>
                    </div>
                </td>
                <td>
                    John Doe
                </td>
                <td>
                    john.doe@gmail.com
                </td>
                <td>
                    +47 123 45 678
                </td>
                <td>
                    johnDoeIsCool
                </td>
                <td>
                    <span className="badge badge-ghost badge-md">User</span>
                </td>
                <td>
                    <button className="btn btn-ghost btn-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                        </svg>
                    </button>
                </td>
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-12 h-12 text-font">
                                    <path fillRule="evenodd"
                                          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">3</div>
                        </div>
                    </div>
                </td>
                <td>
                    Sander Grimstad
                </td>
                <td>
                    sander.grimstad00@gmail.com
                </td>
                <td>
                    +47 986 28 486
                </td>
                <td>
                    DetteErEtPassord123!
                </td>
                <td>
                    <span className="badge badge-ghost badge-md">Admin</span>
                </td>
                <td>
                    <button className="btn btn-ghost btn-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                        </svg>
                    </button>
                </td>
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-12 h-12 text-main">
                                    <path fillRule="evenodd"
                                          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">4</div>
                        </div>
                    </div>
                </td>
                <td>
                    Daniel Kjøsi Eikås
                </td>
                <td>
                    daniea@stud.ntnu.no
                </td>
                <td>
                    +47 999 88 777
                </td>
                <td>
                    DanielPassord6969!
                </td>
                <td>
                    <span className="badge badge-ghost badge-md">User</span>
                </td>
                <td>
                    <button className="btn btn-ghost btn-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                        </svg>
                    </button>
                </td>
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-12 h-12">
                                    <path fillRule="evenodd"
                                          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">5</div>
                        </div>
                    </div>
                </td>
                <td>
                    Sten "The Rock" Halse
                </td>
                <td>
                    therock@sten.no
                </td>
                <td>
                    +47 987 65 432
                </td>
                <td>
                    stenTheRockHalse123!
                </td>
                <td>
                    <span className="badge badge-ghost badge-md">User</span>
                </td>
                <td>
                    <button className="btn btn-ghost btn-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                        </svg>
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    )
}

export default UserTable;