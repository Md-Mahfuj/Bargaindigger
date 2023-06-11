import React from "react";

const Settings = ({ onScroll }) => {

    return (
        <div className="px-4 md:px-8 lg:px-20 py-4 flex lg:space-x-4">



            <div className="w-1/4 hidden lg:block ">
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









            <div className=" w-full lg:w-3/4 h-full">


                <div className="shadow-md rounded-lg text-color5">

                    <div className=" border-b-2 border-color5 border-opacity-30 px-4 py-6 2xl:px-11">
                        <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-semibold ">Settings</h2>
                    </div>

                    {/* Selectio Bar */}
                    <div className="sm:flex sm:space-x-10 2xl:space-x-16 py-10 2xl:py-16 px-4 2xl:px-11">
                        <div className="flex space-y-4 w-full space-x-2 xl:space-x-10 2xl:space-x-32">
                            <h1 className="2xl:text-xl mt-5 pr-1.5 my-auto font-semibold">Currency</h1>
                            <section className="flex cursor-pointer justify-between border-2 w-full py-1.5 2xl:py-2.5 px-5 rounded outline-none border-color5 border-opacity-30" placeholder="Import your add title" >
                                <h2 className=" opacity-50">Select </h2>
                                <img className="w-2.5 h-2 my-auto" src="PlaceAd/Polygon 1.svg" />
                            </section>
                        </div>
                        <div className="flex space-y-4 w-full space-x-2 xl:space-x-10 2xl:space-x-36">
                            <h1 className="2xl:text-xl mt-5 my-auto font-semibold">Language</h1>
                            <section className="flex cursor-pointer justify-between border-2 w-full py-1.5 2xl:py-2.5 px-5 rounded outline-none  border-color5 border-opacity-30" placeholder="Import your add title" >
                                <h2 className=" opacity-50">Select </h2>
                                <img className="w-2.5 h-2 my-auto" src="PlaceAd/Polygon 1.svg" />
                            </section>
                        </div>
                    </div>


                    {/* Check Box */}
                    <div className="sm:flex px-4 2xl:px-11 sm:space-y-4 w-full">
                        <h1 className=" md:w-1/5 mr-2 md:mr-0 2xl:text-xl font-semibold mt-4" >Phone Number :</h1>
                        <div className="pt-3 sm:pt-0 space-y-3 sm:space-y-0 sm:flex sm:space-x-8">
                            <div className="flex items-start">
                                <div className="flex items-center h-5 ">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 mt-1 rounded  focus:ring-primary-300 " required="" />
                                </div>
                                <div class="ml-3.5 text-sm">
                                    <label for="remember" className="text-base my-auto">Visible to Everyone</label>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 mt-1 rounded  focus:ring-3 focus:ring-primary-300 " required="" />
                                </div>
                                <div class="ml-3.5 text-sm">
                                    <label for="remember" className="text-base my-auto">Visible to Only Me</label>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Check Box */}
                    <div className="pt-5 sm:flex px-4 2xl:px-11 sm:space-y-4 w-full">
                        <h1 className="sm:w-1/5 2xl:text-xl font-semibold mt-4">Profile :</h1>
                        <div className="sm:flex pt-3 sm:pt-0 space-y-3 sm:space-y-0 sm:space-x-8">
                            <div className="flex items-start ">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 mt-1 rounded  focus:ring-3 focus:ring-primary-300 " required="" />
                                </div>
                                <div class="ml-3.5 text-sm">
                                    <label for="remember" className="text-base my-auto">Visible to Everyone</label>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 mt-1 rounded  focus:ring-3 focus:ring-primary-300 " required="" />
                                </div>
                                <div class="ml-3.5 text-sm">
                                    <label for="remember" className="text-base my-auto" >Visible to Only Me</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Check Box */}
                    <div className="pt-5 sm:flex px-4 2xl:px-11 sm:space-y-4 w-full">
                        <h1 className="sm:w-1/5 2xl:text-xl font-semibold mt-4">Email :</h1>
                        <div className="sm:flex pt-3 sm:pt-0 space-y-3 sm:space-y-0 sm:space-x-8">
                            <div className="flex items-start ">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 mt-1 rounded  focus:ring-3 focus:ring-primary-300 " required="" />
                                </div>
                                <div class="ml-3.5 text-sm">
                                    <label for="remember" className="text-base my-auto">Visible to Everyone</label>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 mt-1 rounded  focus:ring-3 focus:ring-primary-300 " required="" />
                                </div>
                                <div class="ml-3.5 text-sm">
                                    <label for="remember" className="text-base my-auto" >Visible to Only Me</label>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* OFF ON Switch */}
                    <div className="pt-5 flex px-4 2xl:px-11 space-y-4 w-full">
                        <h1 className=" mr-3 sm:w-1/5 2xl:text-xl font-semibold mt-4">Chat :</h1>
                        <div className="flex sm:space-x-8">
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white  after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">On/Off</span>
                            </label>
                        </div>
                    </div>


                    {/* Check Box */}
                    <div className="pt-5 flex  px-4 2xl:px-11 space-y-4 w-full">
                        <h1 className="mr-3 sm:w-1/5 2xl:text-xl font-semibold mt-4" >Email Notification :</h1>
                        <div className="flex space-x-8">
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white  after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">On/Off</span>
                            </label>
                        </div>
                    </div>


                    {/* Button / Save Changes /Cancel*/}
                    <div className="py-10 px-4 2xl:px-11 space-x-6">

                        <button className="text-white text-sm lg:text-base font-bold py-2 sm:py-3 px-4 sm:px-14 rounded outline-none focus:outline-none  bg-color1 hover:text-color1 hover:bg-white hover:shadow-md">Save Changes</button>
                        <button className="text-white text-sm lg:text-base font-bold py-2 sm:py-3 px-4 sm:px-14 rounded outline-none focus:outline-none  bg-color3 hover:text-color3 hover:bg-white hover:shadow-md" >Cancel</button>

                    </div>

















                </div>



            </div>





        </div>
    )
}

export default Settings;
