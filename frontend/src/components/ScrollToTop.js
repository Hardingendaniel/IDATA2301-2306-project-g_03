import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//Make it so the user is getting to the top of the page when routed.
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;