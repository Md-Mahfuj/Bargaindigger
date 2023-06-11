
import React from "react";

const Subscription = ({ onScroll }) => {

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









            <div className="w-full lg:w-3/4 h-full">


                <div className="shadow-md rounded-lg text-color5">

                    <div className=" border-b-2 border-color5 border-opacity-30 py-6">
                        <div className=" px-4">
                            <h2 className=" text-xl md:text-2xl 2xl:text-3xl font-semibold ">Current Plan</h2>
                        </div>
                    </div>

                    <div className="">
                        <div className="flex justify-center px-4 py-8">
                            <img className="w-6 h-6 2xl:w-7 2xl:h-7 my-auto mr-2 2xl:mr-4" src="Subscription/Group 9026.png" />
                            <h2 className="my-auto text-sm md:text-lg 2xl:text-xl font-medium">To Keep Using This Account After The Trial Ends, Set A Subscription</h2>
                        </div>


                        <div className="px-4 md:px-10 lg:px-4 pb-10 2xl:pt-4 space-y-6 sm:space-y-0 sm:flex gap-2 md:gap-7 lg:gap-4 2xl:gap-20 justify-center">

                            {/* Subscription Cart */}
                            <div className="w-60 mx-auto sm:w-1/3  shadow-lg border text-color5" style={{ "border-radius": "20px" }}>
                                <div className="text-center pb-7 2xl:pb-10 border-b xl:px-4 lg:px-7 pt-7 border-color5 border-opacity-80">
                                    <h2 className=" text-2xl 2xl:text-3xl font-semibold ">BASIC</h2>
                                    <h2 className="pt-0.5 text-xs 2xl:text-sm" >1 Ads For New Accounts</h2>

                                    <div className="py-3 2xl:py-5  2xl:pb-7 flex justify-center">
                                        <h2 className=" text-xl 2xl:text-2xl " >$</h2>
                                        <h2 className=" text-4xl 2xl:text-5xl font-semibold ">00</h2>
                                        <h2 className=" text-sm 2xl:text-lg mt-3 2xl:mt-5 ">/month</h2>
                                    </div>
                                        <button type="submit" class="w-max h-full focus:outline-none text-sm font-bold text-white hover:bg-white hover:text-color-1 bg-color1 hover:text-color1 shadow-lg rounded-full px-6 xl:px-10 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"  >Add to Cart</button>
                                </div>

                                <div className="px-7 pt-8 pb-4 flex justify-center">
                                    <div className="space-y-4 text-color5">
                                        <div className="flex space-x-3 2xl:space-x-4 ">
                                            <img className="w-3 h-3 mt-1.5" src="Subscription/icon _check_.png" />
                                            <h3 className=" text-xs 2xl:text-sm my-auto">Lorem ipsum dolor sit amet</h3>
                                        </div>
                                        <div className="flex space-x-3 2xl:space-x-4">
                                            <img className="w-3 h-3 mt-1.5" src="Subscription/icon _check_.png" />
                                            <h3 className=" text-xs 2xl:text-sm my-auto">Lorem ipsum dolor sit</h3>
                                        </div>
                                        <div className="flex space-x-3 2xl:space-x-4">
                                            <img className="w-3 h-3 mt-1.5" src="Subscription/icon _check_.png" />
                                            <h3 className=" text-xs 2xl:text-sm my-auto">Lorem ipsum dolor sit amet</h3>
                                        </div>
                                        <div className="flex space-x-3 2xl:space-x-4">
                                            <img className="w-3 h-3 mt-1.5" src="Subscription/icon _check_.png" />
                                            <h3 className=" text-xs 2xl:text-sm my-auto">Lorem ipsum dolor sit amet</h3>
                                        </div>
                                        <div className="flex justify-center">
                                            <button className="font-semibold text-sm">See all features</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                          
                            {/* Subscription Cart */}
                            <div className="w-60 mx-auto sm:w-1/3  shadow-lg border text-color5" style={{ "border-radius": "20px" }}>
                                <div className="text-center pb-7 2xl:pb-10 border-b px-4 lg:px-7 pt-7 border-color5 border-opacity-80">
                                    <h2 className=" text-2xl 2xl:text-3xl font-semibold ">STANDARD</h2>
                                    <h2 className="pt-0.5 text-xs 2xl:text-sm" >10 Ads For month</h2>

                                    <div className="py-3 2xl:py-5  2xl:pb-7 flex justify-center">
                                        <h2 className=" text-xl 2xl:text-2xl " >$</h2>
                                        <h2 className=" text-4xl 2xl:text-5xl font-semibold ">50</h2>
                                        <h2 className=" text-sm 2xl:text-lg mt-3 2xl:mt-5 ">/month</h2>
                                    </div>
                                        <button type="submit" class="w-max h-full focus:outline-none text-sm font-bold text-white hover:bg-white hover:text-color-1 bg-color1 hover:text-color1 shadow-lg rounded-full px-6 xl:px-10 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"  >Add to Cart</button>
                                </div>

                                <div className="px-7 pt-8 pb-4 flex justify-center">
                                    <div className="space-y-4 text-color5">
                                        <div className="flex space-x-3 2xl:space-x-4 ">
                                            <img className="w-3 h-3 mt-1.5" src="Subscription/icon _check_.png" />
                                            <h3 className=" text-xs 2xl:text-sm my-auto">Lorem ipsum dolor sit amet</h3>
                                        </div>
                                        <div className="flex space-x-3 2xl:space-x-4">
                                            <img className="w-3 h-3 mt-1.5" src="Subscription/icon _check_.png" />
                                            <h3 className=" text-xs 2xl:text-sm my-auto">Lorem ipsum dolor sit</h3>
                                        </div>
                                        <div className="flex space-x-3 2xl:space-x-4">
                                            <img className="w-3 h-3 mt-1.5" src="Subscription/icon _check_.png" />
                                            <h3 className=" text-xs 2xl:text-sm my-auto">Lorem ipsum dolor sit amet</h3>
                                        </div>
                                        <div className="flex space-x-3 2xl:space-x-4">
                                            <img className="w-3 h-3 mt-1.5" src="Subscription/icon _check_.png" />
                                            <h3 className=" text-xs 2xl:text-sm my-auto">Lorem ipsum dolor sit amet</h3>
                                        </div>
                                        <div className="flex justify-center">
                                            <button className="font-semibold text-sm">See all features</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                          
                            {/* Subscription Cart */}
                            <div className="w-60 mx-auto sm:w-1/3  shadow-lg border text-color5" style={{ "border-radius": "20px" }}>
                                <div className="text-center pb-7 2xl:pb-10 border-b px-4 lg:px-7 pt-7 border-color5 border-opacity-80">
                                    <h2 className=" text-2xl 2xl:text-3xl font-semibold ">PREMIUM</h2>
                                    <h2 className="pt-0.5 text-xs 2xl:text-sm" >15 Ads For month</h2>

                                    <div className="py-3 2xl:py-5  2xl:pb-7 flex justify-center">
                                        <h2 className=" text-xl 2xl:text-2xl " >$</h2>
                                        <h2 className=" text-4xl 2xl:text-5xl font-semibold ">70</h2>
                                        <h2 className=" text-sm 2xl:text-lg mt-3 2xl:mt-5 ">/month</h2>
                                    </div>
                                        <button type="submit" class="w-max h-full focus:outline-none text-sm font-bold text-white hover:bg-white hover:text-color-1 bg-color1 hover:text-color1 shadow-lg rounded-full px-6 xl:px-10 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"  >Add to Cart</button>
                                </div>

                                <div className="px-7 pt-8 pb-4 flex justify-center">
                                    <div className="space-y-4 text-color5">
                                        <div className="flex space-x-3 2xl:space-x-4 ">
                                            <img className="w-3 h-3 mt-1.5" src="Subscription/icon _check_.png" />
                                            <h3 className=" text-xs 2xl:text-sm my-auto">Lorem ipsum dolor sit amet</h3>
                                        </div>
                                        <div className="flex space-x-3 2xl:space-x-4">
                                            <img className="w-3 h-3 mt-1.5" src="Subscription/icon _check_.png" />
                                            <h3 className=" text-xs 2xl:text-sm my-auto">Lorem ipsum dolor sit</h3>
                                        </div>
                                        <div className="flex space-x-3 2xl:space-x-4">
                                            <img className="w-3 h-3 mt-1.5" src="Subscription/icon _check_.png" />
                                            <h3 className=" text-xs 2xl:text-sm my-auto">Lorem ipsum dolor sit amet</h3>
                                        </div>
                                        <div className="flex space-x-3 2xl:space-x-4">
                                            <img className="w-3 h-3 mt-1.5" src="Subscription/icon _check_.png" />
                                            <h3 className=" text-xs 2xl:text-sm my-auto">Lorem ipsum dolor sit amet</h3>
                                        </div>
                                        <div className="flex justify-center">
                                            <button className="font-semibold text-sm">See all features</button>
                                        </div>
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

export default Subscription;
