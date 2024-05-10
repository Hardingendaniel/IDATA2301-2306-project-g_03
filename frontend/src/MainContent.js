import {Route, Routes} from "react-router-dom";
import Frontpage from "./pages/frontpage/Frontpage";
import {HotelPage} from "./pages/hotelpage/HotelPage"
import BrowsePage from "./pages/browsepage/BrowsePage";
import AdminPage from "./pages/adminpage/AdminPage"

/**
 * Represents the main content of the page
 * @return {JSX.Element}
 * @constructor
 */
export function MainContent() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Frontpage/>}/>
                <Route path="/browse" element={<BrowsePage/>}/>
                <Route path="/hotel" element={<HotelPage/>}/>
                <Route path="/admin" element={<AdminPage/>}/>
            </Routes>
        </main>
    );
}