import React from "react";

const Chat = ({ onScroll }) => {

    return (
        <div className="px-4 md:px-8 lg:px-20 py-4 flex space-x-4">



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





            <div className="w-full flex space-x-4 h-full ">

                <div className=" w-1/3 shadow-xl rounded-lg text-color5">

                    <div className=" border-b-2 border-gray-300 px-4 py-6 2xl:px-11">
                        <h2 className="text-2xl 2xl:text-3xl font-semibold ">Message</h2>
                    </div>

                    {/* Search Bar */}
                    <div className=" border-gray-300 px-4 py-6 ">
                        <div className="my-auto">
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" class="w-full px-4 py-2 pl-10 text-sm outline-none border-2 border-gray-300 rounded" placeholder="Search" />
                            </div>
                        </div>
                    </div>

                    {/* Conversation profile */}
                    <div>

                        {/* Person 01 */}
                        <div className="flex py-5 px-4 2xl:pl-7 hover:bg-gray-100 cursor-pointer border-t-2">
                            <img className="w-11 h-11 object-cover rounded-full" src="ProductDetails01/Ellipse 127.png" />
                            <div className="pl-4">
                                <h2 className=" cursor-pointer text-sm font-bold " >Brooklyn Simmons</h2>
                                <h2 className="mt-1 text-xs ">ID #30599823</h2>
                                <h2 className="mt-2 text-xs ">Lorem Ipsum is simply dummy text</h2>
                            </div>
                            <h2 className="mt-1 text-xs ">5m</h2>
                        </div>

                        {/* Person 01 */}
                        <div className="flex py-5 px-4 2xl:pl-7 hover:bg-gray-100 cursor-pointer border-t-2">
                            <img className="w-11 h-11 object-cover rounded-full" src="ProductDetails01/Ellipse 127.png" />
                            <div className="pl-4">
                                <h2 className=" cursor-pointer text-sm font-bold ">Brooklyn Simmons</h2>
                                <h2 className="mt-1 text-xs ">ID #30599823</h2>
                                <h2 className="mt-2 text-xs ">Lorem Ipsum is simply dummy text</h2>
                            </div>
                            <h2 className="mt-1 text-xs ">5m</h2>
                        </div>

                        {/* Person 01 */}
                        <div className="flex py-5 px-4 2xl:pl-7 hover:bg-gray-100 cursor-pointer border-t-2">
                            <img className="w-11 h-11 object-cover rounded-full" src="ProductDetails01/Ellipse 127.png" />
                            <div className="pl-4">
                                <h2 className=" cursor-pointer text-sm font-bold ">Brooklyn Simmons</h2>
                                <h2 className="mt-1 text-xs ">ID #30599823</h2>
                                <h2 className="mt-2 text-xs ">Lorem Ipsum is simply dummy text</h2>
                            </div>
                            <h2 className="mt-1 text-xs ">5m</h2>
                        </div>

                        {/* Person 01 */}
                        <div className="flex py-5 px-4 2xl:pl-7 hover:bg-gray-100 cursor-pointer border-t-2">
                            <img className="w-11 h-11 object-cover rounded-full" src="ProductDetails01/Ellipse 127.png" />
                            <div className="pl-4">
                                <h2 className=" cursor-pointer text-sm font-bold ">Brooklyn Simmons</h2>
                                <h2 className="mt-1 text-xs ">ID #30599823</h2>
                                <h2 className="mt-2 text-xs ">Lorem Ipsum is simply dummy text</h2>
                            </div>
                            <h2 className="mt-1 text-xs ">5m</h2>
                        </div>

                        {/* Person 01 */}
                        <div className="flex py-5 px-4 2xl:pl-7 hover:bg-gray-100 cursor-pointer border-t-2">
                            <img className="w-11 h-11 object-cover rounded-full" src="ProductDetails01/Ellipse 127.png" />
                            <div className="pl-4">
                                <h2 className=" cursor-pointer text-sm font-bold ">Brooklyn Simmons</h2>
                                <h2 className="mt-1 text-xs ">ID #30599823</h2>
                                <h2 className="mt-2 text-xs ">Lorem Ipsum is simply dummy text</h2>
                            </div>
                            <h2 className="mt-1 text-xs ">5m</h2>
                        </div>


                    </div>
                </div>











                {/* Conversation {chat } */}
                <div className=" w-full lg:w-2/3 shadow-lg h-full rounded-lg text-color5">
                    <div className="pt-20">

                        <div className=" border-b-2 border-t-2 border-gray-300 px-4 2xl:px-9 py-5">
                            <div className="flex">
                                <img className="w-11 h-11 object-cover rounded-full" src="ProductDetails01/Ellipse 127.png" />
                                <div className="pl-4 py-0.5">
                                    <h2 className=" cursor-pointer text- font-bold ">Brooklyn Simmons</h2>
                                    <h2 className="mt-1 text-xs ">ID #30599823</h2>
                                </div>
                            </div>
                        </div>

                        {/* Message Date or Time */}
                        <div className="mx-auto w-max text-sm bg-color5 bg-opacity-10 rounded-full my-4 2xl:mt-6 py-1 px-4 2xl:py-2 2xl:px-6">June 21</div>

                    </div>


                    {/* Chat {Message} */}
                    <div className=" h-full px-4 2xl:px-9 space-y-10 2xl:space-y-16">

                        {/* Left */}
                        <div className="flex w-full ">
                            <img className="w-11 h-11 object-cover rounded-full" src="ProductDetails01/Ellipse 127.png" />
                            <div className="2xl:pl-7 pl-5">
                                <img className="w-4/5" src="Chat/Mask group.png" />
                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex w-full">
                            <div className=" bg-color5 bg-opacity-10 pt-2 px-2 pb-3 mr-5 rounded-lg">
                                <text className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</text>
                            </div>
                            <img className=" w-11 h-11 object-cover rounded-full" src="ProductDetails01/Ellipse 127.png" />
                        </div>


                        {/* Left */}
                        <div className="flex w-full ">
                            <img className="w-11 h-11 object-cover rounded-full" src="ProductDetails01/Ellipse 127.png" />
                            <div className=" border border-color5 border-opacity-20 pt-2 px-2 pb-3 ml-5 rounded-lg">
                                <text className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</text>
                            </div>
                        </div>



                    </div>


                    {/* Message input   */}
                    <div className="px-4 2xl:px-9 pt-16 pb-6 ">
                        <form className="border border-color5 border-opacity-20 rounded bg-white">
                            <div class="flex">
                                <input type="" id="search" class=" w-full outline-none rounded py-3.5 px-3.5 text-sm text-color5 " placeholder="Write a message..." required />
                                <div type="submit" class=" flex justify-center space-x-4 pr-4 pt-2.5">
                                    <img className="w-6 h-6 cursor-pointer" src="Chat/url.png" />
                                    <img className="w-6 h-6 cursor-pointer" src="Chat/Vector.png" />
                                    <img className="w-6 h-6 cursor-pointer hover:opacity-60" src="Chat/Group 8992.png" />
                                </div>
                            </div>
                        </form>
                    </div>





















                </div>


            </div>









        </div>
    )
}

export default Chat;
