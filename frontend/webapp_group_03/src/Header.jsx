import React from "react";

function Header() {
    <header>
        <div className={'container'}>
            <div className="logo">
                <a href="Website.html">
                    <button className="logo-button">Stay Finder</button>
                </a>
            </div>
            <div className="search-bar">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-6 h-6" width="30" height="30">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                </svg>
                <input type="search" id="header-search" placeholder="search"/>
            </div>

            <div className="button">
                <p>Login</p>
                <button className="signInButton">Sign Up</button>
            </div>
        </div>
        <form action="/search" className="form" method="GET">
            <input list="places" type="text" className="form-input" name="destination" id="destination"
                   placeholder="Where to?" onClick="suggestionClick"/>
            <datalist id="places">
                <option>Ålesund</option>
                <option>Oslo</option>
                <option>Trondheim</option>
                <option>Bergen</option>
            </datalist>
            <input type="text" className="form-input" name="check-in" id="check-in" onFocus="(this.type='date')"
                   onBlur="(this.type='text')" placeholder="Check in date"/>
            <input type="text" className="form-input" name="check-out" id="check-out" onFocus="(this.type='date')"
                   onBlur="(this.type='text')" placeholder="Check out date"/>
            <input type="text" className="form-input" name="rooms" id="rooms" placeholder="Number of Rooms (min: 1)"/>
            <button type="button" className="form-input" name="search_button" id="search_button">SEARCH</button>
        </form>
    </header>
}