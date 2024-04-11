export function BrowsePage() {
  return (
      <>
        <meta charSet="UTF-8" />
        <title>Browsing page</title>
        <link rel="stylesheet" href="browseStyle.css" />
        <header>
          <div className="container">
            <div className="logo">
              <a href="Website.html">
                <button className="logo-button">Stay Finder</button>
              </a>
            </div>
            <div className="search-bar">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                  width={30}
                  height={30}
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input type="search" id="header-search" placeholder="search" />
            </div>
            <div className="button">
              <p>Login</p>
              <button className="signInButton">Sign Up</button>
            </div>
          </div>
          <form action="/search" className="form" method="GET">
            <input
                list="places"
                type="text"
                className="form-input"
                name="destination"
                id="destination"
                placeholder="Where to?"
                onclick="suggestionClick"
            />
            <datalist id="places">
              <option>Ålesund</option>
              <option>Oslo</option>
              <option>Trondheim</option>
              <option>Bergen</option>
            </datalist>
            <input
                type="text"
                className="form-input"
                name="check-in"
                id="check-in"
                onfocus="(this.type='date')"
                onblur="(this.type='text')"
                placeholder="Check in date"
            />
            <input
                type="text"
                className="form-input"
                name="check-out"
                id="check-out"
                onfocus="(this.type='date')"
                onblur="(this.type='text')"
                placeholder="Check out date"
            />
            <input
                type="text"
                className="form-input"
                name="rooms"
                id="rooms"
                placeholder="Number of Rooms (min: 1)"
            />
            <button
                type="button"
                className="form-input"
                name="search_button"
                id="search_button"
            >
              SEARCH
            </button>
          </form>
        </header>
        <div className="main">
          <div className="left">
            <nav>
              <ul>
                <li>
                  <a href="Website.html">Home</a>
                </li>
                <li>
                  <a href="#">Country</a>
                </li>
                <li>
                  <a href="#">State</a>
                </li>
                <li>
                  <a href="#">Town</a>
                </li>
              </ul>
            </nav>
            <div className="map">
              <img
                  src="../../img/7652611.jpg"
                  className="map-img"
                  height={200}
                  width={300}
                  alt="temporary img"
              />
              <button className="map-button">Show on map</button>
            </div>
            <div className="filter">
              Filter by:
              <hr />
              <div className="budget">
                Your budget (per night)
                <div className="slider-container">
                  <input
                      type="range"
                      min={1}
                      max={100}
                      defaultValue={50}
                      className="slider"
                      id="myRange"
                  />
                </div>
              </div>
              <hr />
              <div className="popular">
                Popular filters
                <ul>
                  <li>One type of filter</li>
                  <li>Another type of filter</li>
                </ul>
              </div>
              <hr />
              <div className="meals">
                Meals
                <ul>
                  <li>Buffet</li>
                  <li>Breakfast included</li>
                </ul>
              </div>
              <hr />
              <div className="hotel-stars">
                Hotel Stars
                <ul className="star-filter">
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                </ul>
              </div>
              <hr />
            </div>
          </div>
          <div className="right">
            <div className="flex-container">
              <div className="result">Results from Ålesund: 32 properties found</div>
              <button className="sort-by">
                Sort by
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                    width={20}
                    height={20}
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                  />
                </svg>
              </button>
            </div>
            <div className="hotel-card">
              <img
                  src="../../img/hotel1.jpg"
                  className="hotel-img"
                  height={200}
                  width={300}
                  alt="hotel 1"
              />
              <div className="hotel-info">
                <div className="info-title">Villa GOATeid</div>
                <div className="info-stars">★★★★★</div>
                <div className="info-meal">Breakfast included</div>
                <div className="info-price">NOK 4,200 night</div>
              </div>
              <div className="view-deal">
                <a href="hotelPage.html">
                  <button className="hotel-button">
                    View deal
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                        width={20}
                        height={20}
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <div className="hotel-card">
              <img
                  src="../../img/hotel2.jpg"
                  className="hotel-img"
                  height={200}
                  width={300}
                  alt="hotel 2"
              />
              <div className="hotel-info">
                <div className="info-title">Hotel 2</div>
                <div className="info-stars">★★★★★</div>
                <div className="info-meal">Breakfast included</div>
                <div className="info-price">NOK 5,999 night</div>
              </div>
              <div className="view-deal">
                <a href="hotelPage.html">
                  <button className="hotel-button">
                    View deal
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                        width={20}
                        height={20}
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <div className="hotel-card">
              <img
                  src="../../img/hotel3.jpg"
                  className="hotel-img"
                  height={200}
                  width={300}
                  alt="hotel 3"
              />
              <div className="hotel-info">
                <div className="info-title">Urban Ålesund</div>
                <div className="info-stars">★★★★★</div>
                <div className="info-meal">Breakfast included</div>
                <div className="info-price">NOK 3,999 night</div>
              </div>
              <div className="view-deal">
                <a href="hotelPage.html">
                  <button className="hotel-button">
                    View deal
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                        width={20}
                        height={20}
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <img
              src="../../img/NTNU%20hovedlogo%20-%20hvit%20-%20hoyde.png"
              width="10%"
              height="auto"
              alt="NTNU Logo"
          />
          <p>
            <i>
              This website is a result of a university group project, performed in the
              course<span style={{ color: "black" }}>IDATA2301 Web technologies</span>
              , at <span style={{ color: "black" }}>NTNU</span>. All the information
              provided here is a result of imagination. Any resemblance with real
              companies or products is a coincidence.
            </i>
          </p>
        </footer>
      </>
  )
}