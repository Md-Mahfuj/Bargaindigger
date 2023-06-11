import React from "react";

const Bids = ({ onScroll }) => {

    return (
        <div className="px-4 md:px-8 lg:px-20 py-4 flex space-x-4">



            <div className="w-1/4 ">
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









            <div className="w-3/4 h-full">


                <div className="shadow-md rounded-lg">

                    <div className=" border-b-2">
                        <div className="py-4 px-4 flex space-x-16 pt-6 pb-3">
                            <h2 className="text-xl font-semibold text-opacity-70 hover:text-opacity-100 cursor-pointer text-color5">All Ads</h2>
                            <h2 className="text-xl font-semibold text-opacity-70 hover:text-opacity-100 cursor-pointer text-color5">Active</h2>
                            <h2 className="text-xl font-semibold text-opacity-70 hover:text-opacity-100 cursor-pointer text-color5">Sold</h2>
                            <h2 className="text-xl font-semibold text-opacity-70 hover:text-opacity-100 cursor-pointer text-color5">Expired</h2>
                            <h2 className="text-xl font-semibold text-opacity-70 hover:text-opacity-100 cursor-pointer text-color5">Bids</h2>
                        </div>
                    </div>







                    <div className="px-4 py-8 space-y-4">


                        {/* Table */}
                        <div className="w-full ">

                            {/* Table Frist */}
                            <div className="flex border-l border-r border-t rounded-t text-color5 border-color5">
                                <div className=" px-6 py-4 2xl:py-6 border-color5">
                                    <div className="flex ">
                                        <img className="w-20 h-16 object-cover cursor-pointer rounded-md" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                        <div className=" pl-7 my-auto flex">
                                            <h3 className="text-3xl my-auto 2xl:text-4xl font-bold">BEETLE CAR</h3>
                                            <h3 className="pl-8 my-auto 2xl:text-lg font-medium" style={{ "color": "#EA4335" }}>VIN: 5TDBT48A23S173329</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Table Frist */}
                            <div className="flex border-l border-r border-t text-color5 border-color5">
                                <div className="w-1/3 flex px-6 py-6 2xl:py-9 border-r border-color5">
                                    <h2 className="font-bold 2xl:text-lg">Name</h2>
                                </div>
                                <div className="w-1/5 border-r px-6 py-6 2xl:py-9 border-color5">
                                    <h2 className="font-bold 2xl:text-lg">Price</h2>
                                </div>
                                <div className="w-1/3 border-r px-6 py-6 2xl:py-9 border-color5">
                                    <h2 className="font-bold 2xl:text-lg">Date</h2>
                                </div>

                                <div className="w-1/3 py-6 2xl:py-8 pl-6  border-color5">
                                    <h2 className="font-bold 2xl:text-lg">Action</h2>
                                </div>
                            </div>



                            {/* Table 01 */}
                            <div className="flex border-l border-r border-t text-color5 border-color5" >
                                <div className="w-1/3 flex px-6 py-6 2xl:py-9 border-r border-color5">
                                    <h2 className=" 2xl:text-lg">Tommy</h2>
                                </div>
                                <div className="w-1/5 border-r px-6 py-6 2xl:py-9 border-color5">
                                    <h2 className=" 2xl:text-lg">500.00$</h2>
                                </div>
                                <div className="w-1/3 border-r px-6 py-6 2xl:py-9 border-color5">
                                    <h2 className=" 2xl:text-lg">4/27/2023, 1:58:18 PM</h2>
                                </div>

                                <div className="w-1/3 py-6 2xl:py-8 pl-6  border-color5">
                                    <div className="flex gap-3">
                                        <img className="w-9 h-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8961.png" />
                                        <img className="w-9 h-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8962.png" />
                                        <img className="w-9 h-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8966.png" />
                                    </div>
                                </div>
                            </div>


                            {/* Table 2 */}
                            <div className="flex border-l border-r border-t text-color5 border-color5">
                                <div className="w-1/3 flex px-6 py-6 2xl:py-9 border-r border-color5">
                                    <h2 className=" 2xl:text-lg">Tommy</h2>
                                </div>
                                <div className="w-1/5 border-r px-6 py-6 2xl:py-9 border-color5">
                                    <h2 className=" 2xl:text-lg">500.00$</h2>
                                </div>
                                <div className="w-1/3 border-r px-6 py-6 2xl:py-9 border-color5">
                                    <h2 className=" 2xl:text-lg">4/27/2023, 1:58:18 PM</h2>
                                </div>

                                <div className="w-1/3 py-6 2xl:py-8 pl-6  border-color5">
                                    <div className="flex gap-3">
                                        <img className="w-9 h-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8961.png" />
                                        <img className="w-9 h-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8962.png" />
                                        <img className="w-9 h-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8966.png" />
                                    </div>
                                </div>
                            </div>



                            {/* Table Last */}
                            <div className="flex border rounded-b text-color5 border-color5">
                                <div className="w-1/3 flex px-6 py-6 2xl:py-9 border-r border-color5">
                                    <h2 className=" 2xl:text-lg">Tommy</h2>
                                </div>
                                <div className="w-1/5 border-r px-6 py-6 2xl:py-9 border-color5">
                                    <h2 className=" 2xl:text-lg">500.00$</h2>
                                </div>
                                <div className="w-1/3 border-r px-6 py-6 2xl:py-9 border-color5">
                                    <h2 className=" 2xl:text-lg">4/27/2023, 1:58:18 PM</h2>
                                </div>

                                <div className="w-1/3 py-6 2xl:py-8 pl-6  border-color5">
                                    <div className="flex gap-3">
                                        <img className="w-9 h-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8961.png" />
                                        <img className="w-9 h-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8962.png" />
                                        <img className="w-9 h-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8966.png" />
                                    </div>
                                </div>
                            </div>


                        </div>




                        {/* New Table */}
                        <div className="w-full ">

                            {/* Table Frist */}
                            <div className="flex border-l border-r border-t rounded-t text-color5 border-color5">
                                <div className=" px-6 py-4 2xl:py-6 border-color5">
                                    <div className="flex ">
                                        <img className="w-20 h-16 object-cover cursor-pointer rounded-md" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                                        <div className=" pl-7 my-auto flex">
                                            <h3 className="text-3xl my-auto 2xl:text-4xl font-bold">BEETLE CAR</h3>
                                            <h3 className="pl-8 my-auto 2xl:text-lg font-medium" style={{ "color": "#EA4335" }}>VIN: 5TDBT48A23S173329</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Table Frist */}
                            <div className="flex border-l border-r border-t text-color5 border-color5">
                                <div className="w-1/3 flex px-6 py-6 2xl:py-9 border-r border-color5">
                                    <h2 className="font-bold 2xl:text-lg">Name</h2>
                                </div>
                                <div className="w-1/5 border-r px-6 py-6 2xl:py-9 border-color5">
                                    <h2 className="font-bold 2xl:text-lg">Price</h2>
                                </div>
                                <div className="w-1/3 border-r px-6 py-6 2xl:py-9 border-color5">
                                    <h2 className="font-bold 2xl:text-lg">Date</h2>
                                </div>

                                <div className="w-1/3 py-6 2xl:py-8 pl-6  border-color5">
                                    <h2 className="font-bold 2xl:text-lg">Action</h2>
                                </div>
                            </div>



                            {/* Table 01 */}
                            <div className="flex border-l border-r border-t text-color5 border-color5" >
                                <div className="w-1/3 flex px-6 py-6 2xl:py-9 border-r border-color5">
                                    <h2 className=" 2xl:text-lg">Tommy</h2>
                                </div>
                                <div className="w-1/5 border-r px-6 py-6 2xl:py-9 border-color5">
                                    <h2 className=" 2xl:text-lg">500.00$</h2>
                                </div>
                                <div className="w-1/3 border-r px-6 py-6 2xl:py-9 border-color5">
                                    <h2 className=" 2xl:text-lg">4/27/2023, 1:58:18 PM</h2>
                                </div>

                                <div className="w-1/3 py-6 2xl:py-8 pl-6  border-color5">
                                    <div className="flex gap-3">
                                        <img className="w-9 h-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8961.png" />
                                        <img className="w-9 h-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8962.png" />
                                        <img className="w-9 h-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8966.png" />
                                    </div>
                                </div>
                            </div>


                            {/* Table 2 */}
                            <div className="flex border-l border-r border-t text-color5 border-color5">
                                <div className="w-1/3 flex px-6 py-6 2xl:py-9 border-r border-color5">
                                    <h2 className=" 2xl:text-lg">Tommy</h2>
                                </div>
                                <div className="w-1/5 border-r px-6 py-6 2xl:py-9 border-color5">
                                    <h2 className=" 2xl:text-lg">500.00$</h2>
                                </div>
                                <div className="w-1/3 border-r px-6 py-6 2xl:py-9 border-color5">
                                    <h2 className=" 2xl:text-lg">4/27/2023, 1:58:18 PM</h2>
                                </div>

                                <div className="w-1/3 py-6 2xl:py-8 pl-6  border-color5">
                                    <div className="flex gap-3">
                                        <img className="w-9 h-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8961.png" />
                                        <img className="w-9 h-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8962.png" />
                                        <img className="w-9 h-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8966.png" />
                                    </div>
                                </div>
                            </div>



                            {/* Table Last */}
                            <div className="flex border rounded-b text-color5 border-color5">
                                <div className="w-1/3 flex px-6 py-6 2xl:py-9 border-r border-color5">
                                    <h2 className=" 2xl:text-lg">Tommy</h2>
                                </div>
                                <div className="w-1/5 border-r px-6 py-6 2xl:py-9 border-color5">
                                    <h2 className=" 2xl:text-lg">500.00$</h2>
                                </div>
                                <div className="w-1/3 border-r px-6 py-6 2xl:py-9 border-color5">
                                    <h2 className=" 2xl:text-lg">4/27/2023, 1:58:18 PM</h2>
                                </div>

                                <div className="w-1/3 py-6 2xl:py-8 pl-6  border-color5">
                                    <div className="flex gap-3">
                                        <img className="w-9 h-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8961.png" />
                                        <img className="w-9 h-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8962.png" />
                                        <img className="w-9 h-9 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-40" src="AllAd/Group 8966.png" />
                                    </div>
                                </div>
                            </div>


                        </div>



                    </div>








                </div>



            </div>





        </div>
    )
}

export default Bids;
