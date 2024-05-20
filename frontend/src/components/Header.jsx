import React from "react";
import {NavLink} from "react-router-dom";
import {Login} from "./Modal/Login";
import {useUser} from "../UserContext";

const Header = () => {

    const {user, logout} = useUser();

    return (
        <div className="navbar bg-header">
            <div className="navbar-start">
                <NavLink to="/">
                    <div className="btn btn-ghost rounded-2xl text-xl font-bold text-white">
                        Stay Finder
                    </div>
                </NavLink>
            </div>
            <div className="navbar-center relative text-font mx-auto">
                {user?.roles.includes('ROLE_ADMIN') && (
                    <NavLink to="/admin">
                        <div className="btn btn-ghost rounded-2xl text-xl font-bold text-white">
                            Admin
                        </div>
                    </NavLink>
                )}
                {user?.roles.includes("ROLE_USER") && (
                    <NavLink to="/profile">
                        <div className="btn btn-ghost rounded-2xl text-xl font-bold text-white">
                            Profile
                        </div>
                    </NavLink>
                )}
            </div>

            <div className="navbar-end">
                <div className="">
                    {!user ? (
                        <Login/>
                    ) : (
                        <button onClick={logout} className="btn btn-ghost rounded-2xl text-xl font-bold text-white">
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Header;