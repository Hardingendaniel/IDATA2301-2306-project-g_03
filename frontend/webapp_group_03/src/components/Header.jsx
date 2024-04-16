import React, {useState} from "react";
import ModalOpener from "./Modal/Modal";
import {NavLink} from "react-router-dom";


function Header() {

    const [location, setLocation] = new useState('');
    const [searchButtonDisabled, setSearchButtonDisabled] = new useState(true);

    //to be worked on
    function suggestionClick(e) {
        setLocation(e.target.value)
        if(!(location === '')){
          setSearchButtonDisabled(true);
        }
    }

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <NavLink to="/">
                        <button className="logo-button">Stay Finder</button>
                    </NavLink>
                </div>
                <div className="search-bar">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                        width={30}
                        height={30}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                    <input type="search" id="header-search" placeholder="search"/>
                </div>
                <div className="button">
                    <ModalOpener/>
                </div>
            </div>
            <form action="/search" className="form" method="GET">

                <select className='form-input'
                    value={location}
                    onChange={(e) => suggestionClick(e)}
                >
                    <option value="" style={{display: 'none'}}>Where to?</option>
                    <option value="Ålesund">Ålesund</option>
                    <option value="Trondheim">Trondheim</option>
                    <option value="Oslo">Oslo</option>
                </select>

                <input
                    type="text"
                    className="form-input"
                    name="check-in"
                    id="check-in"
                    onfocus="(this.type='date')"
                    onblur="(this.type='text')"
                    placeholder="Check in date"
                />
                <input
                    type="text"
                    className="form-input"
                    name="check-out"
                    id="check-out"
                    onfocus="(this.type='date')"
                    onblur="(this.type='text')"
                    placeholder="Check out date"
                />
                <input
                    type="text"
                    className="form-input"
                    name="rooms"
                    id="rooms"
                    placeholder="Number of Rooms (min: 1)"
                />
                <NavLink to={"/browse"}>
                    <button
                        type="button"
                        className="btn py-custom align-text-bottom"
                        name="search_button"
                        id="search_button"
                    >
                        SEARCH
                    </button>
                </NavLink>
            </form>
        </header>
    )
}

export default Header;