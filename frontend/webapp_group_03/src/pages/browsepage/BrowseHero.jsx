import React from "react";
import map from '../../img/7652611.jpg'
import img1 from '../../img/hotel1.jpg'
import img2 from '../../img/hotel2.jpg'
import img3 from '../../img/hotel3.jpg'

const BrowseHero = () => {
    return (
        <div className="flex justify-center mx-20">
            <div className="basis-1/4 px-4 py-4">

                <div className="text-sm breadcrumbs">
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Country</a></li>
                        <li><a>State</a></li>
                        <li>City</li>
                    </ul>
                </div>

                <div className="relative overflow-hidden flex items-center justify-center flex-col">
                    <img
                        src={map}
                        alt="map"
                        className="rounded-2xl object-cover"
                    />
                    <div
                        className="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                        <button className="text-xl font-bold px-4 py-2 rounded-2xl text-white bg-main">
                            Show on map
                        </button>
                    </div>
                </div>

                <div className="flex flex-col w-full py-10">

                    <div className="">
                        <p>Your budget per night:</p>
                        <p>Min</p>
                        <input type="range" min={0} max="100" value="40" className="range range-primary"/>
                        <p>Max</p>
                        <input type="range" min={0} max="100" value="40" className="range range-primary"/>
                    </div>
                    <div className="divider"></div>
                    <div className="">
                        <p>First Filter:</p>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Filter one</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-main" checked/>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Filter two</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-main" checked/>
                            </label>
                        </div>
                    </div>

                    <div className="divider"></div>
                    <div className="">
                        <p>Meals:</p>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Buffet</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-main" checked/>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Breakfast included</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-main" checked/>
                            </label>
                        </div>
                    </div>

                    <div className="divider"></div>
                    <div className="">
                        <p>Star rating:</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-main"/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-main" checked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-main"/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-main"/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-main"/>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="">Filter 4</div>
                    <div className="divider"></div>
                </div>
            </div>
            <div className="basis-3/4 px-4 py-4">
                <div>
                    <h2 className="text-font">Results from Ålesund: 40 properties found</h2>
                    <button className="btn">
                        Sort by
                        <div className="badge">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"/>
                            </svg>
                        </div>
                    </button>
                </div>

                <div className="">
                    <div className="grid gap-8 md:grid-cols-2 md:items-center md:text-left py-4">
                        <div className="relative">
                            <img
                                src={img1}
                                alt="Hotel 1"
                                className="w-full rounded-2xl"
                            />
                        </div>
                        <div className="relative">
                            <h1 className="mb-2 text-4xl font-medium text-font">Villa GOATeid</h1>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="flex-shrink-0 size-5 text-main">
                                    <path fillRule="evenodd"
                                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="flex-shrink-0 size-5 text-main">
                                    <path fillRule="evenodd"
                                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="flex-shrink-0 size-5 text-main">
                                    <path fillRule="evenodd"
                                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="flex-shrink-0 size-5 text-main">
                                    <path fillRule="evenodd"
                                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="flex-shrink-0 size-5 text-main">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                </svg>
                            </div>

                            <p className="text-main">Breakfast included</p>
                            <p className="text-xl text-font font-bold">NOK 4,200 night</p>
                            <button className="btn absolute bottom-0 right-0 text-white bg-main">
                                View deal
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                                </svg>

                            </button>
                        </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 md:items-center md:text-left py-4">
                        <div>
                            <img
                                src={img2}
                                alt="Hotel 2"
                                className="w-full rounded-2xl"
                            />
                        </div>
                        <div className="relative">
                            <h1 className="mb-2 text-4xl font-medium">Koselig hotel i hjerte av Ålesund</h1>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="flex-shrink-0 size-5 text-main">
                                    <path fillRule="evenodd"
                                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="flex-shrink-0 size-5 text-main">
                                    <path fillRule="evenodd"
                                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="flex-shrink-0 size-5 text-main">
                                    <path fillRule="evenodd"
                                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="flex-shrink-0 size-5 text-main">
                                    <path fillRule="evenodd"
                                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="flex-shrink-0 size-5 text-main">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                </svg>
                            </div>

                            <p className="text-main">Breakfast included</p>
                            <p className="text-xl text-font font-bold">NOK 5,999 night</p>
                            <button className="btn absolute bottom-0 right-0 text-white bg-main">
                                View deal
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 md:items-center md:text-left py-4">
                        <div>
                            <img
                                src={img3}
                                alt="Hotel 3"
                                className="rounded-2xl"
                            />
                        </div>
                        <div className="relative">
                            <h1 className="mb-2 text-4xl font-medium">Urban Ålesund</h1>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="flex-shrink-0 size-5 text-main">
                                    <path fillRule="evenodd"
                                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="flex-shrink-0 size-5 text-main">
                                    <path fillRule="evenodd"
                                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="flex-shrink-0 size-5 text-main">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="flex-shrink-0 size-5 text-main">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="flex-shrink-0 size-5 text-main">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                </svg>
                            </div>

                            <p className="text-main">Breakfast included</p>
                            <p className="text-xl text-font font-bold">NOK 3,999 night</p>
                            <button className="btn absolute bottom-0 right-0 text-white bg-main">
                                View deal
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrowseHero;