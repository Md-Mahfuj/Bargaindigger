import React from "react";

const Page404 = ({ onScroll }) => {

    return (
        <div className="">



            <div className="flex justify-center items-center h-screen">
                <div className="bg-cover bg-center h-full w-full"
                    style={{ backgroundImage: "url('404/eduardo-flores-xpcUYaZtplI-unsplash 1.png')", }}>


                    <div className="w-full h-screen opacity-8 m-auto flex flex-col justify-center bg-color5 bg-opacity-80">

                        <img className="mx-auto w-1/2 md:w-1/3 " src="404/image 8.png" />

                        <div className="px-4 md:px-0 text-center space-y-5 text-white">

                            <h1 className="text-2xl md:text-3xl font-semibold">Page Not Found</h1>
                            <h1 className=" md:text-xl ">Opps!!! You Tried To Access A Page Which is Not Available. Go Back To Vehicle</h1>

                                <button type="submit" class=" font-bold text-white hover:shadow-lg rounded text-sm px-10 py-3 text-center bg-color1 hover:text-color1 hover:bg-white outline-none focus:outline-none" >Back To Vehicle</button>
                        </div>

                    </div>


                </div>
            </div>




        </div>
    )
}

export default Page404;
