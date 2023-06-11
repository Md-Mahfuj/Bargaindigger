import React from "react";

const ExpiredAd = ({ onScroll }) => {

    return (
        <div className="pt-36 sm:px-8 md:px-8 lg:px-20 py-4 lg:flex lg:space-x-4">


            {/* My Dashboard */}
            <div className=" px-4 xs:px-6 sm:px-0 lg:w-1/4 ">
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









            <div className="pt-7 lg:pt-0  pl-4 xs:pl-6 sm:pl-0 lg:w-3/4 h-full lg:shadow-md lg:rounded-lg">


                <div className="">

                    <div className="pr-4 xs:pr-6 lg:pr-0 lg:py-3 ">
                        <h3 className=" sm:text-left text-lg pb-3 lg:px-6 border-b-2 sm:text-xl lg:text-2xl 2xl:text-4xl font-bold text-color5">My Ads</h3>
                    </div>

                    <div className="pb-2">
                        <div className=" flex 2xl:space-x-16 pt-4 pb-0 border-b-2 ">
                            <button className="whitespace-nowrap pb-3 px-2 xs:px-4 sm:px-8 w-max text-color5 text-opacity-70  cursor-pointer border-b-2 border-white border-opacity-30 hover:text-color5 hover:border-color4 focus:border-color4 focus:text-color5 outline-none focus:outline-none ">
                                <h2 className=" offset text-sm sm:text-base 2xl:text-2xl font-semibold">All Ads</h2>
                            </button>
                            <button className="whitespace-nowrap pb-3 px-2 xs:px-4 sm:px-8 w-max text-color5 text-opacity-70  cursor-pointer border-b-2 border-white border-opacity-30 hover:text-color5 hover:border-color4 focus:border-color4 focus:text-color5 outline-none focus:outline-none ">
                                <h2 className=" offset text-sm sm:text-base 2xl:text-2xl font-semibold">Active</h2>
                            </button>
                            <button className="whitespace-nowrap pb-3 px-2 xs:px-4 sm:px-8 w-max text-color5 text-opacity-70  cursor-pointer border-b-2 border-white border-opacity-30 hover:text-color5 hover:border-color4 focus:border-color4 focus:text-color5 outline-none focus:outline-none ">
                                <h2 className=" offset text-sm sm:text-base 2xl:text-2xl font-semibold">Sold</h2>
                            </button>
                            <button className="whitespace-nowrap pb-3 px-2 xs:px-4 sm:px-8 w-max text-color5 text-opacity-70  cursor-pointer border-b-2 border-white border-opacity-30 hover:text-color5 hover:border-color4 focus:border-color4 focus:text-color5 outline-none focus:outline-none ">
                                <h2 className=" offset text-sm sm:text-base 2xl:text-2xl font-semibold">Expired</h2>
                            </button>
                            <button className="whitespace-nowrap pb-3 px-2 xs:px-4 sm:px-8 w-max text-color5 text-opacity-70  cursor-pointer border-b-2 border-white border-opacity-30 hover:text-color5 hover:border-color4 focus:border-color4 focus:text-color5 outline-none focus:outline-none ">
                                <h2 className=" offset text-sm sm:text-base 2xl:text-2xl font-semibold">Bids</h2>
                            </button>

                        </div>
                    </div>



                    <div className="py-6 overflow-x-auto lg:px-8 rounded">

                        <table className="w-full text-sm  2xl:text-xl text-left text-color5 lg:border lg:border-color5">

                            <thead className="text-sm  2xl:text-xl text-color5 lg:border lg:border-color5">
                                <tr className="">
                                    <th scope="col" className="px-6 pt-4 pb-6 lg:py-6 whitespace-nowrap">Item</th>
                                    <th scope="col" className="px-6 pt-4 pb-6 lg:py-6 lg:border-l border-color5 whitespace-nowrap">Category</th>
                                    <th scope="col" className="px-6 pt-4 pb-6 lg:py-6 lg:border-l border-color5 whitespace-nowrap">Price</th>
                                    <th scope="col" className="px-6 pt-4 pb-6 lg:py-6 lg:border-l border-color5 whitespace-nowrap">Add Status</th>
                                    <th scope="col" className="pl-6 pr-36 pb-6 pt-4 lg:py-6 lg:border-l border-color5 whitespace-nowrap">Action</th>
                                </tr>
                            </thead>

                            <tbody className="">

                                {/* Table 1 */}
                                <tr className="border-t border-color5 border-opacity-30 lg:border-opacity-100 ">
                                    <th scope="row" className="px-6 pr-16 py-4 whitespace-nowrap  font-medium text-gray-900  dark:text-white">
                                        <div className="flex ">
                                            <img className="w-14 h-11 2xl:w-20 2xl:h-16 object-cover cursor-pointer rounded-md" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                            <div className="pl-2">
                                                <h3 className="text-sm xl:text-base 2xl:text-2xl font-bold text-color5">BEETLE CAR</h3>
                                                <div className="text-sm  flex space-x-1 text-color5">
                                                    <svg xmlns="http://www0.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 2xl:w-5 2xl:h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                                    </svg>
                                                    <h3 className="text-xs 2xl:text-sm">5 day ago</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4 whitespace-nowrap lg:border-l lg:border-color5 ">Vehicles</td>
                                    <td className="px-6 py-4 whitespace-nowrap lg:border-l lg:border-color5 ">150.00$</td>
                                    <td className="px-6 py-4 whitespace-nowrap lg:border-l lg:border-color5  font-bold">Sold</td>
                                    <td className="px-6 py-4 whitespace-nowrap lg:border-l lg:border-color5 ">
                                        <div className="flex gap-3">
                                            <img className="w-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8961.svg" />
                                            <img className="w-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8962.svg" />
                                            <img className="w-20 2xl:w-28 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8984.svg" />
                                        </div>
                                    </td>
                                </tr>


                                {/* Table 1 */}
                                <tr className="border-t border-color5 border-opacity-30 lg:border-opacity-100 ">
                                    <th scope="row" className="px-6 pr-16 py-4 whitespace-nowrap  font-medium text-gray-900  dark:text-white">
                                        <div className="flex ">
                                            <img className="w-14 h-11 2xl:w-20 2xl:h-16 object-cover cursor-pointer rounded-md" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                            <div className="pl-2">
                                                <h3 className="text-sm xl:text-base 2xl:text-2xl font-bold text-color5">BEETLE CAR</h3>
                                                <div className="text-sm  flex space-x-1 text-color5">
                                                    <svg xmlns="http://www0.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 2xl:w-5 2xl:h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                                    </svg>
                                                    <h3 className="text-xs 2xl:text-sm">5 day ago</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4 whitespace-nowrap lg:border-l lg:border-color5 ">Vehicles</td>
                                    <td className="px-6 py-4 whitespace-nowrap lg:border-l lg:border-color5 ">150.00$</td>
                                    <td className="px-6 py-4 whitespace-nowrap lg:border-l lg:border-color5  font-bold">Sold</td>
                                    <td className="px-6 py-4 whitespace-nowrap lg:border-l lg:border-color5 ">
                                        <div className="flex gap-3">
                                            <img className="w-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8961.svg" />
                                            <img className="w-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8962.svg" />
                                            <img className="w-20 2xl:w-28 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8984.svg" />
                                        </div>
                                    </td>
                                </tr>


                                {/* Table 1 */}
                                <tr className="border-t border-color5 border-opacity-30 lg:border-opacity-100 ">
                                    <th scope="row" className="px-6 pr-16 py-4 whitespace-nowrap  font-medium text-gray-900  dark:text-white">
                                        <div className="flex ">
                                            <img className="w-14 h-11 2xl:w-20 2xl:h-16 object-cover cursor-pointer rounded-md" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                            <div className="pl-2">
                                                <h3 className="text-sm xl:text-base 2xl:text-2xl font-bold text-color5">BEETLE CAR</h3>
                                                <div className="text-sm  flex space-x-1 text-color5">
                                                    <svg xmlns="http://www0.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 2xl:w-5 2xl:h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                                    </svg>
                                                    <h3 className="text-xs 2xl:text-sm">5 day ago</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4 whitespace-nowrap lg:border-l lg:border-color5 ">Vehicles</td>
                                    <td className="px-6 py-4 whitespace-nowrap lg:border-l lg:border-color5 ">150.00$</td>
                                    <td className="px-6 py-4 whitespace-nowrap lg:border-l lg:border-color5  font-bold">Sold</td>
                                    <td className="px-6 py-4 whitespace-nowrap lg:border-l lg:border-color5 ">
                                        <div className="flex gap-3">
                                            <img className="w-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8961.svg" />
                                            <img className="w-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8962.svg" />
                                            <img className="w-20 2xl:w-28 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8984.svg" />
                                        </div>
                                    </td>
                                </tr>


                                {/* Table 1 */}
                                <tr className="border-t border-color5 border-opacity-30 lg:border-opacity-100 ">
                                    <th scope="row" className="px-6 pr-16 py-4 whitespace-nowrap  font-medium text-gray-900  dark:text-white">
                                        <div className="flex ">
                                            <img className="w-14 h-11 2xl:w-20 2xl:h-16 object-cover cursor-pointer rounded-md" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                            <div className="pl-2">
                                                <h3 className="text-sm xl:text-base 2xl:text-2xl font-bold text-color5">BEETLE CAR</h3>
                                                <div className="text-sm  flex space-x-1 text-color5">
                                                    <svg xmlns="http://www0.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 2xl:w-5 2xl:h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                                    </svg>
                                                    <h3 className="text-xs 2xl:text-sm">5 day ago</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4 whitespace-nowrap lg:border-l lg:border-color5 ">Vehicles</td>
                                    <td className="px-6 py-4 whitespace-nowrap lg:border-l lg:border-color5 ">150.00$</td>
                                    <td className="px-6 py-4 whitespace-nowrap lg:border-l lg:border-color5  font-bold">Sold</td>
                                    <td className="px-6 py-4 whitespace-nowrap lg:border-l lg:border-color5 ">
                                        <div className="flex gap-3">
                                            <img className="w-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8961.svg" />
                                            <img className="w-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8962.svg" />
                                            <img className="w-20 2xl:w-28 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8984.svg" />
                                        </div>
                                    </td>
                                </tr>




                            </tbody>
                        </table>
                    </div>





                </div>



            </div>








        </div>
    )
}

export default ExpiredAd;
