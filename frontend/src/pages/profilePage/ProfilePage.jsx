import React, {useEffect, useState} from "react";
import {useUser} from "../../UserContext";
import {asyncApiRequest} from "../../tools/requests";

function ProfilePage() {
    const { user } = useUser();
    const [userInfo, setUserInfo] = useState(null)

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
            <div className="profile-info bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
                <div className="flex items-center mb-4">
                    <div>
                        <h3 className="text-xl font-semibold">{userInfo.firstName}</h3>
                        <h3 className="text-xl font-semibold">{userInfo.lastName}</h3>
                        <p className="text-gray-600">{userInfo.email}</p>
                        <p className="text-gray-600">{userInfo.phoneNumber}</p>
                        <button className="btn bg-main mt-2 text-white">Edit Profile</button>
                    </div>
                </div>
            </div>

            <div className="bookings mt-8">

            </div>
        </div>
    );
};

export default ProfilePage;