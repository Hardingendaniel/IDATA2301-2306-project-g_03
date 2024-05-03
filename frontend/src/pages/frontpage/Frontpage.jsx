import React, {useState} from "react";
import logo from "../../img/hotel1.jpg";
import logo2 from "../../img/hotel2.jpg";
import logo3 from "../../img/hotel3.jpg";
import SearchForm from "../../components/SearchForm";

function Frontpage() {
    const cardsData = [
        { img: logo, hotelName: "Villa Gåseid", review: "A wonderful place to stay" , rating: "★★★★★" },
        { img: logo2, hotelName: "Totens fineste", review: "Amazing view and price" , rating: "★★★★★" },
        { img: logo3, hotelName: "Jugend Hotel", review: "Beautiful historic hotel" , rating: "★★★★★" }
    ];

    // Track the current index of the shown card
    const [currentIndex, setCurrentIndex] = useState(0);

    // Calculate and update the visible cards based on the current index
    const visibleCards = () => {
        const totalCards = cardsData.length;
        const indexes = [
            currentIndex % totalCards,
            (currentIndex + 1) % totalCards,
            (currentIndex + 2) % totalCards,
        ];

        return indexes.map(index => cardsData[index]);
    };

    return (
        <div>
            <div className="static navbar h-48 bg-header flex flex-col">
                <div className="flex flex-col text-white text-2xl font-bold">
                    <p>We at Stay Finder want to help you</p>
                    <p>Booking...</p>
                    <p>Even More...</p>

                </div>

                <div className="static navbar h-14 bg-header flex flex-col">
                    <SearchForm/>
                </div>


            </div>


            <h2 className="mt-4 text-center text text-2xl">Get the best experience with Stay Finder</h2>
            <div className="flex justify-around relative">
                {visibleCards().map((card, index) => (
                    <div key={index} className="card">
                        <img src={card.img} alt={`Hotel ${index + 1}`} className="w-full h-48 object-cover rounded-lg"/>
                        <div className="text-center p-4">
                            <h3 className="text-lg font-semibold">{card.hotelName}</h3>
                            <p className="text-lg font-semibold">{card.review}</p>
                            <div className="text-yellow-500 mt-2">{card.rating}</div>
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
        </div>

    );
}

export default Frontpage;