/**
 * Component representing the navigation for the application
 * Code adapted from: https://github.com/strazdinsg/web-examples/blob/main/public_html/examples/react/15-react-jwt-auth/src/components/Navigation.js
 * @return {JSX.Element}
 * @constructor
 */
import {isAdmin} from "../tools/authentication";
import {Link} from "react-router-dom";

/**
 * Navigation component
 * @param props Properties, contains user and logoutFunction
 * @return {JSX.Element}
 * @constructor
 */
export function Navigation(props) {
    const user = props.user;

    const navigationItems = [
        {title: "Home", link: "/"},
        {title: "Hotels", link: "/hotels"}
    ];

    if (user) {
        if (isAdmin(user)) {
            navigationItems.push({ title: "Administration", link: "/admin"});
        }
        navigationItems.push({
            title: `Welcome, ${user.email}!`,
            link: "/profile",
        });
        navigationItems.push({
            title: "Logout",
            link: "",
            action: props.logoutFunction,
        });
    } else {
        navigationItems.push({ title: "Login", link: "/login"});
        navigationItems.push({ title: "Sign up", link: "/signup"});
    }

    const navigationLinks = [];
    for (let i = 0; i < navigationItems.length; ++i) {
        const navItem = navigationItems[i];
        let anchor;
        if (navItem.action) {
            anchor = (
                <button className="link" onClick={navItem.action}>
                    {navItem.title}
                </button>
            );
        } else {
            anchor = <Link to={navItem.link}>{navItem.title}</Link>
        }
        navigationLinks.push(<li key={i}>{anchor}</li>);
    }

    return (
        <nav>
            <ul className="navigation">{navigationLinks}</ul>
        </nav>
    );
}