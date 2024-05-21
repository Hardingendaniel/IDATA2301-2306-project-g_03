import React, { useEffect, useState } from "react";
import HotelTable from "./HotelTable";
import UserTable from "./UserTable";
import {asyncApiRequest} from "../../tools/requests";
import {useUser} from "../../UserContext";

function AdminPage() {
    const {user} = useUser();
    const [selectedTable, setSelectedTable] = useState('hotel');
    const [hotels, setHotels] = useState([]);
    const [users, setUsers] = useState(null);

    const handleTableChange = (table) => {
        setSelectedTable(table);
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await asyncApiRequest("GET", "/users");
                setUsers(userData);
            } catch (error) {
                console.log("Error fetching user information", error.message);
            }
        };

        const fetchHotelData = async () => {
            try {
                const hotelsData = await asyncApiRequest("GET", "/hotels");
                setHotels(hotelsData);
            } catch (error) {
                console.log("Error fetching hotel information", error.message);
            }
        }

        fetchHotelData();
        fetchUserData()
    }, []);

    return (
        <div className="flex">
            <aside className="flex flex-col w-44 bg-header">
                <nav className="flex flex-col justify-between text-white pt-5">
                    <button className="btn rounded-2xl btn-ghost text-xl w-full my-3"
                            onClick={() => handleTableChange('hotel')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"/>
                        </svg>
                        Hotels
                    </button>

                    <div className="btn rounded-2xl btn-ghost text-xl w-full my-3"
                         onClick={() => handleTableChange('user')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>
                        </svg>
                        Users
                    </div>

                </nav>
            </aside>

            <main className="flex flex-col w-full h-full">
                <div className="overflow-x-auto rounded-2xl w-full h-full pb-28">
                    {selectedTable === 'hotel' ? <HotelTable hotels={hotels} /> : <UserTable users={users}/>}
                </div>
            </main>
        </div>
    );
}

export default AdminPage;
