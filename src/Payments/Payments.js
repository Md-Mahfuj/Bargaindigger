import React from "react";

const Payment = ({ onScroll }) => {

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


                <div className="shadow-md rounded-lg">

                    <div className=" border-b-2 border-color5 border-opacity-30 py-6">
                        <div className=" px-4">
                            <h2 className="text-xl xl:text-3xl font-semibold text-color5">Add Payment Method</h2>
                        </div>
                    </div>

                    <div className=" border-b-2 border-color5 border-opacity-30">
                        <div className="pt-4 px- flex sm:space-x-16 sm:pt-5 lg:pt-11">
                            <button className="pb-3 px-6 sm:px-8 w-max text-color5 text-opacity-70  cursor-pointer border-b-2 border-white border-opacity-30 hover:text-color5 hover:border-color4 focus:border-color4 focus:text-color5 outline-none focus:outline-none ">
                                <h2 className=" offset sm:text-xl 2xl:text-2xl font-semibold">Paypal</h2>
                            </button>
                            <button className="pb-3 px-6 sm:px-8 w-max text-color5 text-opacity-70  cursor-pointer border-b-2 border-white border-opacity-30 hover:text-color5 hover:border-color4 focus:border-color4 focus:text-color5 outline-none focus:outline-none ">
                                <h2 className=" offset sm:text-xl 2xl:text-2xl font-semibold">Master Card</h2>
                            </button>
                        </div>
                    </div>



                    <div className="px-4 pt-6 lg:pt-14 2xl:pt-16 pb-24 text-color5">
                        <h2 className="py-3 sm:text-lg">Paypal is easiest way to pay online</h2>
                        <img className="hover:opacity-70 pt-4 pb-1.5 cursor-pointer" src="Group 9006.svg" />
                        <p className="flex pt-4 lg:w-5/6">
                            <p className="w-16 pr-2 font-bold ">Note:</p>
                            <p className="flex">  Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                        </p>

                    </div>










                </div>



            </div>





        </div>
    )
}

export default Payment;
