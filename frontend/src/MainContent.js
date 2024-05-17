import {Route, Routes} from "react-router-dom";
import Frontpage from "./pages/frontpage/Frontpage";
import {HotelPage} from "./pages/hotelpage/HotelPage";
import BrowsePage from "./pages/browsepage/BrowsePage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import AdminPage from "./pages/adminpage/AdminPage"

/**
 * Represents the main content of the page
 * @return {JSX.Element}
 * @constructor
 */
export function MainContent(props) {
    const email = props.user ? props.user.email : null;
    return (
        <main>
            <Routes>
                <Route path="/" element={<Frontpage/>}/>
                <Route path="/browse" element={<BrowsePage/>}/>
                <Route path="/hotel/:id" element={<HotelPage/>}/>
                <Route path="/profile" element={<ProfilePage email={email} />} />
                <Route path="/admin" element={<AdminPage/>}/>
            </Routes>
        </main>
    );
}