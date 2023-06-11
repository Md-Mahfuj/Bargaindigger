import React from "react";

const PlaceAd = ({ onScroll }) => {

    return (
        <div className="pt-36 px-4 md:px-8 lg:px-20 py-4 flex space-x-2">


            <div className="w-full lg:w-3/4 h-full">
                <div className=" shadow-lg rounded-lg border">
                    <div className="px-4 xl:pl-11 py-6 border-b-2 border-color5 border-opacity-30">
                        <h1 className="text-2xl font-semibold text-color5">Add New</h1>
                    </div>
                    {/* Add Totle input / Caragories selection */}
                    <div className="sm:flex p-4 xl:p-11 w-full space-y-4 sm:space-y-0 sm:space-x-6 2xl:space-x-12">
                        <div className=" space-y-1 sm:space-y-4 w-full">
                            <h1 className="lg:text-xl font-semibold text-color5">Add Title</h1>
                            <input className="border-2 w-full py-2.5 px-5 rounded outline-none border-color5 border-opacity-30 text-color5" placeholder="Import your add title" />
                        </div>
                        <div className=" space-y-1 sm:space-y-4 w-full">
                            <h1 className="lg:text-xl font-semibold text-color5">Category</h1>
                            <section className="flex cursor-pointer justify-between border-2 w-full py-2.5 px-5 rounded outline-none border-color5 border-opacity-30 text-color5" >
                                <h2 className=" opacity-50 text-color5">Select Category</h2>
                                <img className="w-2.5 h-2 my-auto" src="PlaceAd/Polygon 1.png" />
                            </section>
                        </div>
                    </div>

                    {/* Check Box */}
                    <div className="px-4 pt-8 xl:px-11 space-y-4 w-full">
                        <h1 className="lg:text-xl font-semibold text-color5">Type of Condition</h1>
                        <div className="flex space-x-8">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 mt-1 rounded  focus:ring-3 focus:ring-primary-300 " required="" />
                                </div>
                                <div class="ml-3.5 text-sm">
                                    <label for="remember" className="text-base my-auto text-color5">New</label>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 mt-1 rounded  focus:ring-3 focus:ring-primary-300 " required="" />
                                </div>
                                <div class="ml-3.5 text-sm">
                                    <label for="remember" className="text-base my-auto text-color5">Used</label>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* TextArea */}
                    <div className="px-4 xl:px-11 pb-10  pt-8 xl:pt-16">
                        <h1 className="lg:text-xl pb-4 font-semibold text-color5">Description</h1>
                        <textarea id="message" rows="4" class="block p-2.5 w-full h-44 text-sm border-color5 border-2 border-opacity-30 focus:bg-gray-100 rounded-lg outline-none" placeholder="Write your thoughts here..."></textarea>

                    </div>

                </div>



                {/* Ulpode image or video */}
                <div className="py-8 px-4 lg:px-11 shadow-lg rounded-lg  mt-8">

                    <div className="border-2 border-color5 border-opacity-30 rounded-lg pb-5 sm:px-5">

                        <div className="flex pt-4 sm:pt-7 pb-3 pl-2 space-x-4 sm:space-x-14">
                            <button className="sm:text-lg cursor-pointer font-semibold text-color5 text-opacity-70 hover:text-color5 focus:text-color5 outline-none focus:outline-none">Upload Image</button>
                            <button className="sm:text-lg cursor-pointer font-semibold text-color5 text-opacity-70 hover:text-color5 focus:text-color5 outline-none focus:outline-none">Upload Video</button>
                        </div>

                        <div className="flex px-2 items-center justify-center w-full">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-28 rounded cursor-pointer bg-color5 bg-opacity-10 hover:bg-white">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 text-gray-400 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>

                    </div>

                </div>



                {/* Input Name,Email,Address,phone number */}
                <div className=" shadow-lg rounded-lg mt-8 pb-12">

                    <div className="sm:flex p-4 xl:p-11 w-full space-y-4 sm:space-y-0 sm:space-x-6 2xl:space-x-12">
                        <div className="space-y-2 sm:space-y-4 w-full">
                            <h1 className="lg:text-xl font-semibold text-color5">Name</h1>
                            <input className="border-2 w-full py-2.5 px-5 rounded outline-none text-color5 border-color5 border-opacity-30" placeholder="" />
                        </div>
                        <div className="space-y-2 sm:space-y-4 w-full">
                            <h1 className="lg:text-xl font-semibold text-color5">Email</h1>
                            <input className="border-2 w-full py-2.5 px-5 rounded outline-none text-color5 border-color5 border-opacity-30" placeholder="" />
                        </div>
                    </div>
                    <div className="sm:flex px-4 xl:px-11 w-full space-y-4 sm:space-y-0 sm:space-x-6 2xl:space-x-12">
                        <div className="space-y-2 sm:space-y-4 w-full">
                            <h1 className="lg:text-xl font-semibold text-color5">Phone Number</h1>
                            <div className="flex space-x-1 2xl:space-x-4">
                                <input className="border-2 w-full py-2.5 px-5 rounded outline-none text-color5 border-color5 border-opacity-30" placeholder="" />
                                <button className="text-white py-2.5 px-4 2xl:px-9 rounded flex justify-center mx-auto bg-color1 hover:bg-white hover:text-color1 hover:shadow-lg outline-none focus:outline-none">Verified</button>
                            </div>
                        </div>
                        <div className="space-y-2 sm:space-y-4 w-full">
                            <h1 className="lg:text-xl font-semibold text-color5">Address</h1>
                            <input className="border-2 w-full py-2.5 px-5 rounded outline-none text-color5 border-color5 border-opacity-30" placeholder="" />
                        </div>
                    </div>

                    {/* Add Post Package */}
                    <div className="px-4 xl:px-11 mt-8 sm:mt-14 space-y-4 w-full">
                        <h1 className="lg:text-xl font-semibold text-color5">Add Post Package</h1>
                        <div className="flex flex-wrap gap-5 sm:gap-8">
                            <div className=" flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 mt-1 rounded  focus:ring-3 focus:ring-primary-300 " required="" />
                                </div>
                                <div class="ml-3.5 text-sm">
                                    <label for="remember" className="text-base my-auto text-color5">07 Days Free</label>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 mt-1 rounded  focus:ring-3 focus:ring-primary-300 " required="" />
                                </div>
                                <div class="ml-3.5 text-sm">
                                    <label for="remember" className="text-base my-auto text-color5">30 Days / 10$</label>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 mt-1 rounded  focus:ring-3 focus:ring-primary-300 " required="" />
                                </div>
                                <div class="ml-3.5 text-sm">
                                    <label for="remember" className="text-base my-auto text-color5">2 Month / 20$</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex px-4 xl:px-11 pt-8 sm:pt-20 space-x-4">
                        <button className="text-white py-2 sm:py-3 px-4 sm:px-14 text-sm sm:text-base font-bold rounded bg-color4 hover:bg-white hover:text-color4 outline-none focus:outline-none hover:shadow-md">Preview Add</button>
                        <button className="text-white py-2 sm:py-3 px-4 sm:px-14 text-sm sm:text-base font-bold rounded bg-color1 hover:bg-white hover:text-color1 outline-none focus:outline-none hover:shadow-md">Sell Call</button>
                    </div>
                </div>
            </div>




            <div className="w-1/4 hidden lg:block ">
                <div className=" rounded-lg bg-color5">
                    <h2 className="text-white xl:text-xl font-bold py-6 pl-7 border-b border-gray-500" >Terms And Conditiond</h2>
                    <div className="px-7 pt-6 pb-5 space-y-4 ">
                        <div className="flex space-x-4">
                            <img className="w-4 h-4 mt-2" src="PlaceAd/Group.png" />
                            <h3 className="text-sm 2xl:text-lg my-auto text-white">Money not Refundable</h3>
                        </div>
                        <div className="flex space-x-4">
                            <img className="w-4 h-4 mt-2" src="PlaceAd/Group.png" />
                            <h3 className="text-sm 2xl:text-lg my-auto text-white">You Not renew your Premium add
                                after experted</h3>
                        </div>
                        <div className="flex space-x-4">
                            <img className="w-4 h-4 mt-2" src="PlaceAd/Group.png" />
                            <h3 className="text-sm 2xl:text-lg my-auto text-white">Premium ads are active for
                                depend on package.</h3>
                        </div>
                        <div className="pt-5">
                            <button className="text-white text-sm 2xl:text-base py-2.5 px-9 rounded flex justify-center mx-auto bg-color1 hover:bg-white hover:text-color1 outline-none focus:outline-none hover:shadow-md">More</button>
                        </div>
                    </div>

                </div>

                <div className=" rounded-lg mt-6 bg-color5">
                    <h2 className="text-white xl:text-xl font-bold py-6 pl-7 border-b border-gray-500" >Terms And Conditiond</h2>
                    <div className="px-7 pt-6 pb-5 space-y-4 ">
                        <div className="flex space-x-4">
                            <img className="w-4 h-4 mt-2" src="PlaceAd/Group.png" />
                            <h3 className="text-sm 2xl:text-lg my-auto text-white">Money not Refundable</h3>
                        </div>
                        <div className="flex space-x-4">
                            <img className="w-4 h-4 mt-2" src="PlaceAd/Group.png" />
                            <h3 className="text-sm 2xl:text-lg my-auto text-white">You Not renew your Premium add
                                after experted</h3>
                        </div>
                        <div className="flex space-x-4">
                            <img className="w-4 h-4 mt-2" src="PlaceAd/Group.png" />
                            <h3 className="text-sm 2xl:text-lg my-auto text-white">Premium ads are active for
                                depend on package.</h3>
                        </div>
                        <div className="pt-5">
                            <button className="text-white text-sm 2xl:text-base py-2.5 px-9 rounded flex justify-center mx-auto bg-color1 hover:bg-white hover:text-color1 outline-none focus:outline-none hover:shadow-md">More</button>
                        </div>
                    </div>

                </div>

            


                {/* Latest Posts */}
                <div className="">

                    <h2 className="font-semibold text-xl pt-9 pb-5 text-color5">Latest Posts</h2>

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
    )
}

export default PlaceAd;
