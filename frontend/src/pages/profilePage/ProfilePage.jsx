import React, {useEffect, useState} from "react";
import {useUser} from "../../UserContext";
import {asyncApiRequest} from "../../tools/requests";
import {UpdateUserModal} from "../../components/Modal/UpdateUserModal";
import Favorites from "../../components/Favorites";
import Bookings from "../../components/Bookings";

function ProfilePage() {
    const {user} = useUser();
    const [userInfo, setUserInfo] = useState(null)
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [bookings, setBookings] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const data = await asyncApiRequest("GET", `/users/${user.email}`);
                setUserInfo(data);
            } catch (error) {
                console.log("Error fetching user information", error);
            }
        }

        const fetchBookingInfo = async () => {
            try {
                const bookings = await asyncApiRequest("GET", `/bookings/me`);
                setBookings(bookings);
            } catch (error) {
                console.log("Error fetching user information", error);
            }
        }

        const fetchFavoritesInfo = async () => {
            try {
                const favoritesData = await asyncApiRequest("GET", "/favorites");
                setFavorites(favoritesData)
            } catch (error) {
                console.log("Error while fetching favorites", error.message);
            }
        }

        if (user) {
            fetchUserInfo();
            fetchFavoritesInfo();
            fetchBookingInfo();
        }
    }, [user]);

    if (!userInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-page container mx-auto p-4">
            <div className="profile-info bg-white p-6 rounded-2xl border">
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

            <div className="mt-8 bg-white p-6 rounded-2xl border">
                <div className="">
                    <Bookings bookings={bookings}/>
                </div>

            </div>

            <div className="mt-8 bg-white p-6 rounded-2xl border">
                <div className="">
                    <Favorites favorites={favorites}/>
                </div>

            </div>
            <dialog id="update_user" className="modal" open={showUpdateModal}>
                <UpdateUserModal user={userInfo} showModal={showUpdateModal} setShowModal={setShowUpdateModal} />

            </dialog>
        </div>
    );
};

export default ProfilePage;