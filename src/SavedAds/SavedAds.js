import React from "react";

const SavedAds = ({ onScroll }) => {

    return (
        <div className="px-4 md:px-8 lg:px-20 py-4 flex lg:space-x-4">




            <div className="w-1/4 hidden lg:block">
                {/* profile */}
                <div className="shadow-xl rounded-lg bg-color5">
                    <h2 className="text-white 2xl:text-xl font-bold py-6 px-7 border-b border-gray-500" >My Dashboard</h2>
                    <div className="pt-9 pb-5 text-center ">
                        <img className="w-32 h-32 object-cover rounded-full mx-auto" src="ProductDetails01/Ellipse 127.png" />
                        <h3 className="2xl:text-xl font-medium pt-2 text-color4">Robert Mclean</h3>
                    </div>
                    <div className="pb-7 space-y-4 ">
                        <div className="border-t border-gray-500 cursor-pointer">
                            <div className="flex px-8 pt-3 space-x-4 ">
                                <img className="my-auto" src="AllAd/profile.png" />
                                <h3 className="2xl:text-lg my-auto text-white">Edit Profile</h3>
                            </div>
                        </div>
                        <div className="border-t border-gray-500 cursor-pointer">
                            <div className="flex px-8 pt-3 space-x-4 ">
                                <img className="my-auto" src="AllAd/myadd.png" />
                                <h3 className="2xl:text-lg my-auto text-white">My Ads</h3>
                            </div>
                        </div>
                        <div className="border-t border-gray-500 cursor-pointer">
                            <div className="flex px-8 pt-3 space-x-4 ">
                                <img className="my-auto" src="AllAd/savesads.png" />
                                <h3 className="2xl:text-lg my-auto text-white">Saved Ads</h3>
                            </div>
                        </div>
                        <div className="border-t border-gray-500 cursor-pointer">
                            <div className="flex px-8 pt-3 space-x-4 ">
                                <img className="my-auto" src="AllAd/star.png" />
                                <h3 className="2xl:text-lg my-auto text-white">Saved Searches</h3>
                            </div>
                        </div>
                        <div className="border-t border-gray-500 cursor-pointer">
                            <div className="flex px-8 pt-3 space-x-4 ">
                                <img className="my-auto" src="AllAd/payment.png" />
                                <h3 className="2xl:text-lg my-auto text-white">Payment</h3>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=" rounded-lg mt-6 bg-color5">
                    <h2 className="text-white 2xl:text-xl font-bold py-6 px-7 border-b border-gray-500" >Safety Tips For Buyers</h2>
                    <div className="px-7 pt-6 pb-5 space-y-4 ">
                        <div className="flex space-x-3 2xl:space-x-4">
                            <img className="w-3 h-3 mt-1.5" src="PlaceAd/Group.png" />
                            <h3 className="2xl:text-lg my-auto text-white">Money not Refundable</h3>
                        </div>
                        <div className="flex space-x-3 2xl:space-x-4">
                            <img className="w-3 h-3 mt-1.5" src="PlaceAd/Group.png" />
                            <h3 className="2xl:text-lg my-auto text-white">You Not renew your Premium add
                                after experted</h3>
                        </div>
                        <div className="flex space-x-3 2xl:space-x-4">
                            <img className="w-3 h-3 mt-1.5" src="PlaceAd/Group.png" />
                            <h3 className="2xl:text-lg my-auto text-white">Premium ads are active for
                                depend on package.</h3>
                        </div>
                        <div className="pt-5">
                            <button className="text-white py-2.5 px-9 rounded flex justify-center mx-auto bg-color1 hover:bg-white hover:text-color1 outline-none focus:outline-none hover:shadow-md">More</button>
                        </div>
                    </div>
                </div>
            </div>



            <div className=" w-full lg:w-3/4 text-color5">


                <div className=" rounded-lg shadow-lg border-b-2 border-color5 border-opacity-30 px-4 2xl:px-11">
                    <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold py-6 rounded-lg">Saved Ads</h2>
                </div>


                <div className="">

                    <div className="flex pt-8  2xl:pt-11  2xl:px-11 border-b-2 space-x-10 2xl:space-x-24 text-lg 2xl:text-xl font-semibold">
                        <button className="pb-3 px-6 sm:px-8 w-max text-color5 text-opacity-70  cursor-pointer border-b-2 border-white border-opacity-30 hover:text-color5 hover:border-color4 focus:border-color4 focus:text-color5 outline-none focus:outline-none ">
                            <h2 className=" offset sm:text-xl 2xl:text-2xl font-semibold">All Ads</h2>
                        </button>
                        <button className="pb-3 px-6 sm:px-8 w-max text-color5 text-opacity-70  cursor-pointer border-b-2 border-white border-opacity-30 hover:text-color5 hover:border-color4 focus:border-color4 focus:text-color5 outline-none focus:outline-none ">
                            <h2 className=" offset sm:text-xl 2xl:text-2xl font-semibold">Sold Ads</h2>
                        </button>
                    </div>



                    {/* Carts */}
                    <div className="pt-6 2xl:pt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">



                        {/* Carts 01 */}
                        <div className="shadow-md cursor-pointer text-color5  hover:shadow-xl duration-300 rounded-b">
                            <div className="">
                                <div className=" absolute mt-6 mx-auto py-1 rounded-md " >
                                    <div className="flex text-sm">
                                        <img className="w-4/6" src="MainPageImage/Vector 4.png" />
                                    </div>
                                    <h3 className="text-white font-bold -mt-6 ml-2">$501</h3>
                                </div>
                                <div className="">
                                    <img className="rounded-t-md hover:opacity-70 cursor-pointer" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                </div>
                            </div>

                            <div className="border-b pl-6 space-y-4 pt-5  pr-3">
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-bold" >BEETLE CAR</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 p-1 rounded-full text-color5 hover:text-white hover:bg-color1 my-auto cursor-pointer" >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </div>
                                <div className="flex space-x-4">
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
                                <h3 className="pr-3 pb-3  text-sm" >Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </h3>
                            </div>
                            <div className="pl-6 pr-3 py-3 flex justify-between rounded-b">
                                <div className="flex">
                                    <h3 className="text-sm font-medium" >Saved</h3>
                                    <h3 className="text-sm " >(Normal)</h3>
                                </div>
                                <div>
                                    <img className="w-5 cursor-pointer hover:opacity-60" src="SavedAds/Group 8962.png" />
                                </div>
                            </div>
                        </div>

                        {/* Carts 01 */}
                        <div className="shadow-md cursor-pointer text-color5  hover:shadow-xl duration-300 rounded-b">
                            <div className="">
                                <div className=" absolute mt-6 mx-auto py-1 rounded-md " >
                                    <div className="flex text-sm">
                                        <img className="w-4/6" src="MainPageImage/Vector 4.png" />
                                    </div>
                                    <h3 className="text-white font-bold -mt-6 ml-2">$501</h3>
                                </div>
                                <div className="">
                                    <img className="rounded-t-md hover:opacity-70 cursor-pointer" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                </div>
                            </div>

                            <div className="border-b pl-6 space-y-4 pt-5  pr-3">
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-bold" >BEETLE CAR</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 p-1 rounded-full text-color5 hover:text-white hover:bg-color1 my-auto cursor-pointer" >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </div>
                                <div className="flex space-x-4">
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
                                <h3 className="pr-3 pb-3  text-sm" >Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </h3>
                            </div>
                            <div className="pl-6 pr-3 py-3 flex justify-between rounded-b">
                                <div className="flex">
                                    <h3 className="text-sm font-medium" >Saved</h3>
                                    <h3 className="text-sm " >(Normal)</h3>
                                </div>
                                <div>
                                    <img className="w-5 cursor-pointer hover:opacity-60" src="SavedAds/Group 8962.png" />
                                </div>
                            </div>
                        </div>

                        {/* Carts 01 */}
                        <div className="shadow-md cursor-pointer text-color5  hover:shadow-xl duration-300 rounded-b">
                            <div className="">
                                <div className=" absolute mt-6 mx-auto py-1 rounded-md " >
                                    <div className="flex text-sm">
                                        <img className="w-4/6" src="MainPageImage/Vector 4.png" />
                                    </div>
                                    <h3 className="text-white font-bold -mt-6 ml-2">$501</h3>
                                </div>
                                <div className="">
                                    <img className="rounded-t-md hover:opacity-70 cursor-pointer" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                </div>
                            </div>

                            <div className="border-b pl-6 space-y-4 pt-5  pr-3">
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-bold" >BEETLE CAR</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 p-1 rounded-full text-color5 hover:text-white hover:bg-color1 my-auto cursor-pointer" >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </div>
                                <div className="flex space-x-4">
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
                                <h3 className="pr-3 pb-3  text-sm" >Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </h3>
                            </div>
                            <div className="pl-6 pr-3 py-3 flex justify-between rounded-b">
                                <div className="flex">
                                    <h3 className="text-sm font-medium" >Saved</h3>
                                    <h3 className="text-sm " >(Normal)</h3>
                                </div>
                                <div>
                                    <img className="w-5 cursor-pointer hover:opacity-60" src="SavedAds/Group 8962.png" />
                                </div>
                            </div>
                        </div>

                        {/* Carts 01 */}
                        <div className="shadow-md cursor-pointer text-color5  hover:shadow-xl duration-300 rounded-b">
                            <div className="">
                                <div className=" absolute mt-6 mx-auto py-1 rounded-md " >
                                    <div className="flex text-sm">
                                        <img className="w-4/6" src="MainPageImage/Vector 4.png" />
                                    </div>
                                    <h3 className="text-white font-bold -mt-6 ml-2">$501</h3>
                                </div>
                                <div className="">
                                    <img className="rounded-t-md hover:opacity-70 cursor-pointer" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                </div>
                            </div>

                            <div className="border-b pl-6 space-y-4 pt-5  pr-3">
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-bold" >BEETLE CAR</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 p-1 rounded-full text-color5 hover:text-white hover:bg-color1 my-auto cursor-pointer" >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </div>
                                <div className="flex space-x-4">
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
                                <h3 className="pr-3 pb-3  text-sm" >Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </h3>
                            </div>
                            <div className="pl-6 pr-3 py-3 flex justify-between rounded-b">
                                <div className="flex">
                                    <h3 className="text-sm font-medium" >Saved</h3>
                                    <h3 className="text-sm " >(Normal)</h3>
                                </div>
                                <div>
                                    <img className="w-5 cursor-pointer hover:opacity-60" src="SavedAds/Group 8962.png" />
                                </div>
                            </div>
                        </div>

                        {/* Carts 01 */}
                        <div className="shadow-md cursor-pointer text-color5  hover:shadow-xl duration-300 rounded-b">
                            <div className="">
                                <div className=" absolute mt-6 mx-auto py-1 rounded-md " >
                                    <div className="flex text-sm">
                                        <img className="w-4/6" src="MainPageImage/Vector 4.png" />
                                    </div>
                                    <h3 className="text-white font-bold -mt-6 ml-2">$501</h3>
                                </div>
                                <div className="">
                                    <img className="rounded-t-md hover:opacity-70 cursor-pointer" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                </div>
                            </div>

                            <div className="border-b pl-6 space-y-4 pt-5  pr-3">
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-bold" >BEETLE CAR</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 p-1 rounded-full text-color5 hover:text-white hover:bg-color1 my-auto cursor-pointer" >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </div>
                                <div className="flex space-x-4">
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
                                <h3 className="pr-3 pb-3  text-sm" >Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </h3>
                            </div>
                            <div className="pl-6 pr-3 py-3 flex justify-between rounded-b">
                                <div className="flex">
                                    <h3 className="text-sm font-medium" >Saved</h3>
                                    <h3 className="text-sm " >(Normal)</h3>
                                </div>
                                <div>
                                    <img className="w-5 cursor-pointer hover:opacity-60" src="SavedAds/Group 8962.png" />
                                </div>
                            </div>
                        </div>

                        {/* Carts 01 */}
                        <div className="shadow-md cursor-pointer text-color5  hover:shadow-xl duration-300 rounded-b">
                            <div className="">
                                <div className=" absolute mt-6 mx-auto py-1 rounded-md " >
                                    <div className="flex text-sm">
                                        <img className="w-4/6" src="MainPageImage/Vector 4.png" />
                                    </div>
                                    <h3 className="text-white font-bold -mt-6 ml-2">$501</h3>
                                </div>
                                <div className="">
                                    <img className="rounded-t-md hover:opacity-70 cursor-pointer" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                </div>
                            </div>

                            <div className="border-b pl-6 space-y-4 pt-5  pr-3">
                                <div className="flex justify-between">
                                    <h3 className="text-lg font-bold" >BEETLE CAR</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 p-1 rounded-full text-color5 hover:text-white hover:bg-color1 my-auto cursor-pointer" >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </div>
                                <div className="flex space-x-4">
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
                                <h3 className="pr-3 pb-3  text-sm" >Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </h3>
                            </div>
                            <div className="pl-6 pr-3 py-3 flex justify-between rounded-b">
                                <div className="flex">
                                    <h3 className="text-sm font-medium" >Saved</h3>
                                    <h3 className="text-sm " >(Normal)</h3>
                                </div>
                                <div>
                                    <img className="w-5 cursor-pointer hover:opacity-60" src="SavedAds/Group 8962.png" />
                                </div>
                            </div>
                        </div>





                    </div>




                </div>




            </div>



        </div>
    )
}

export default SavedAds;
