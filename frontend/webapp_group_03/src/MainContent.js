import {Route, Routes} from "react-router-dom";
import {Frontpage} from "./pages/frontpage/FrontPage";
import {BrowsePage} from "./pages/browsepage/BrowsePage"
import {SignupPage} from "./pages/SignupPage";

/**
 * Represents the main content of the page
 * @return {JSX.Element}
 * @constructor
 */
export function MainContent() {
  return (
      <main>
        <Routes>
          <Route path="/" element={<Frontpage />}/>
          <Route path="/browse" element={<BrowsePage />}/>
          <Route path="/signup" element={<SignupPage />}/>
        </Routes>
      </main>
  );
}