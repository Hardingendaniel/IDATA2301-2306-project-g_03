import React from "react";
import {NavLink} from "react-router-dom";

const Header2 = () => {
    return (
        <div className="navbar bg-header">
            <div className="navbar-start">
                <NavLink to="/">
                    <a className="btn btn-ghost rounded-2xl text-xl font-bold text-white">
                        Stay Finder
                    </a>
                </NavLink>
            </div>
            <div className="navbar-center relative text-font mx-auto">
                <input type="search" placeholder="Search"
                       className="input input-bordered rounded-2xl px-5 pr-16 focus:outline-none w-full max-w-xs"/>
                <button type="submit" className="btn btn-ghost absolute right-0 top-0 text-main rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                    </svg>
                </button>
            </div>

            <div className="navbar-end">
                <NavLink to="/">
                    <a className="btn btn-ghost rounded-2xl text-xl font-bold text-white">
                        Log in
                    </a>
                </NavLink>
            </div>
        </div>
    );
}
export default Header2;