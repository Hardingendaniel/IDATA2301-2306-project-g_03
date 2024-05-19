import {Navigate, Route, Routes} from "react-router-dom";
import Frontpage from "./pages/frontpage/Frontpage";
import {HotelPage} from "./pages/hotelpage/HotelPage";
import BrowsePage from "./pages/browsepage/BrowsePage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import AdminPage from "./pages/adminpage/AdminPage"
import {useUser} from "./UserContext";

/**
 * Represents the main content of the page
 * @return {JSX.Element}
 * @constructor
 */
export function MainContent() {
    const {user} = useUser();
    return (
        <main>
            <Routes>
                <Route path="/" element={<Frontpage/>}/>
                <Route path="/browse" element={<BrowsePage/>}/>
                <Route path="/hotel/:id" element={<HotelPage/>}/>
                {user?.roles.includes("ROLE_ADMIN") && (
                    <Route path="/admin" element={<AdminPage/>}/>
                )}
                {user && <Route path="/profile" element={<ProfilePage />} />}
                {/* Redirect to frontpage if path doesn't match */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>
    );
}