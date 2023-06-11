import React from "react";
import { Button } from "react-scroll";

const SubCategories = ({ onScroll }) => {

    return (
        <div className="">
            <div className="flex justify-center items-center h-screen">
                <div className="bg-cover bg-center h-full w-full"
                    style={{ backgroundImage: "url('SubCategories/SubCatagories.png')", }}>




                    <div className="py-10 md:px-8 lg:px-20">




                        <div className="w-2/3 ">

                            <div className=" text-white flex justify-between">
                                <h3 className="text-xl font-bold my-auto">Subcategories</h3>
                                <div className="flex space-x-5">
                                    <h3 className="my-auto cursor-pointer">Filters</h3>
                                    <button className="py-3 px-12 my-auto bg-color4 text-color3 rounded hover:bg-white hover:text-color4 font-bold">Reset All</button>
                                </div>
                            </div>


                            <div className="grid grid-cols-2 sm:grid-cols-4 py-2.5 gap-4 ">
                                <img className=" cursor-pointer" src="SubCategories/Cleaning_categories 1.png" />
                                <img className=" cursor-pointer" src="SubCategories/Construction_categories 1.png" />
                                <img className=" cursor-pointer" src="SubCategories/Transport_categories 1.png" />
                                <img className=" cursor-pointer" src="SubCategories/TOURISM_categories 1.png" />
                                <img className=" cursor-pointer" src="SubCategories/HOTELS AND B&B_categories 1.png" />
                                <img className=" cursor-pointer" src="SubCategories/Restaurants_categories_categories 1.png" />
                                <img className=" cursor-pointer" src="SubCategories/Health_categories 1.png" />
                                <img className=" cursor-pointer" src="SubCategories/BEAUTY SERVICES_categories 1.png" />
                                <img className=" cursor-pointer" src="SubCategories/Sport & fitness_categories 1.png" />
                                <img className=" cursor-pointer" src="SubCategories/Courses_categories 1.png" />
                                <img className=" cursor-pointer" src="SubCategories/Web & graphic_categories 1.png" />
                                <img className=" cursor-pointer" src="SubCategories/Babysitting_categories 2.png" />
                                <img className=" cursor-pointer" src="SubCategories/Tax & accounting_categories 1.png" />
                                <img className=" cursor-pointer" src="SubCategories/Other_categories 1.png" />
                            </div>



                            <div className="py-4">

                                <div className="flex space-x-4">
                                    <div className=" w-full space-y-3">
                                        <h3 className="font-bold text-white">Country</h3>
                                        <div className="flex bg-white px-9 py-3.5 rounded-md border justify-between cursor-pointer" style={{ "color": "#0E3860" }}>
                                            <h3 className="my-auto ">Ireland</h3>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
                                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className=" w-full space-y-3">
                                        <h3 className="font-bold text-white">Location</h3>
                                        <div className="flex bg-white px-9 py-3.5 rounded-md border justify-between cursor-pointer" style={{ "color": "#0E3860" }}>
                                            <h3 className="my-auto ">Select State</h3>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
                                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>


                                <div className="py-6 space-y-3 ">
                                    <h3 className="font-bold text-white">Price</h3>

                                    <div className="flex space-x-4">
                                        <div className="flex w-full bg-white px-9 py-3.5 rounded-md">
                                            <div className="w-full pr-9 border-r-2 flex  justify-between cursor-pointer" style={{ "color": "#0E3860", "border-color": "#0E3860" }}>
                                                <h3 className="my-auto ">From</h3>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
                                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="w-full pl-9 flex justify-between cursor-pointer" style={{ "color": "#0E3860" }}>
                                                <h3 className="my-auto ">To</h3>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
                                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>

                                        <button className="w-full text-center text-white focus:outline-none bg-color1 hover:text-color1 hover:bg-white font-bold px-9 py-3.5 rounded-md  cursor-pointer">Search</button>

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

export default SubCategories;
