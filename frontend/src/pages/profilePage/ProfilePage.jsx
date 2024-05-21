import React, {useEffect, useState} from "react";
import {useUser} from "../../UserContext";
import {asyncApiRequest} from "../../tools/requests";
import {UpdateUserModal} from "../../components/Modal/UpdateUserModal";

function ProfilePage() {
    const {user} = useUser();
    const [userInfo, setUserInfo] = useState(null)
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const data = await asyncApiRequest("GET", `/users/${user.email}`);
                setUserInfo(data);
            } catch (error) {
                console.log("Error fetching user information", error);
            }
        }

        if (user) {
            fetchUserInfo();
        }
    }, [user]);

    if (!userInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-page container mx-auto p-4">
            <div className="profile-info bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
                <div className="flex items-center mb-4">
                    <div>
                        <div className="flex">
                            <div className="text-xl font-semibold">Name:</div>
                            <h3 className="text-xl px-2">{userInfo.firstName} {userInfo.lastName}</h3>
                        </div>
                        <div className="flex">
                            <div className="text-xl font-semibold">Email:</div>
                            <p className="text-xl px-2">{userInfo.email}</p>
                        </div>
                        <div className="flex">
                            <div className="text-xl font-semibold">Phone number:</div>
                            <p className="text-xl px-2">{userInfo.phoneNumber}</p>
                        </div>

                        <button type="button" className="btn bg-main mt-2 font-bold rounded-2xl text-white hover:bg-header"
                                onClick={() => {
                                    setShowUpdateModal(true);
                                }}
                        >Edit Profile</button>
                    </div>
                </div>
            </div>

            <div className="bookings mt-8 bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
                <div className="">Booking 1</div>
                <div className="">Booking 2</div>
                <div className="">Booking 3</div>
                <div className="">Booking 4</div>

            </div>

            <div className="bookings mt-8 bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold mb-4">Favourites</h2>
                <div className="">Booking 1</div>
                <div className="">Booking 2</div>
                <div className="">Booking 3</div>
                <div className="">Booking 4</div>

            </div>
            <dialog id="update_user" className="modal" open={showUpdateModal}>
                <UpdateUserModal user={userInfo} showModal={showUpdateModal} setShowModal={setShowUpdateModal} />

            </dialog>
        </div>
    );
};

export default ProfilePage;