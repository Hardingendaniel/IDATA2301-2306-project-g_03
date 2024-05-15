import  React, {useEffect, useState} from "react";
import logo from "../../img/hotel1.jpg";
import logo2 from "../../img/hotel2.jpg";
import logo3 from "../../img/hotel3.jpg";
import Aalesund from "../../img/Ålesund.jpg"
import Bergen from "../../img/Bergen.jpg"
import SearchForm from "../../components/SearchForm";

function Frontpage() {

    const [data1, setData1] = useState([]);

    const [cardsData, setCardsData] = useState([
        { img: logo, hotelName: "Hotel", review: "Reviews" , rating: "★★★★★" },
        { img: logo2, hotelName: "Hotel", review: "Reviews" , rating: "★★★★★" },
        { img: logo3, hotelName: "Hotel", review: "Reviews" , rating: "★★★★★" }
    ]);

    // Fetch data for cards
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:8080/api/hotels");
                const data = await response.json();
                setData1(data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        }
        fetchData();
    }, []);

    // Track the current index of the shown card
    const [currentIndex, setCurrentIndex] = useState(0);

    // Calculate and update the visible cards based on the current index
    const visibleCards = () => {
        const totalCards = data1.length;
        const indexes = [
            currentIndex % totalCards,
            (currentIndex + 1) % totalCards,
            (currentIndex + 2) % totalCards,
        ];

        return indexes.map(index => data1[index]);
    };

    return (
        <div>
            <div className="static navbar h-48 bg-header flex flex-col">
                <div className="flex flex-col text-white text-2xl font-bold">
                    <p>Welcome to Stay Finder, your </p>
                    <p>premier destination for discovering
                        </p>
                    <p>the most exceptional accommodation deals</p>

                </div>

                <div className="static navbar h-14 bg-header flex flex-col">
                    <SearchForm/>
                </div>


            </div>


            <h2 className="mt-4 text-center text text-2xl">Get the best experience with Stay Finder</h2>
            <div className="flex justify-evenly relative w-4-5 mr-28 ml-28">
                {visibleCards().map((card, index) => (
                    <div key={index} className="card">
                        <img src="" alt={`Hotel ${index + 1}`} className="w-full h-48 object-cover rounded-t-2xl"/>
                        <div className="text-center p-4">
                            <h3 className="text-lg font-semibold">{card ? card.hotelName : ""}</h3>
                            <p className="text-lg font-semibold">{card ? card.description : ""}</p>
                        </div>
                    </div>
                ))}

                <button
                    id="Shuffle_reviews"
                    className="shuffle col-span-1"
                    onClick={() => setCurrentIndex(currentIndex + 1)}
                >
                    <span className="arrow"/>
                </button>
                <button
                    id="Shuffle_reviews2"
                    className="shuffle2 col-span-1"
                    onClick={() => setCurrentIndex(currentIndex - 1)}
                    style={{display: currentIndex === 0 ? 'none' : 'block'}}
                >
                    <span className="arrow2"/>
                </button>
            </div>

            <div className= "w-5-6">


                <h3 className="mt-4 text-center text text-2xl"> Popular travel destinations</h3>

                <div className="mt-4 mb-4">

                    <div className="flex justify-around ml-28 mr-28">
                        <button className="">
                            <img src={Aalesund} alt="Ålesund" className="w-44 h-44 object-cover"/>
                            <p className="text-center text-2xl">Ålesund</p>
                            <p className="text-center">4 destinations</p>
                        </button>

                        <button className="">
                            <img src={Bergen} alt="Bergen" className="w-44 h-44 object-cover"/>
                            <p className="text-center text-2xl">Bergen</p>
                            <p className="text-center">4 destinations</p>
                        </button>

                        <button className="">
                            <img src={logo3} alt="Oslo" className="w-44 h-44 object-cover"/>
                            <p className="text-center text-2xl">Oslo</p>
                            <p className="text-center">4 destinations</p>
                        </button>

                        <button className="">
                            <img src={logo} alt="Trondheim" className="w-44 h-44 object-cover"/>
                            <p className="text-center text-2xl">Trondheim</p>
                            <p className="text-center">4 destinations</p>
                        </button>


                        <button className="">
                            <img src={logo2} alt="Stryn" className="w-44 h-44 object-cover"/>
                            <p className="text-center text-2xl">Stryn</p>
                            <p className="text-center">4 destinations</p>
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <h4 className="mt-4 text-center text text-2xl"> Why choose stay Finder?</h4>
            </div>

            <div className="flex justify-around ml-32 mr-32 mb-4 mt-4">
                <div className="box-border border w-1/3">
                </div>

                <div className="box-border border w-1/3 text-center">
                    TO BE STYLED
                </div>

                <div className="box-border border w-1/3">
                </div>

            </div>

        </div>

    );
}

export default Frontpage;