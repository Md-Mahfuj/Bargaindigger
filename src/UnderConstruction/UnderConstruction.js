import React from "react";

const UnderConstruction = ({ onScroll }) => {

    return (
        <div className="">



            <div className="flex justify-center items-center h-screen">
                <div className="bg-cover bg-center h-full w-full"
                    style={{ backgroundImage: "url('404/eduardo-flores-xpcUYaZtplI-unsplash 1.png')", }}>


                    <div className="px-4 md:px-0 w-full h-screen opacity-8 m-auto flex flex-col justify-center bg-color5 bg-opacity-80" >

                        <div className="  md:w-3/4 lg:w-1/2 2xl:w-1/3 mx-auto text-center space-y-5 text-white">

                            <h1 className="text-lg sm:text-xl md:text-3xl">We Are Currently Working On This Website
                                To Deliver A Better User Experience</h1>

                            {/* Search */}
                            <div className="flex space-x-2 2xl:space-x-5">
                                <input className=" px-5 py-3 border w-full rounded placeholder-white outline-none bg-color5 bg-opacity-80" placeholder="Type Your Email To Get Notified" />
                                <button type="submit" class="font-bold text-white text-sm sm:text-base hover:shadow-lg rounded px-5 sm:px-8 py-3 text-center bg-color1 hover:text-color1 hover:bg-white outline-none focus:outline-none" >Sent</button>
                            </div>

                            <div>
                                <h1 className="text-xl md:text-4xl pt-4 md:pt-10  font-semibold">Will Be Online Again ni</h1>
                            </div>

                            {/* Time Hours Min sec */}
                            <div className=" w-max mx-auto flex space-x-6 md:space-x-12 md:pt-8">
                                {/* Hours */}
                                <div className="w-max">
                                    <div className=" rounded-full text-center bg-color1" style={{"width": "75px", "height": "75px" }}>
                                        <h2 className="text-3xl flex justify-center pt-4" >04</h2>
                                    </div>
                                    <h2 className="text-xl pt-1">Day</h2>
                                </div>
                                {/* Minuts */}
                                <div className="w-max">
                                    <div className=" rounded-full text-center bg-color1" style={{"width": "75px", "height": "75px" }}>
                                        <h2 className="text-3xl flex justify-center pt-4" >9</h2>
                                    </div>
                                    <h2 className="text-xl pt-1">Hours</h2>
                                </div>
                                {/* Secend */}
                                <div className="w-max">
                                    <div className=" rounded-full text-center bg-color1" style={{"width": "75px", "height": "75px" }}>
                                        <h2 className="text-3xl flex justify-center pt-4" >40</h2>
                                    </div>
                                    <h2 className="text-xl pt-1">Min</h2>
                                </div>

                            </div>


                        </div>

                    </div>


                </div>
            </div>




        </div>
    )
}

export default UnderConstruction;
