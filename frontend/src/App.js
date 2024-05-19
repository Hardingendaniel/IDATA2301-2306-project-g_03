import './App.css';
import './pages/frontpage/FrontPage.css'
import Footer from "./components/Footer";
import Header from "./components/Header";
import './pages/frontpage/FrontPage.css'
import React, {useEffect, useState} from "react";
import {MainContent} from "./MainContent";
import {BrowserRouter as Router} from "react-router-dom";
import {
    deleteAuthorizationCookies,
    getAuthenticatedUser,
} from "./tools/authentication";
import ScrollToTop from "./components/ScrollToTop";
import {UserProvider} from "./UserContext";

/**
 * A component representing the whole application
 * @return {JSX.Element}
 * @constructor
 */
export function App() {
    const [user, setUser] = useState(null);

    useEffect(tryRestoreUserSession);
    return (
        <Router>
            <UserProvider>
                <ScrollToTop />
                <Header/>
                <MainContent/>
                <Footer/>
            </UserProvider>
        </Router>
    );

    /**
     * Perform user logout
     */
    function doLogout() {
        console.log("Logout");
        deleteAuthorizationCookies();
        setUser(null);
    }

    /**
     * Check cookies - is user logged in? If so, set the user from cookies
     */
    function tryRestoreUserSession() {
        if (!user) {
            const loggedInUser = getAuthenticatedUser();
            if (loggedInUser) {
                console.log("User session found in cookies, restoring");
                setUser(loggedInUser);
            }
        }
    }
}