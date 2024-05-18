import DatePicker from "react-datepicker";
import React, {useEffect, useState} from "react";
import "react-datepicker/dist/react-datepicker.css";

function SearchForm() {


    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [location, setLocation] = useState('');
    const [locationSelected, setLocationSelected] = useState(false);
    const [roomTypes, setRoomTypes] = useState('');


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:8080/api/hotels");
                const hotelsData = await response.json();
                const uniqueLocations = Array.from(new Set(hotelsData.map(location => location.location)));
                // Create an array of objects with unique location types
                uniqueLocations.sort();
                const uniqueLocationData = uniqueLocations.map(location => {
                    return hotelsData.find(item => item.location === location);
                });
                setLocation(uniqueLocationData);

                const roomTypesResponse = await fetch("http://localhost:8080/api/hotels");
                const roomTypesData = await roomTypesResponse.json();
                const uniqueRoomTypes = Array.from(new Set(roomTypesData.map(roomTypes => roomTypes.roomTypes)));
                // Create an array to remove duolicates
                const uniqueRoomTypesData = uniqueRoomTypes.map(roomTypes => {
                    return roomTypesData.find(item => item.roomTypes === roomTypes);
                })
                setRoomTypes(uniqueRoomTypesData);

            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        }

        fetchData();
    }, []);

    const handleLocationChange = (event) => {
        const selectedLocation = event.target.value;
        setLocationSelected(selectedLocation !== '');
    };

    const handleFormSubmit = (event) => {
        if (!locationSelected) {
            event.preventDefault();
            alert('Please select a location in "where to?"');
        } else {
            event.target.action ="/browse";
        }
    }

    return (

        <form action="/browse" className="justify-center w-11/12 lg:w-11/12 mb-8" method="GET"
              onSubmit={handleFormSubmit}
        >
            <div className="join w-full flex justify-center">
                <select className='w-1/5 join-item rounded-s-2xl'
                        onChange={handleLocationChange}
                >
                    <option value="" style={{display: 'none'}}>Where to?</option>
                    {location
                        ? location.map((location) => {
                            return <option key={location.id} value={location.id}>{location.location}</option>;
                        })
                        :null}
                </select>

                <DatePicker
                    selected={startDate} onChange={(date) => {
                    setStartDate(date);
                    if (date && (!endDate || date >= startDate)){
                        const nextDay = new Date(date);
                        nextDay.setDate(nextDay.getDate() + 1);
                        setEndDate(nextDay);
                    }
                }}
                    placeholderText="Check In Date"
                    className="custom-datepicker join-item h-14"
                    minDate ={new Date()}
                />

                <DatePicker
                    selected={endDate} onChange={(date) => setEndDate(date)}
                    placeholderText="Check Out Date"
                    className="custom-datepicker join-item h-14"
                    minDate = {startDate || new Date()}
                    startDate ={startDate}
                />


                <select className='join-item w-1/5'
                >
                    <option value="" style={{display: 'none'}}>Room type</option>
                    {roomTypes
                        ? roomTypes.map((roomTypes) => {
                            return <option key={roomTypes.id} value={roomTypes.id}>{roomTypes.roomTypes}</option>;
                        })
                        :null}
                </select>

                <button
                    className="btn join-item rounded-r-2xl bg-main text-white text-lg font-bold h-14 w-1/5 hover:bg-header"
                >
                    SEARCH
                </button>
            </div>
        </form>

    );
}
export default SearchForm;