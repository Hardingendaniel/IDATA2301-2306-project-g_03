import {Route, Routes} from "react-router-dom";
import Frontpage from "./pages/frontpage/Frontpage";
import {HotelPage} from "./pages/hotelpage/HotelPage"
import BrowsePage from "./pages/browsepage/BrowsePage";

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
            </Routes>
        </main>
    );
}