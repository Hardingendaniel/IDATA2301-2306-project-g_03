import React, {useState} from "react";
import img1 from '../../img/hotel1.jpg'
import img2 from '../../img/hotel2.jpg'
import img3 from '../../img/hotel3.jpg'

function Frontpage2() {
    return (
        <div>
            <div className="static navbar h-48 bg-header flex flex-col">
                <div className="flex flex-col text-white text-2xl font-bold">
                    <p>We at Stay Finder want to help you</p>
                    <p>Booking...</p>
                    <p>More text... more...</p>
                </div>

                <form action="/browse" className="absolute top-52 flex h-20 justify-center" method="GET">
                    <div className="join">
                        <input className="input input-bordered join-item rounded-l-2xl h-20 w-96 bg-inputField"
                               placeholder="Where to?"/>
                        <input className="input input-bordered join-item rounded-l-2xl h-20 w-96 bg-inputField"
                               placeholder="Check in date - Check out date"/>
                        <input className="input input-bordered join-item rounded-l-2xl h-20 w-96 bg-inputField"
                               placeholder="2 adults - 1 room"/>
                        <button
                            className="btn join-item rounded-r-2xl bg-main text-white text-lg font-bold h-20 w-1/4">SEARCH
                        </button>
                    </div>
                </form>
            </div>

            <div className="carousel rounded-box pt-10">
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger"/>
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger"/>
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger"/>
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger"/>
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger"/>
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger"/>
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger"/>
                </div>
            </div>
        </div>

    );
}

export default Frontpage2;