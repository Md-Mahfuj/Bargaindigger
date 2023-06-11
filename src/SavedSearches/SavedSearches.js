import React from "react";

const SavedSearches = ({ onScroll }) => {

    return (
        <div className="px-4 md:px-8 xl:px-20 py-4 flex lg:space-x-4">



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




            <div className="w-full lg:w-3/4 text-color5">

                <div className=" rounded-t shadow-lg border-b-2 border-color5 border-opacity-30 px-4 2xl:px-11">
                    <h2 className="text-2xl 2xl:text-3xl font-semibold py-6 rounded-lg ">Saved Ads</h2>
                </div>


                <div className="pt-6 space-y-8 md:space-y-0 gap-3 2xl:gap-4 md:flex">

                    {/* Details */}
                    <div className="space-y-6 md:w-2/3">

                        {/* Details */}
                        <div className=" shadow-lg text-color5">
                            <div className=" flex justify-between px-7 pt-4 pb-7 border-b ">
                                <div className="space-y-2">
                                    <h2 className="text-xl font-semibold ">“Toyota Car”</h2>
                                    <h2 className="text-sm 2xl:text-lg flex">Categories <h2 className="ml-1 font-medium">“Car”</h2></h2>
                                    <h2 className="text-sm 2xl:text-lg">Dec 16, 202.2</h2>
                                </div>
                                <h2 className="text-sm 2xl:text-lg">Dec 16, 202.2</h2>
                            </div>
                            <div className="py-3 2xl:py-3.5 px-7 flex justify-end">
                                <img className="w-5 right-0 cursor-pointer hover:opacity-60" src="SavedAds/Group 8962.png" />
                            </div>
                        </div>

                        {/* Details */}
                        <div className=" shadow-lg text-color5">
                            <div className=" flex justify-between px-7 pt-4 pb-7 border-b ">
                                <div className="space-y-2">
                                    <h2 className="text-xl font-semibold ">“Toyota Car”</h2>
                                    <h2 className="text-sm 2xl:text-lg flex">Categories <h2 className="ml-1 font-medium">“Car”</h2></h2>
                                    <h2 className="text-sm 2xl:text-lg">Dec 16, 202.2</h2>
                                </div>
                                <h2 className="text-sm 2xl:text-lg">Dec 16, 202.2</h2>
                            </div>
                            <div className="py-3 2xl:py-3.5 px-7 flex justify-end">
                                <img className="w-5 right-0 cursor-pointer hover:opacity-60" src="SavedAds/Group 8962.png" />
                            </div>
                        </div>

                        {/* Details */}
                        <div className=" shadow-lg text-color5">
                            <div className=" flex justify-between px-7 pt-4 pb-7 border-b ">
                                <div className="space-y-2">
                                    <h2 className="text-xl font-semibold ">“Toyota Car”</h2>
                                    <h2 className="text-sm 2xl:text-lg flex">Categories <h2 className="ml-1 font-medium">“Car”</h2></h2>
                                    <h2 className="text-sm 2xl:text-lg">Dec 16, 202.2</h2>
                                </div>
                                <h2 className="text-sm 2xl:text-lg">Dec 16, 202.2</h2>
                            </div>
                            <div className="py-3 2xl:py-3.5 px-7 flex justify-end">
                                <img className="w-5 right-0 cursor-pointer hover:opacity-60" src="SavedAds/Group 8962.png" />
                            </div>
                        </div>

                        {/* Details */}
                        <div className=" shadow-lg text-color5">
                            <div className=" flex justify-between px-7 pt-4 pb-7 border-b ">
                                <div className="space-y-2">
                                    <h2 className="text-xl font-semibold ">“Toyota Car”</h2>
                                    <h2 className="text-sm 2xl:text-lg flex">Categories <h2 className="ml-1 font-medium">“Car”</h2></h2>
                                    <h2 className="text-sm 2xl:text-lg">Dec 16, 202.2</h2>
                                </div>
                                <h2 className="text-sm 2xl:text-lg">Dec 16, 202.2</h2>
                            </div>
                            <div className="py-3 2xl:py-3.5 px-7 flex justify-end">
                                <img className="w-5 right-0 cursor-pointer hover:opacity-60" src="SavedAds/Group 8962.png" />
                            </div>
                        </div>


                      


                    </div>



                    {/* Related Ads */}
                    <div className="md:w-2/5">

                        <h2 className="font-semibold text-xl" style={{ "color": "#0E3860" }}>Related Ads</h2>

                        <div className="space-y-4">

                            {/* Carts 01 */}
                            <div className="flex shadow-md rounded-lg p-2">
                                <div className="w-2/3">
                                    <img className="rounded-lg w-full" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                </div>
                                <div className="pl-3 w-full">
                                    <div className="flex justify-between ">
                                        <h3 className="text-lg font-bold text-color5">BEETLE CAR</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 p-1 rounded-full text-color5 hover:text-white my-auto cursor-pointer hover:bg-color1 focus:bg-color1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </div>
                                    <div className="flex space-x-4 py-1.5 text-color5">
                                        <div className="text-sm flex space-x-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                            <h3>USA</h3>
                                        </div>
                                        <div className="text-sm flex space-x-1 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                            </svg>
                                            <h3>5 day ago</h3>
                                        </div>
                                    </div>
                                    <h3 className="text-base font-bold text-color5">Price : $501</h3>
                                </div>
                            </div>

                            {/* Carts 01 */}
                            <div className="flex shadow-md rounded-lg p-2">
                                <div className="w-2/3">
                                    <img className="rounded-lg w-full" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                </div>
                                <div className="pl-3 w-full">
                                    <div className="flex justify-between ">
                                        <h3 className="text-lg font-bold text-color5">BEETLE CAR</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 p-1 rounded-full text-color5 hover:text-white my-auto cursor-pointer hover:bg-color1 focus:bg-color1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </div>
                                    <div className="flex space-x-4 py-1.5 text-color5">
                                        <div className="text-sm flex space-x-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                            <h3>USA</h3>
                                        </div>
                                        <div className="text-sm flex space-x-1 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                            </svg>
                                            <h3>5 day ago</h3>
                                        </div>
                                    </div>
                                    <h3 className="text-base font-bold text-color5">Price : $501</h3>
                                </div>
                            </div>

                            {/* Carts 01 */}
                            <div className="flex shadow-md rounded-lg p-2">
                                <div className="w-2/3">
                                    <img className="rounded-lg w-full" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                </div>
                                <div className="pl-3 w-full">
                                    <div className="flex justify-between ">
                                        <h3 className="text-lg font-bold text-color5">BEETLE CAR</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 p-1 rounded-full text-color5 hover:text-white my-auto cursor-pointer hover:bg-color1 focus:bg-color1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </div>
                                    <div className="flex space-x-4 py-1.5 text-color5">
                                        <div className="text-sm flex space-x-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                            <h3>USA</h3>
                                        </div>
                                        <div className="text-sm flex space-x-1 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                            </svg>
                                            <h3>5 day ago</h3>
                                        </div>
                                    </div>
                                    <h3 className="text-base font-bold text-color5">Price : $501</h3>
                                </div>
                            </div>

                            {/* Carts 01 */}
                            <div className="flex shadow-md rounded-lg p-2">
                                <div className="w-2/3">
                                    <img className="rounded-lg w-full" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                </div>
                                <div className="pl-3 w-full">
                                    <div className="flex justify-between ">
                                        <h3 className="text-lg font-bold text-color5">BEETLE CAR</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 p-1 rounded-full text-color5 hover:text-white my-auto cursor-pointer hover:bg-color1 focus:bg-color1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </div>
                                    <div className="flex space-x-4 py-1.5 text-color5">
                                        <div className="text-sm flex space-x-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                            <h3>USA</h3>
                                        </div>
                                        <div className="text-sm flex space-x-1 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                            </svg>
                                            <h3>5 day ago</h3>
                                        </div>
                                    </div>
                                    <h3 className="text-base font-bold text-color5">Price : $501</h3>
                                </div>
                            </div>

                        </div>

                    </div>



                </div>




            </div>




        </div>
    )
}

export default SavedSearches;
