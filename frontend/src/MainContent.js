import {Route, Routes} from "react-router-dom";
import FrontPage from "./pages/frontpage/FrontPage";
import Frontpage2 from "./pages/frontpage/Frontpage2";
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
                <Route path="/" element={<Frontpage2/>}/>
                <Route path="/browse" element={<BrowsePage/>}/>
                <Route path="/hotel" element={<HotelPage/>}/>
            </Routes>
        </main>
    );
}