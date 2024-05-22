import DatePicker from "react-datepicker";
import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

function SearchForm() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [location, setLocation] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [roomTypes, setRoomTypes] = useState([]);
    const [selectedRoomType, setSelectedRoomType] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const navigate = useNavigate();

    useEffect(() => {
        // Function to refresh local storage
        if (sessionStorage.getItem('isPageRefreshed')) {
            localStorage.clear();
            sessionStorage.removeItem('isPageRefreshed');
        }

        window.addEventListener('beforeunload', () => {
            sessionStorage.setItem('isPageRefreshed', 'true');
        });
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:8080/api/hotels");
                const hotelsData = await response.json();

                const uniqueLocations = Array.from(new Set(hotelsData.map(hotel => hotel.location)));
                setLocation(uniqueLocations);

                const uniqueRoomTypes = Array.from(new Set(hotelsData.flatMap(hotel => hotel.roomTypes)));
                setRoomTypes(uniqueRoomTypes);

            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        }

        fetchData();
    }, []);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!selectedLocation) {
            setErrorMessage('Select a location');
            return;
        }
        navigate("/browse", {
            state: {
                location: selectedLocation,
                roomType: selectedRoomType,
                startDate,
                endDate
            }
        });
    };

    useEffect(() => {
        const savedLocation = localStorage.getItem('selectedLocation');
        const savedRoomType = localStorage.getItem('selectedRoomType');
        const savedStartDate = localStorage.getItem('startDate');
        const savedEndDate = localStorage.getItem('endDate');

        if (savedLocation) setSelectedLocation(savedLocation);
        if (savedRoomType) setSelectedRoomType(savedRoomType);
        if (savedStartDate) setStartDate(new Date(savedStartDate));
        if (savedEndDate) setEndDate(new Date(savedEndDate));
    }, []);

    useEffect(() => {
        localStorage.setItem('selectedLocation', selectedLocation);
        localStorage.setItem('selectedRoomType', selectedRoomType);
        if (startDate) localStorage.setItem('startDate', startDate.toISOString());
        if (endDate) localStorage.setItem('endDate', endDate.toISOString());
    }, [selectedLocation, selectedRoomType, startDate, endDate]);

    useEffect(() => {
        if (selectedLocation) {
            setErrorMessage('');
        }
    }, [selectedLocation]);


    const handleStartDateChange = (date) => {
        setStartDate(date);
        // Automatically set endDate to one day after startDate
        const nextDay = new Date(date);
        nextDay.setDate(nextDay.getDate() + 1);
        setEndDate(nextDay);
    };


    return (
        <div className="w-full flex-col items-start">
        <form className="justify-center w-full" onSubmit={handleFormSubmit}>
            <div className="join w-full flex justify-center">
                <select
                    className='w-1/5 join-item rounded-s-2xl pl-2'
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                >
                    <option value="" style={{ display: 'none' }}>Where to?</option>
                    {location.map((loc, index) => (
                        <option key={index} value={loc}>{loc}</option>
                    ))}
                </select>

                <DatePicker
                    selected={startDate}
                    onChange={handleStartDateChange}
                    placeholderText="Check In Date"
                    className="custom-datepicker pl-2 join-item h-14 border-x 2xl:w-64 lg:w-40 md:w-24 w-14"
                    minDate={new Date()}
                />

                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    placeholderText="Check Out Date"
                    className="custom-datepicker pl-2 join-item h-14 border-x 2xl:w-64 lg:w-40 md:w-24 w-14"
                    minDate={startDate || new Date()}
                />

                <select
                    className='join-item w-1/5 pl-2'
                    value={selectedRoomType}
                    onChange={(e) => setSelectedRoomType(e.target.value)}
                >
                    <option value="" style={{ display: 'none' }}>Room type</option>
                    {roomTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>

                <button
                    type="submit"
                    className="btn join-item rounded-r-2xl bg-main text-white text-lg font-bold h-14 w-1/5 hover:bg-header"
                >
                    SEARCH
                </button>
            </div>

        </form>
            {errorMessage && (
                <div className= "pl-[25%] tooltip tooltip-open tooltip-bottom tooltip-error " data-tip={errorMessage}>
                </div>
            )}
        </div>
    );
}

export default SearchForm;
