import DatePicker from "react-datepicker";
import React, {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";

function SearchForm() {


    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [location, setLocation] = useState('');
    const [searchButtonDisabled, setSearchButtonDisabled] = useState(true);

    const searchNames = ['Ålesund', 'Gjøkvik', 'Oslo',
        'Stryn', 'Trondheim', 'ALta'];

    //to be worked on
    function suggestionClick(e) {
        setLocation(e.target.value)
        if (location !== '') {
            setSearchButtonDisabled(true);
        }
    }

    return (

        <form action="/browse" className="absolute justify-center  w-4/5 mb-8" method="GET">
            <div className="join w-full flex ">

                <select className='w-1/4 rounded-s-2xl'
                        value={location}
                        onChange={(e) => suggestionClick(e)}
                >
                    <option value="" style={{display: 'none'}}>Where to?</option>
                    <option value="Ålesund">Ålesund</option>
                    <option value="Trondheim">Trondheim</option>
                    <option value="GJØKVIK">GJØKVIK</option>
                    <option value="ALTA">ALTA</option>
                    <option value="Sten">Sten</option>
                </select>

                <div className='flex  w-1/5'>

                    <DatePicker
                        selected={startDate} onChange={(date) => setStartDate(date)}
                        placeholderText="Check In Date"
                        className="custom-datepicker"
                    />

                </div>

                <div className='flex w-1/5'>

                    <DatePicker
                        selected={endDate} onChange={(date) => setEndDate(date)}
                        placeholderText="Check Out Date"
                        className="custom-datepicker"
                    />

                </div>

                <select className=' w-1/5'
                >
                    <option value="" style={{display: 'none'}}>Number of Rooms</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>

                <button
                    className="btn join-item rounded-r-2xl bg-main text-white text-lg font-bold h-14 w-1/5">SEARCH
                </button>
            </div>
        </form>

    );


}

export default SearchForm;