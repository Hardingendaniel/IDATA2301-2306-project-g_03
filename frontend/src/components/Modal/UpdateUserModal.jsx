import React, {useEffect, useState} from "react";
import {asyncApiRequest} from "../../tools/requests";

/**
 * Modal to change user details for the currently logged-in user.
 *
 * @param user the user to change its details
 * @returns {Element}
 * @constructor
 */
export function UpdateUserModal( {user}) {
    const [showModal, setShowModal] = useState(true)
    const [userInfo, setUserInfo] = useState(null)

    const [formData, setFormData] = useState({
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        email: user?.email || "",
        phoneNumber: user?.phoneNumber || "",
    });

    useEffect(() => {
        if (user) {
            setFormData({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phoneNumber: user.phoneNumber,
            })
        }
    }, [user]);


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const submitUpdateForm = async (e) => {
        e.preventDefault();
        console.log("Submitting form data: ", formData)
        try {
            const data = await asyncApiRequest("PUT", `/users/${user.email}`, formData);
            console.log("Response data: ", data);
            setUserInfo(data);
            setShowModal(false);
        } catch (error) {
            console.log("Error fetching user information");
        }
    }

    return (
        <div className={`modal-box ${showModal ? "" : "hidden"}`}>
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Change/Edit Hotel</h3>
            <div className="divider"></div>

            <form className="flex flex-col" onSubmit={submitUpdateForm}>
                <label className="input input-bordered rounded-2xl flex items-center my-4 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         className="w-4 h-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                    </svg>
                    <input type="text"
                           name="firstName"
                           value={formData.firstName}
                           onChange={handleInputChange}
                           className="grow" placeholder="New First Name"/>
                </label>
                <label className="input input-bordered rounded-2xl flex items-center my-4 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         className="w-4 h-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                    </svg>
                    <input className="grow"
                           type="text"
                           name="lastName"
                           value={formData.lastName}
                           onChange={handleInputChange}
                           placeholder="New Last Name"/>
                </label>
                <label className="input input-bordered rounded-2xl flex items-center my-4 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         className="w-4 h-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
                    </svg>
                    <input className="grow"
                           type="email"
                           name="email"
                           value={formData.email}
                           onChange={handleInputChange}
                           placeholder="New email"/>
                </label>
                <label className="input input-bordered rounded-2xl flex items-center my-4 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="w-4 h-4 opacity-70">
                        <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"/>
                        <path fillRule="evenodd"
                              d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
                              clipRule="evenodd"/>
                    </svg>
                    <input type="number"
                           name="phoneNumber"
                           value={formData.phoneNumber}
                           onChange={handleInputChange}
                           className="grow" placeholder="Phone Number"/>
                </label>
                <button type="submit"
                        className="btn bg-main font-bold text-lg text-white rounded-2xl hover:bg-header w-full my-4"
                >
                    Save Changes
                </button>
            </form>
        </div>

    )
}