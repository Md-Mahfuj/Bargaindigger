import React from "react";

const ProductOverview = ({ onScroll }) => {

    return (
        <div className="pt-36 px-4 xs:px-6 md:px-8 lg:px-20 py-4 flex space-x-2">


            <div className=" w-full lg:w-3/4">

                <div className="py-4 sm:px-4 sm:shadow-md sm:border rounded-sm sm:rounded-lg">
                    <div className="">
                        <h2 className="text-2xl font-bold text-color5">BEETLE CAR</h2>
                        <div className="pb-2 md:pb-5 pt-2 sm:flex  justify-between">
                            <div className="flex space-x-4 text-color5" >
                                <div className="text-sm flex space-x-1">
                                    <img className="w-5 h-5" src="ProductDetails01/car.svg" />
                                    <h3>Car</h3>
                                </div>
                                <div className="text-sm flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <h3>USA</h3>
                                </div>
                                <div className="text-sm flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                    </svg>
                                    <h3>5 day ago</h3>
                                </div>
                            </div>
                            <div className=" pt-6 sm:pt-0">
                                <h2 className="text-color6" >VIN: 5TDBT48A23S173329</h2>
                            </div>
                        </div>

                        <div>
                            <div className="">
                                <div className=" absolute mt- mx-auto py-1 rounded-md " >
                                    <div className="mt-6 sm:mt-14">
                                        <img className=" w-24 sm:w-32" src="MainPageImage/Vector 4.svg" />
                                    </div>
                                    <h3 className="text-white text-xl sm:text-2xl font-bold ml-4 sm:ml-5 -mt-8 sm:-mt-10">$501</h3>
                                </div>
                                <div className="">
                                    <img className="w-full rounded-md" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                </div>
                            </div>
                            <div className="grid grid-cols-4 sm:grid-cols-5 py-2.5 gap-2 sm:gap-4 ">
                                <img className=" cursor-pointer rounded-md" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                <img className=" cursor-pointer rounded-md" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                <img className=" cursor-pointer rounded-md" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                <img className=" cursor-pointer rounded-md" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                <img className="hidden sm:block cursor-pointer rounded-md" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-4 sm:shadow-md sm:rounded-lg sm:border">

                    <div className="mt-6 border-b-2">

                        <div className="py-4 flex sm:space-x-7 xl:space-x-16 pt-6 pb-0">
                            <button className="pb-3 px-6 sm:px-8 w-max text-color5 text-opacity-70  cursor-pointer border-b-2 border-white border-opacity-30 hover:text-color5 hover:border-color4 focus:border-color4 focus:text-color5 outline-none focus:outline-none ">
                                <h2 className=" offset text-sm sm:text-xl 2xl:text-2xl font-semibold">Overview</h2>
                            </button>
                            <button className="pb-3 px-6 sm:px-8 w-max text-color5 text-opacity-70  cursor-pointer border-b-2 border-white border-opacity-30 hover:text-color5 hover:border-color4 focus:border-color4 focus:text-color5 outline-none focus:outline-none ">
                                <h2 className=" offset text-sm sm:text-xl 2xl:text-2xl font-semibold">Video</h2>
                            </button>
                            <button className="pb-3 px-6 sm:px-8 w-max text-color5 text-opacity-70  cursor-pointer border-b-2 border-white border-opacity-30 hover:text-color5 hover:border-color4 focus:border-color4 focus:text-color5 outline-none focus:outline-none ">
                                <h2 className=" offset text-sm sm:text-xl 2xl:text-2xl font-semibold">Bids</h2>
                            </button>
                        </div>
                    </div>


                    <p className="px-4 py-10 text-xs sm:text-sm w-11/12 xl:text-base text-color5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <h2 className="sm:px-4 pb-5 text-2xl font-semibold text-color5">Additional Information </h2>


                    {/* Table */}
                    <div className="sm:px-4">

                        <div className="md:flex border border-color5 rounded-md">

                             <div className=" md:text-xs lg:text-xs xl:text-base border-color5 w-full">
                                <div className="text-color5 flex justify-between md:justify-start px-4 xs:px-6 md:px-4 py-4 border-color5">
                                    <h2 className="font-semibold">Make :</h2>
                                    <h2 className="ml-2">BMW</h2>
                                </div>
                                <div className="text-color5 flex justify-between md:justify-start px-4 xs:px-6 md:px-4 py-4 border-t border-color5">
                                    <h2 className="font-semibold">Mileage :</h2>
                                    <h2 className="ml-2">8Km/L</h2>
                                </div>
                                <div className="text-color5 flex justify-between md:justify-start px-4 xs:px-6 md:px-4 py-4 border-t border-color5">
                                    <h2 className="font-semibold">Tax :</h2>
                                    <h2 className="ml-2">Ok</h2>
                                </div>
                                <div className="text-color5 flex justify-between md:justify-start px-4 xs:px-6 md:px-4 py-4 border-t border-color5">
                                    <h2 className="font-semibold">Fuel Type :</h2>
                                    <h2 className="ml-2">Diesel</h2>
                                </div>
                                <div className="text-color5 flex justify-between md:justify-start px-4 xs:px-6 md:px-4 py-4 border-t border-color5">
                                    <h2 className="font-semibold">Transmission :</h2>
                                    <h2 className="ml-2">Manual</h2>
                                </div>
                             </div>


                             <div className=" md:text-xs lg:text-xs xl:text-base border-color5 w-full">
                                <div className="text-color5 flex justify-between md:justify-start px-4 xs:px-6 md:px-4 py-4 border-color5 border-t md:border-t-0 md:border-l">
                                    <h2 className="font-semibold">Engine Size  :</h2>
                                    <h2 className="ml-2">1500 (cc)</h2>
                                </div>
                                <div className="text-color5 flex justify-between md:justify-start px-4 xs:px-6 md:px-4 py-4 border-t md:border-l border-color5">
                                    <h2 className="font-semibold">Gear Box :</h2>
                                    <h2 className="ml-2">Auto/Manual</h2>
                                </div>
                                <div className="text-color5 flex justify-between md:justify-start px-4 xs:px-6 md:px-4 py-4 border-t md:border-l border-color5">
                                    <h2 className="font-semibold">Body Type :</h2>
                                    <h2 className="ml-2">Convex Body</h2>
                                </div>
                                <div className="text-color5 flex justify-between md:justify-start px-4 xs:px-6 md:px-4 py-4 border-t md:border-l border-color5">
                                    <h2 className="font-semibold">Seat Count :</h2>
                                    <h2 className="ml-2">4 Members</h2>
                                </div>
                                <div className="text-color5 flex justify-between md:justify-start px-4 xs:px-6 md:px-4 py-4 border-t md:border-l border-color5">
                                    <h2 className="font-semibold">Year :</h2>
                                    <h2 className="ml-2">1980</h2>
                                </div>
                             </div>


                             <div className=" md:text-xs lg:text-xs xl:text-base border-color5 w-full">
                                <div className="text-color5 flex justify-between md:justify-start px-4 xs:px-6 md:px-4 py-4 border-color5 border-t md:border-t-0 md:border-l">
                                    <h2 className="font-semibold">Number of Doors :</h2>
                                    <h2 className="ml-2">2-Doors</h2>
                                </div>
                                <div className="text-color5 flex justify-between md:justify-start px-4 xs:px-6 md:px-4 py-4 border-t md:border-l border-color5">
                                    <h2 className="font-semibold">Colour :</h2>
                                    <h2 className="ml-2">Matt Blue</h2>
                                </div>
                                <div className="text-color5 flex justify-between md:justify-start px-4 xs:px-6 md:px-4 py-4 border-t md:border-l border-color5">
                                    <h2 className="font-semibold">Air Bags :</h2>
                                    <h2 className="ml-2">Available</h2>
                                </div>
                                <div className="text-color5 flex justify-between md:justify-start px-4 xs:px-6 md:px-4 py-4 border-t md:border-l border-color5">
                                    <h2 className="font-semibold">Power Windows :</h2>
                                    <h2 className="ml-2">Available</h2>
                                </div>
                                <div className="text-color5 flex justify-between md:justify-start px-4 xs:px-6 md:px-4 py-6 lg:py-6 xl:py-7 border-t md:border-l border-color5">
                                    <h2 className="font-semibold"> </h2>
                                    <h2 className="ml-2"></h2>
                                </div>
                             </div>



                        </div>

                    </div>




                    <div className="hidden sm:flex space-x-2 sm:space-x-4 py-9 px-4">
                        <div className="flex text-white sm:text-lg rounded cursor-pointer bg-color1 px-2 sm:px-4 py-1 sm:py-2">
                            <img src="MainPageImage/react.svg" />
                            <h2 className="my-auto text-center ml-2">530</h2>
                        </div>
                        <div className="flex text-white sm:text-lg rounded cursor-pointer bg-color4 px-2 sm:px-4 py-1 sm:py-2">
                            <img src="MainPageImage/chat.svg" />
                            <h2 className="my-auto text-center ml-2">Chat</h2>
                        </div>
                        <div className="flex text-white sm:text-lg rounded cursor-pointer bg-color2 px-2 sm:px-4 py-1 sm:py-2">
                            <img src="MainPageImage/Solid.svg" />
                            <h2 className="my-auto text-center ml-2">Bump</h2>
                        </div>
                    </div>


                </div>


            </div>






            <div className="w-1/4 hidden lg:block">

                {/* Search Bar */}
                <div className="my-auto pb-6">
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-6 h-6 text-color5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" class="w-full px-4 py-2 pl-10 text-sm outline-none text-color5  border-2 border-color5 border-opacity-30 rounded placeholder-color5 placeholder-opacity-30" placeholder="Search Car" />
                    </div>
                </div>

                {/* Post BY */}
                <div className="shadow-xl rounded-lg bg-color5">

                    <h2 className="text-white text-xl font-bold py-6 px-7 border-b border-gray-500" >Posted By</h2>

                    <div className="pt-9 pb-5 text-center border-b border-gray-500">
                        <img className="w-32 h-32 object-cover rounded-full mx-auto" src="ProductDetails01/Ellipse 127.png" />
                        <h3 className="text-xl font-medium pt-2 text-color8">Robert Mclean</h3>
                        <h3 className="text-sm 2xl:text-lg font-light text-white ">Independent Dealer</h3>
                        <h3 className="text-sm 2xl:text-lg font-light text-white pb-3">Member Since November 2015</h3>
                        <button className="text-white focus:outline-none text-sm text-center font-medium bg-color2 hover:text-color2 hover:bg-white py-2 px-6 rounded" >See all ads</button>
                    </div>

                     <div className="px-4 xl:px-7 pb-5 space-y-4 border-b border-white border-opacity-30">
                        <h2 className="text-white  xl:text-xl font-bold pt-6 " >Contact info</h2>

                        <div className="flex space-x-2 xl:space-x-4">
                            <img className="my-auto w-6 xl:w-8 2xl:w-9" src="ProductDetails01/call.svg" />
                            <h3 className="text-sm xl:text-base 2xl:text-lg my-auto mx-auto text-white">012345678</h3>
                        </div>
                        <div className="flex space-x-2 xl:space-x-4">
                            <img className="my-auto w-6 xl:w-8 2xl:w-9" src="ProductDetails01/gmail.svg" />
                            <h3 className="text-sm xl:text-base 2xl:text-lg my-auto mx-auto text-white">Robert456@gmail.com</h3>
                        </div>
                        <div className="flex space-x-2 xl:space-x-4">
                            <img className="my-auto w-6 xl:w-8 2xl:w-9" src="ProductDetails01/location.svg" />
                            <h3 className="text-sm xl:text-base 2xl:text-lg my-auto mx-auto text-white">Dublin,Ireland</h3>
                        </div>
                    </div>


                   <div className="flex flex-wrap gap-4 px-7 pb-16 py-6">
                        <button className="flex py-2 px-4 rounded outline-none focus:outline-none bg-color4 hover:bg-opacity-70">
                            <img className="my-auto mt-1 mr-2" src="ProductDetails01/Group.svg" />
                            <h2 className="text-sm 2xl:text-base text-white">Chat</h2>
                        </button>
                        <button className="flex py-2 px-4 rounded outline-none focus:outline-none bg-color1 hover:bg-opacity-70 ">
                            <img className="my-auto mr-2" src="ProductDetails01/Group (1).svg" />
                            <h2 className="text-sm 2xl:text-base text-white">Contact Me</h2>
                        </button>
                        <button className="flex py-2 px-4 rounded outline-none focus:outline-none bg-color1 hover:bg-opacity-70 ">
                            <img className="my-auto mr-2" src="ProductDetails01/Vector.svg" />
                            <h2 className="text-sm 2xl:text-base text-white">Share</h2>
                        </button>
                    </div>

                </div>





            </div>








        </div>
    )
}

export default ProductOverview;
