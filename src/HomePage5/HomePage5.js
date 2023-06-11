import React from "react";

const HomePage5 = ({ onScroll }) => {

  return (
    <div className="pt-28 sm:pt-24">


      <div className="flex justify-center items-center ">
        <div className="bg-cover bg-center  w-full" style={{ backgroundImage: "url('HomePage5/Background.png')", }}>

          <div className=" py-10 md:pt-10 text-white text-center  2xl:pt-20 space-y-2 lg:space-y-3">
            <h1 className="text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold">FIND WHAT ARE YOU LOOKING FOR</h1>
            <h1 className="text-sm xs:text-base sm:text-base md:text-lg lg:text-2xl 2xl:text-3xl font-medium">Over 40000 Latest BARGAINDIGGER</h1>
          </div>


          <div className="flex justify-center md:justify-start px-4 xs:px-6 md:px-8 lg:px-20 2xl:px-36 pb-5 sm:py-10 md:py-10 lg:py-20 xl:py-32 2xl:py-56">
            <div className="w-full sm:w-8/12 md:w-96 lg:w-2/5 2xl:w-1/3 sm:bg-color5 space-y-2 sm:px-6 sm:py-10 rounded-lg bg-opacity-70">

              {/* Search Or input */}
              <div className="flex w-full">
                <input className="hidden sm:block w-full py-1.5 px-4 lg:py-2 lg:px-8 text-sm xl:text-base rounded-l outline-none text-gray-500 " placeholder="Search Auction" />
                <div className="w-full sm:w-max rounded sm:rounded-none sm:rounded-r border-transparent border-2 hover:bg-white sm:hover:border-color4 bg-color13">
                  <button className="flex justify-center sm:justify-start w-full h-full  focus:outline-none text-white py-2.5 px-2 text-xs xl:text-base lg:px-4 lg:py-3 rounded-r  hover:bg-white hover:text-color13 font-bold" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 xl:w-5 xl:h-5 cursor-pointer my-auto">
                      <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                    </svg>
                    Search
                  </button>
                </div>
              </div>
              <button className="w-full py-3 px-4 text-xs text-color3 bg-color4 hover:bg-white hover:text-color4 xl:text-base focus:outline-none lg:px-14 lg:py-3 rounded  font-bold outline-none" >Place Auction</button>

            </div>
          </div>






        </div>
      </div>




      {/* Catagorise Accessories*/}
      <div className=" pt-8 2xl:pt-36 pl-4 xs:pl-6 md:pl-8 lg:px-20 2xl:px-28 w-full bg-color5 bg-opacity-5" >
        <div className="pb-4 pr-4 xs:pr-6 lg:py-10 2xl:py-0 2xl:pb-12 flex justify-between">
          <h3 className=" sm:text-left sm:text-xl lg:text-2xl 2xl:text-4xl font-bold text-color5">Buy and Sell Locally In Ireland</h3>
          <button className="lg:hidden outline-none focus:outline-none text-xs sm:text-base py-1 px-2 text-color13 hover:underline">View All</button>
        </div>

        {/* <!--  --> */}
        <div className="flex flex-col m-auto p-auto ">
          <div className="flex overflow-x-scroll lg:overflow-x-hidden pb-10 " >
            <div className=" flex flex-nowrap space-x-2 sm:space-x-4 lg:space-x-0 lg:w-full lg:grid lg:grid-cols-6 lg:mx-auto xl:grid-cols-7 2xl:grid-cols-6 lg:gap-4 " >


              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-4 2xl:pt-8">
                    <img className="mx-auto w-16 2xl:w-24 " src="HomePage5/AuctionCarDealer/Group 9156.svg" />
                    <h3 className="pt-3 2xl:pt-12 2xl:text-2xl text-xs sm:text-sm font-semibold text-color5 text-center uppercase">SERVICE</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-4 2xl:pt-8">
                    <img className="mx-auto w-12 2xl:w-20" src="HomePage5/AuctionCarDealer/Group 9396.svg" />
                    <h3 className="pt-3 2xl:pt-12 2xl:text-2xl text-xs sm:text-sm font-semibold text-color5 text-center uppercase">Home</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-3 2xl:pt-8">
                    <img className="mx-auto w-14 2xl:w-20" src="HomePage5/AuctionCarDealer/Group 9157.svg" />
                    <h3 className="pt-3 2xl:pt-12 2xl:text-2xl text-xs sm:text-sm font-semibold text-color5 text-center uppercase">garden</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-4 2xl:pt-8">
                    <img className="mx-auto w-16 2xl:w-24" src="HomePage5/AuctionCarDealer/Layer_2.svg" />
                    <h3 className="pt-3 2xl:pt-12 2xl:text-2xl 2xl:px-4 text-xs sm:text-sm font-semibold text-color5 text-center uppercase">farming & animals</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-6 2xl:pt-12">
                    <img className="mx-auto w-16 2xl:w-28" src="HomePage5/AuctionCarDealer/Group 9324.svg" />
                    <h3 className="pt-6 sm:pt-6 2xl:pt-14 2xl:text-2xl text-xs sm:text-sm font-semibold text-color5 text-center uppercase">pets</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-3 2xl:pt-8">
                    <img className="mx-auto w-14 2xl:w-20" src="HomePage5/AuctionCarDealer/Group 9323.svg" />
                    <h3 className="pt-3 2xl:pt-12 2xl:text-2xl text-xs sm:text-sm font-semibold text-color5 text-center uppercase">CONSTRUCTION</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-3 2xl:pt-8">
                    <img className="mx-auto w-14 2xl:w-20" src="HomePage5/AuctionCarDealer/Group 9158.svg" />
                    <h3 className="pt-3 2xl:pt-12 2xl:text-2xl text-xs sm:text-sm font-semibold text-color5 text-center uppercase">Electronics</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-5 2xl:pt-10">
                    <img className="mx-auto w-12 2xl:w-20" src="HomePage5/AuctionCarDealer/Group 9070.svg" />
                    <h3 className="pt-3 2xl:pt-10 2xl:text-2xl text-xs sm:text-sm font-semibold text-color5 text-center uppercase">SPORT   & FITNESS</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-4 2xl:pt-10">
                    <img className="mx-auto w-14 2xl:w-20" src="HomePage5/AuctionCarDealer/Group 9333.svg" />
                    <h3 className="pt-3 2xl:pt-10 2xl:text-2xl  text-xs sm:text-sm font-semibold text-color5 text-center uppercase">BEAUTY SERVICES</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-6 2xl:pt-8">
                    <img className="mx-auto w-14 2xl:w-24" src="HomePage5/AuctionCarDealer/Group 9328.svg" />
                    <h3 className="pt-3 2xl:pt-12 2xl:text-2xl text-xs sm:text-sm font-semibold text-color5 text-center uppercase">Healthcare</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-6  2xl:pt-8">
                    <img className="mx-auto w-8 2xl:w-16" src="HomePage5/AuctionCarDealer/Group 9330.svg" />
                    <h3 className="pt-2 2xl:pt-8 2xl:text-2xl text-xs sm:text-sm font-semibold text-color5 text-center uppercase">Office</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-4 2xl:pt-8">
                    <img className="mx-auto w-12 2xl:w-24" src="HomePage5/AuctionCarDealer/Group 9327.svg" />
                    <h3 className="pt-3 2xl:pt-10 2xl:text-2xl 2xl:px-4 text-xs sm:text-sm font-semibold text-color5 text-center uppercase">books & magazines</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-3 2xl:pt-6">
                    <img className="mx-auto w-10 2xl:w-20" src="HomePage5/AuctionCarDealer/Group 9326.svg" />
                    <h3 className="pt-3 2xl:pt-8 2xl:text-2xl  text-xs sm:text-sm font-semibold text-color5 text-center uppercase">antiques</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-6 2xl:pt-12">
                    <img className="mx-auto w-16 2xl:w-28" src="HomePage5/AuctionCarDealer/Group 9329.svg" />
                    <h3 className="pt-4 2xl:pt-12 2xl:text-2xl  text-xs sm:text-sm font-semibold text-color5 text-center uppercase">Kids stuff</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-4 2xl:pt-8">
                    <img className="mx-auto w-14 2xl:w-24" src="HomePage5/AuctionCarDealer/Group 9155.svg" />
                    <h3 className="pt-3 2xl:pt-10 2xl:text-2xl  text-xs sm:text-sm font-semibold text-color5 text-center uppercase">clothes</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-4 2xl:pt-8">
                    <img className="mx-auto w-14 2xl:w-24" src="HomePage5/AuctionCarDealer/Group 9331.svg" />
                    <h3 className="pt-3 2xl:pt-10 2xl:text-2xl  text-xs sm:text-sm font-semibold text-color5 text-center uppercase">art</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-4 2xl:pt-8">
                    <img className="mx-auto w-14 2xl:w-24" src="HomePage5/AuctionCarDealer/Group 9332.svg" />
                    <h3 className="pt-3 2xl:pt-10 2xl:text-2xl  text-xs sm:text-sm font-semibold text-color5 text-center uppercase">tickets</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-4 2xl:pt-8">
                    <img className="mx-auto w-12 2xl:w-24" src="HomePage5/AuctionCarDealer/Group 9325.svg" />
                    <h3 className="pt-3 2xl:pt-7 2xl:text-2xl  text-xs sm:text-sm font-semibold text-color5 text-center uppercase">wedding</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-4 2xl:pt-8">
                    <img className="mx-auto w-16 2xl:w-28" src="HomePage5/AuctionCarDealer/Layer_1.svg" />
                    <h3 className="pt-3 2xl:pt-12 2xl:text-2xl  text-xs sm:text-sm font-semibold text-color5 text-center uppercase">hobbies</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-6 2xl:pt-8">
                    <img className="mx-auto w-10 2xl:w-20" src="HomePage5/AuctionCarDealer/Group 9073.svg" />
                    <h3 className="pt-3 2xl:pt-12 2xl:text-2xl  text-xs sm:text-sm font-semibold text-color5 text-center uppercase">OTHER sTUFF</h3>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>




      </div>



      {/* Catagorise  Car Company*/}
      <div className=" pb-10 pt-8 2xl:pt-36 pl-4 xs:pl-6 md:pl-8 lg:px-20 2xl:px-28 w-full " >
        <div className="pb-4 pr-4 xs:pr-6 lg:pb-6 2xl:py-0 2xl:pb-12 flex justify-between">
          <h3 className=" sm:text-left sm:text-xl lg:text-2xl 2xl:text-4xl font-bold text-color5">Browse by Make</h3>
          <button className="lg:hidden outline-none focus:outline-none text-xs sm:text-base py-1 px-2 text-color13 hover:underline">View All</button>
        </div>

        {/* <!--  --> */}
        <div className="flex flex-col m-auto p-auto ">
          <div className="flex overflow-x-scroll lg:overflow-x-hidden pb-10 " >
            <div className=" flex flex-nowrap space-x-2 sm:space-x-4 lg:space-x-0 lg:w-full lg:grid lg:grid-cols-6 lg:mx-auto xl:grid-cols-7 2xl:grid-cols-6 lg:gap-3 xl:gap-4 " >


              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded border lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt- 2xl:pt-">
                    <img className="mx-auto w-20 2xl:w-32" src="HomePage5/AuctionCarDealer/pngegg (3) 2.svg" />
                    <h3 className="pt-2 2xl:pt-8 2xl:text-2xl text-xs font-semibold text-color5 text-center uppercase">Acura</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded border lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-6 2xl:pt-10">
                    <img className="mx-auto w-24 2xl:w-40" src="HomePage5/AuctionCarDealer/pngegg (4) 2.svg" />
                    <h3 className="pt-6 2xl:pt-14 2xl:text-2xl text-xs font-semibold text-color5 text-center uppercase">Chevrolet</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded border lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-3 2xl:pt-8">
                    <img className="mx-auto w-24 2xl:w-32" src="HomePage5/AuctionCarDealer/pngegg (5) 2.svg" />
                    <h3 className="pt-4 2xl:pt-12 2xl:text-2xl text-xs font-semibold text-color5 text-center uppercase">Honda</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded border lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt- 2xl:pt-8">
                    <img className="mx-auto w-24 2xl:w-32" src="HomePage5/AuctionCarDealer/pngegg (15) 1.svg" />
                    <h3 className="pt-3 2xl:pt-8 2xl:text-2xl text-xs font-semibold text-color5 text-center uppercase">audi</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded border lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-2 2xl:pt-12">
                    <img className="mx-auto w-16 2xl:w-20" src="HomePage5/AuctionCarDealer/pngegg (7) 1.svg" />
                    <h3 className="pt-3 2xl:pt-8 2xl:text-2xl text-xs font-semibold text-color5 text-center uppercase">BMW</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded border lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-6 2xl:pt-12">
                    <img className="mx-auto w-24 2xl:w-40" src="HomePage5/AuctionCarDealer/pngegg (8) 1.svg" />
                    <h3 className="pt-4 2xl:pt-10 2xl:text-2xl text-xs font-semibold text-color5 text-center uppercase">Ford</h3>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <h3 className="hidden lg:block w-max  hover:underline sm:text-right cursor-pointer md:text-base 2xl:text-xl font-medium text-color5">See All listing</h3>
        </div>

      </div>





      {/* Catagorise  Car Body*/}
      <div className=" pb-10  2xl:pt-36 pl-4 xs:pl-6 md:pl-8 lg:px-20 2xl:px-28 w-full " >
        <div className="pb-4 pr-4 xs:pr-6 lg:pb-6 2xl:py-0 2xl:pb-12 flex justify-between">
          <h3 className=" sm:text-left sm:text-xl lg:text-2xl 2xl:text-4xl font-bold text-color5">Browse by Make</h3>
          <button className="lg:hidden outline-none focus:outline-none text-xs sm:text-base py-1 px-2 text-color13 hover:underline">View All</button>
        </div>

        {/* <!--  --> */}
        <div className="flex flex-col m-auto p-auto ">
          <div className="flex overflow-x-scroll lg:overflow-x-hidden pb-10 " >
            <div className=" flex flex-nowrap space-x-2 sm:space-x-4 lg:space-x-0 lg:w-full lg:grid lg:grid-cols-6 lg:mx-auto xl:grid-cols-7 2xl:grid-cols-6 lg:gap-3 xl:gap-4 " >


              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded border lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-8 2xl:pt-16">
                    <img className="mx-auto w-16 2xl:w-32" src="HomePage5/AuctionCarDealer/Group(0).svg" />
                    <h3 className="pt-6 pb-10 2xl:pt-8 2xl:pb-16 2xl:text-2xl text-xs font-semibold text-color5 text-center uppercase">Convertible</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded border lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-8 2xl:pt-16">
                    <img className="mx-auto w-16 2xl:w-32" src="HomePage5/AuctionCarDealer/Group (1).svg" />
                    <h3 className="pt-6 pb-10 2xl:pt-8 2xl:pb-16 2xl:text-2xl text-xs font-semibold text-color5 text-center uppercase">Coupe</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded border lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-8 2xl:pt-14">
                    <img className="mx-auto w-16 2xl:w-32" src="HomePage5/AuctionCarDealer/Group 9334.svg" />
                    <h3 className="pt-4 pb-10 2xl:pt-8 2xl:pb-16 2xl:text-2xl text-xs font-semibold text-color5 text-center uppercase">Hatchback</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded border lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-8 2xl:pt-14">
                    <img className="mx-auto w-16 2xl:w-32" src="HomePage5/AuctionCarDealer/Group (2).svg" />
                    <h3 className="pt-4 pb-10 2xl:pt-8 2xl:pb-16 2xl:text-2xl text-xs font-semibold text-color5 text-center uppercase">Minivan</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded border lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-8 2xl:pt-14">
                    <img className="mx-auto w-16 2xl:w-32" src="HomePage5/AuctionCarDealer/Group (3).svg" />
                    <h3 className="pt-5 pb-10 2xl:pt-8 2xl:pb-16 2xl:text-2xl text-xs font-semibold text-color5 text-center uppercase">Pickups</h3>
                  </div>
                </div>
              </div>

              <div className="inline-block cursor-pointer">
                <div className="w-28 h-28 sm:w-36 sm:h-32 2xl:w-full 2xl:h-56 max-w-xs overflow-hidden rounded-sm sm:rounded border lg:rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                  <div className="pt-8 2xl:pt-14">
                    <img className="mx-auto w-16 2xl:w-32" src="HomePage5/AuctionCarDealer/Group (4).svg" />
                    <h3 className="pt-5 pb-10 2xl:pt-8 2xl:pb-16 2xl:text-2xl text-xs font-semibold text-color5 text-center uppercase">Sports Cars</h3>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <h3 className="hidden lg:block w-max  hover:underline sm:text-right cursor-pointer md:text-base 2xl:text-xl font-medium text-color5">See All listing</h3>
        </div>

      </div>





      {/* Carts Ending Soon*/}
      <div className="p-4 xs:p-6 md:px-8 lg:px-20">

        <div className="pb-4 lg:pb-6 2xl:py-0 2xl:pb-12 flex justify-between">
          <h3 className=" sm:text-left sm:text-xl lg:text-2xl 2xl:text-4xl font-bold text-color5">Ending Soon</h3>
          <button className="lg:hidden outline-none focus:outline-none text-xs sm:text-base py-1 px-2 text-color13 hover:underline">View All</button>
        </div>



        <div className="flex flex-col m-auto p-auto ">
          <div className="flex overflow-x-scroll lg:overflow-x-hidden pb-10 " >
            <div className=" flex flex-nowrap  space-x-2 sm:space-x-4 lg:space-x-0 lg:gap-4 lg:grid lg:grid-cols-3 xl:grid-cols-4" >

              {/* Carts 01 */}
              <div className="inline-block cursor-pointer lg:w-full">
                <div className="w-72 sm:w-96 h-full lg:w-full overflow-hidden duration-300 shadow-lg " >
                  <div className=" cursor-pointer mt-4 ">
                    <div className="">
                      <div className="pr-4 flex justify-end relative ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-white hover:text-white hover:bg-color1">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                      </div>
                      <div className="-mt-10">
                        <img className="rounded-t-sm sm:rounded-t-md w-full h-full" src="HomePage5/pxfuel 1.svg" />
                      </div>
                      <div className="w-11/12 -mt-16 mx-auto py-1  " >
                        <div className="flex text-sm">
                          <div className="px-2 w-full py-1 rounded-l-md" style={{ "background": "#2695ffa3" }}>
                            <h3 className="text-white text-center font-bold ">07</h3>
                            <h3 className="text-white text-center text-xs">Days</h3>
                          </div>
                          <div className="px-2 w-full py-1 text-sm" style={{ "background": "#2695ffa3" }}>
                            <h3 className="text-white text-center font-bold">10</h3>
                            <h3 className="text-white text-center text-xs">Hours</h3>
                          </div>
                          <div className="px-2 w-full py-1 text-sm" style={{ "background": "#2695ffa3" }}>
                            <h3 className="text-white text-center font-bold">41</h3>
                            <h3 className="text-white text-center text-xs">Minutes</h3>
                          </div>
                          <div className="px-2 w-full py-1 text-sm rounded-r-md" style={{ "background": "#2695ffa3" }}>
                            <h3 className="text-white text-center font-bold">12</h3>
                            <h3 className="text-white text-center text-xs">Secends</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-5 px-3 2xl:pt-7 2xl:px-7 shadow-md rounded-b-sm sm:rounded-b-md">
                      <h3 className="text-sm sm:text-lg 2xl:text-xl font-bold text-color5">2016 FORD FUSION SEDUNN</h3>
                      <div className="flex justify-between pb-5 border-b border-color5 border-opacity-30">
                        <div>
                          <div className="flex pt-2">
                            <h3 className="text-xs sm:text-sm  my-auto text-color5">Current bid :</h3>
                            <h3 className="ml-3 text-xs sm:text-sm font-semibold my-auto text-color6">Є500</h3>
                          </div>
                          <div className="flex 2xl:pt-1">
                            <h3 className="text-xs sm:text-sm  my-auto text-color5">Bye now :</h3>
                            <h3 className="ml-3 text-xs sm:text-sm font-semibold my-auto text-color1">Є500</h3>
                          </div>
                        </div>
                        <div className="mt-2 sm:mt-3 2xl:mt-2">
                          <button className=" focus:outline-none bg-color2 hover:bg-white hover:shadow-md hover:text-color2 text-white text-xs sm:text-sm font-bold py-2.5 px-6 2xl:py-2.5 2xl:px-6 rounded " >Place a Bid</button>
                        </div>
                      </div>

                      <div className="flex justify-between py-3">
                        <div className="flex h-full cursor-default">
                          <img className="w-4 sm:w-5 lg:w-4 h-full my-auto" src="HomePage5/Group.svg" />
                          <h3 className="text-color5 text-opacity-50 text-xs text-center 2xl:text-sm ml-1">Automatic</h3>
                        </div>
                        <div className="flex h-full cursor-default">
                          <img className="w-4 sm:w-5 lg:w-4 h-full my-auto" src="HomePage5/Group2.svg" />
                          <h3 className="text-color5 text-opacity-50 text-xs text-center 2xl:text-sm ml-1">Petrol + CNG</h3>
                        </div>
                        <div className="flex h-full cursor-default">
                          <img className="w-4 sm:w-5 lg:w-4 h-full my-auto" src="HomePage5/Group 9079.svg" />
                          <h3 className="text-color5 text-opacity-50 text-xs text-center 2xl:text-sm ml-1">5000 kms</h3>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>


              {/* Carts 01 */}
              <div className="inline-block cursor-pointer lg:w-full">
                <div className="w-72 sm:w-96 h-full lg:w-full overflow-hidden duration-300 shadow-lg " >
                  <div className=" cursor-pointer mt-4 ">
                    <div className="">
                      <div className="pr-4 flex justify-end relative ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-white hover:text-white hover:bg-color1">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                      </div>
                      <div className="-mt-10">
                        <img className="rounded-t-sm sm:rounded-t-md w-full h-full" src="HomePage5/pxfuel 1.svg" />
                      </div>
                      <div className="w-11/12 -mt-16 mx-auto py-1  " >
                        <div className="flex text-sm">
                          <div className="px-2 w-full py-1 rounded-l-md" style={{ "background": "#2695ffa3" }}>
                            <h3 className="text-white text-center font-bold ">07</h3>
                            <h3 className="text-white text-center text-xs">Days</h3>
                          </div>
                          <div className="px-2 w-full py-1 text-sm" style={{ "background": "#2695ffa3" }}>
                            <h3 className="text-white text-center font-bold">10</h3>
                            <h3 className="text-white text-center text-xs">Hours</h3>
                          </div>
                          <div className="px-2 w-full py-1 text-sm" style={{ "background": "#2695ffa3" }}>
                            <h3 className="text-white text-center font-bold">41</h3>
                            <h3 className="text-white text-center text-xs">Minutes</h3>
                          </div>
                          <div className="px-2 w-full py-1 text-sm rounded-r-md" style={{ "background": "#2695ffa3" }}>
                            <h3 className="text-white text-center font-bold">12</h3>
                            <h3 className="text-white text-center text-xs">Secends</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-5 px-3 2xl:pt-7 2xl:px-7 shadow-md rounded-b-sm sm:rounded-b-md">
                      <h3 className="text-sm sm:text-lg 2xl:text-xl font-bold text-color5">2016 FORD FUSION SEDUNN</h3>
                      <div className="flex justify-between pb-5 border-b border-color5 border-opacity-30">
                        <div>
                          <div className="flex pt-2">
                            <h3 className="text-xs sm:text-sm  my-auto text-color5">Current bid :</h3>
                            <h3 className="ml-3 text-xs sm:text-sm font-semibold my-auto text-color6">Є500</h3>
                          </div>
                          <div className="flex 2xl:pt-1">
                            <h3 className="text-xs sm:text-sm  my-auto text-color5">Bye now :</h3>
                            <h3 className="ml-3 text-xs sm:text-sm font-semibold my-auto text-color1">Є500</h3>
                          </div>
                        </div>
                        <div className="mt-2 sm:mt-3 2xl:mt-2">
                          <button className=" focus:outline-none bg-color2 hover:bg-white hover:shadow-md hover:text-color2 text-white text-xs sm:text-sm font-bold py-2.5 px-6 2xl:py-2.5 2xl:px-6 rounded " >Place a Bid</button>
                        </div>
                      </div>

                      <div className="flex justify-between py-3">
                        <div className="flex h-full cursor-default">
                          <img className="w-4 sm:w-5 lg:w-4 h-full my-auto" src="HomePage5/Group.svg" />
                          <h3 className="text-color5 text-opacity-50 text-xs text-center 2xl:text-sm ml-1">Automatic</h3>
                        </div>
                        <div className="flex h-full cursor-default">
                          <img className="w-4 sm:w-5 lg:w-4 h-full my-auto" src="HomePage5/Group2.svg" />
                          <h3 className="text-color5 text-opacity-50 text-xs text-center 2xl:text-sm ml-1">Petrol + CNG</h3>
                        </div>
                        <div className="flex h-full cursor-default">
                          <img className="w-4 sm:w-5 lg:w-4 h-full my-auto" src="HomePage5/Group 9079.svg" />
                          <h3 className="text-color5 text-opacity-50 text-xs text-center 2xl:text-sm ml-1">5000 kms</h3>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>


              {/* Carts 01 */}
              <div className="inline-block cursor-pointer lg:w-full">
                <div className="w-72 sm:w-96 h-full lg:w-full overflow-hidden duration-300 shadow-lg " >
                  <div className=" cursor-pointer mt-4 ">
                    <div className="">
                      <div className="pr-4 flex justify-end relative ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-white hover:text-white hover:bg-color1">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                      </div>
                      <div className="-mt-10">
                        <img className="rounded-t-sm sm:rounded-t-md w-full h-full" src="HomePage5/pxfuel 1.svg" />
                      </div>
                      <div className="w-11/12 -mt-16 mx-auto py-1  " >
                        <div className="flex text-sm">
                          <div className="px-2 w-full py-1 rounded-l-md" style={{ "background": "#2695ffa3" }}>
                            <h3 className="text-white text-center font-bold ">07</h3>
                            <h3 className="text-white text-center text-xs">Days</h3>
                          </div>
                          <div className="px-2 w-full py-1 text-sm" style={{ "background": "#2695ffa3" }}>
                            <h3 className="text-white text-center font-bold">10</h3>
                            <h3 className="text-white text-center text-xs">Hours</h3>
                          </div>
                          <div className="px-2 w-full py-1 text-sm" style={{ "background": "#2695ffa3" }}>
                            <h3 className="text-white text-center font-bold">41</h3>
                            <h3 className="text-white text-center text-xs">Minutes</h3>
                          </div>
                          <div className="px-2 w-full py-1 text-sm rounded-r-md" style={{ "background": "#2695ffa3" }}>
                            <h3 className="text-white text-center font-bold">12</h3>
                            <h3 className="text-white text-center text-xs">Secends</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-5 px-3 2xl:pt-7 2xl:px-7 shadow-md rounded-b-sm sm:rounded-b-md">
                      <h3 className="text-sm sm:text-lg 2xl:text-xl font-bold text-color5">2016 FORD FUSION SEDUNN</h3>
                      <div className="flex justify-between pb-5 border-b border-color5 border-opacity-30">
                        <div>
                          <div className="flex pt-2">
                            <h3 className="text-xs sm:text-sm  my-auto text-color5">Current bid :</h3>
                            <h3 className="ml-3 text-xs sm:text-sm font-semibold my-auto text-color6">Є500</h3>
                          </div>
                          <div className="flex 2xl:pt-1">
                            <h3 className="text-xs sm:text-sm  my-auto text-color5">Bye now :</h3>
                            <h3 className="ml-3 text-xs sm:text-sm font-semibold my-auto text-color1">Є500</h3>
                          </div>
                        </div>
                        <div className="mt-2 sm:mt-3 2xl:mt-2">
                          <button className=" focus:outline-none bg-color2 hover:bg-white hover:shadow-md hover:text-color2 text-white text-xs sm:text-sm font-bold py-2.5 px-6 2xl:py-2.5 2xl:px-6 rounded " >Place a Bid</button>
                        </div>
                      </div>

                      <div className="flex justify-between py-3">
                        <div className="flex h-full cursor-default">
                          <img className="w-4 sm:w-5 lg:w-4 h-full my-auto" src="HomePage5/Group.svg" />
                          <h3 className="text-color5 text-opacity-50 text-xs text-center 2xl:text-sm ml-1">Automatic</h3>
                        </div>
                        <div className="flex h-full cursor-default">
                          <img className="w-4 sm:w-5 lg:w-4 h-full my-auto" src="HomePage5/Group2.svg" />
                          <h3 className="text-color5 text-opacity-50 text-xs text-center 2xl:text-sm ml-1">Petrol + CNG</h3>
                        </div>
                        <div className="flex h-full cursor-default">
                          <img className="w-4 sm:w-5 lg:w-4 h-full my-auto" src="HomePage5/Group 9079.svg" />
                          <h3 className="text-color5 text-opacity-50 text-xs text-center 2xl:text-sm ml-1">5000 kms</h3>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>


              {/* Carts 01 */}
              <div className="inline-block cursor-pointer lg:w-full">
                <div className="w-72 sm:w-96 h-full lg:w-full overflow-hidden duration-300 shadow-lg " >
                  <div className=" cursor-pointer mt-4 ">
                    <div className="">
                      <div className="pr-4 flex justify-end relative ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-white hover:text-white hover:bg-color1">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                      </div>
                      <div className="-mt-10">
                        <img className="rounded-t-sm sm:rounded-t-md w-full h-full" src="HomePage5/pxfuel 1.svg" />
                      </div>
                      <div className="w-11/12 -mt-16 mx-auto py-1  " >
                        <div className="flex text-sm">
                          <div className="px-2 w-full py-1 rounded-l-md" style={{ "background": "#2695ffa3" }}>
                            <h3 className="text-white text-center font-bold ">07</h3>
                            <h3 className="text-white text-center text-xs">Days</h3>
                          </div>
                          <div className="px-2 w-full py-1 text-sm" style={{ "background": "#2695ffa3" }}>
                            <h3 className="text-white text-center font-bold">10</h3>
                            <h3 className="text-white text-center text-xs">Hours</h3>
                          </div>
                          <div className="px-2 w-full py-1 text-sm" style={{ "background": "#2695ffa3" }}>
                            <h3 className="text-white text-center font-bold">41</h3>
                            <h3 className="text-white text-center text-xs">Minutes</h3>
                          </div>
                          <div className="px-2 w-full py-1 text-sm rounded-r-md" style={{ "background": "#2695ffa3" }}>
                            <h3 className="text-white text-center font-bold">12</h3>
                            <h3 className="text-white text-center text-xs">Secends</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-5 px-3 2xl:pt-7 2xl:px-7 shadow-md rounded-b-sm sm:rounded-b-md">
                      <h3 className="text-sm sm:text-lg 2xl:text-xl font-bold text-color5">2016 FORD FUSION SEDUNN</h3>
                      <div className="flex justify-between pb-5 border-b border-color5 border-opacity-30">
                        <div>
                          <div className="flex pt-2">
                            <h3 className="text-xs sm:text-sm  my-auto text-color5">Current bid :</h3>
                            <h3 className="ml-3 text-xs sm:text-sm font-semibold my-auto text-color6">Є500</h3>
                          </div>
                          <div className="flex 2xl:pt-1">
                            <h3 className="text-xs sm:text-sm  my-auto text-color5">Bye now :</h3>
                            <h3 className="ml-3 text-xs sm:text-sm font-semibold my-auto text-color1">Є500</h3>
                          </div>
                        </div>
                        <div className="mt-2 sm:mt-3 2xl:mt-2">
                          <button className=" focus:outline-none bg-color2 hover:bg-white hover:shadow-md hover:text-color2 text-white text-xs sm:text-sm font-bold py-2.5 px-6 2xl:py-2.5 2xl:px-6 rounded " >Place a Bid</button>
                        </div>
                      </div>

                      <div className="flex justify-between py-3">
                        <div className="flex h-full cursor-default">
                          <img className="w-4 sm:w-5 lg:w-4 h-full my-auto" src="HomePage5/Group.svg" />
                          <h3 className="text-color5 text-opacity-50 text-xs text-center 2xl:text-sm ml-1">Automatic</h3>
                        </div>
                        <div className="flex h-full cursor-default">
                          <img className="w-4 sm:w-5 lg:w-4 h-full my-auto" src="HomePage5/Group2.svg" />
                          <h3 className="text-color5 text-opacity-50 text-xs text-center 2xl:text-sm ml-1">Petrol + CNG</h3>
                        </div>
                        <div className="flex h-full cursor-default">
                          <img className="w-4 sm:w-5 lg:w-4 h-full my-auto" src="HomePage5/Group 9079.svg" />
                          <h3 className="text-color5 text-opacity-50 text-xs text-center 2xl:text-sm ml-1">5000 kms</h3>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <h3 className="hidden lg:block w-max  hover:underline sm:text-right cursor-pointer md:text-base 2xl:text-xl font-medium text-color5">See All listing</h3>
        </div>


      </div>







      {/* Carts Latest Motors*/}
      <div className=" pb-10 pt-8 2xl:pt-36 pl-4 xs:pl-6 md:pl-8 lg:px-20 2xl:px-28 w-full " >
        <div className="pb-4 pr-4 xs:pr-6 lg:pb-6 2xl:py-0 2xl:pb-12 flex justify-between">
          <h3 className=" sm:text-left sm:text-xl lg:text-2xl 2xl:text-4xl font-bold text-color5">Latest Motors</h3>
          <button className="lg:hidden outline-none focus:outline-none text-xs sm:text-base py-1 px-2 text-color13 hover:underline">View All</button>
        </div>

        {/* <!-- component --> */}
        <div className="flex flex-col m-auto p-auto ">
          <div className="flex overflow-x-scroll lg:overflow-x-hidden pb-10 " >
            <div className="lg:w-full flex flex-nowrap  space-x-2 sm:space-x-4 lg:space-x-0 lg:gap-4 lg:grid lg:grid-cols-3 xl:grid-cols-4" >

              {/* Carts 01 */}
              <div className="inline-block cursor-pointer lg:w-full">
                <div className="w-72 sm:w-96 h-full lg:w-full overflow-hidden duration-300 shadow-lg " >
                  <div className=" cursor-pointer mt-4 ">
                    <div className="">
                      <div className="pr-4 flex justify-end relative ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-white hover:text-white hover:bg-color1">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                      </div>
                      <div className="-mt-10">
                        <img className="rounded-t-sm sm:rounded-t-md w-full h-full" src="HomePage5/Mask group.svg" />
                      </div>

                    </div>
                    <div className="pt-5 px-3 2xl:pt-7 2xl:px-7 shadow-md rounded-b-sm sm:rounded-b-md">
                      <h3 className="text-sm sm:text-lg 2xl:text-xl font-bold text-color5">2016 FORD FUSION SEDUNN</h3>
                      <div className=" pb-5 border-b border-color5 border-opacity-30">
                        <h3 className="py-1 font-semibold my-auto text-color1">Є1500</h3>
                        <div className="flex -ml-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-color5 mr-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          <h3 className="text-sm my-auto">Ireland, Dublin</h3>
                        </div>
                      </div>

                      <div className="flex space-x-4 py-3">
                        <div className="flex h-full cursor-default">
                          <img className="w-4 sm:w-5 lg:w-4 h-full my-auto" src="HomePage5/Group.svg" />
                          <h3 className="text-color5 text-opacity-50 text-xs text-center 2xl:text-sm ml-1">Automatic</h3>
                        </div>
                        <div className="flex h-full cursor-default">
                          <img className="w-4 sm:w-5 lg:w-4 h-full my-auto" src="HomePage5/Group2.svg" />
                          <h3 className="text-color5 text-opacity-50 text-xs text-center 2xl:text-sm ml-1">Petrol + CNG</h3>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Carts 01 */}
              <div className="inline-block cursor-pointer lg:w-full">
                <div className="w-72 sm:w-96 h-full lg:w-full overflow-hidden duration-300 shadow-lg " >
                  <div className=" cursor-pointer mt-4 ">
                    <div className="">
                      <div className="pr-4 flex justify-end relative ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-white hover:text-white hover:bg-color1">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                      </div>
                      <div className="-mt-10">
                        <img className="rounded-t-sm sm:rounded-t-md w-full h-full" src="HomePage5/Mask group.svg" />
                      </div>

                    </div>
                    <div className="pt-5 px-3 2xl:pt-7 2xl:px-7 shadow-md rounded-b-sm sm:rounded-b-md">
                      <h3 className="text-sm sm:text-lg 2xl:text-xl font-bold text-color5">2016 FORD FUSION SEDUNN</h3>
                      <div className=" pb-5 border-b border-color5 border-opacity-30">
                        <h3 className="py-1 font-semibold my-auto text-color1">Є1500</h3>
                        <div className="flex -ml-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-color5 mr-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          <h3 className="text-sm my-auto">Ireland, Dublin</h3>
                        </div>
                      </div>

                      <div className="flex space-x-4 py-3">
                        <div className="flex h-full cursor-default">
                          <img className="w-4 sm:w-5 lg:w-4 h-full my-auto" src="HomePage5/Group.svg" />
                          <h3 className="text-color5 text-opacity-50 text-xs text-center 2xl:text-sm ml-1">Automatic</h3>
                        </div>
                        <div className="flex h-full cursor-default">
                          <img className="w-4 sm:w-5 lg:w-4 h-full my-auto" src="HomePage5/Group2.svg" />
                          <h3 className="text-color5 text-opacity-50 text-xs text-center 2xl:text-sm ml-1">Petrol + CNG</h3>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Carts 01 */}
              <div className="inline-block cursor-pointer lg:w-full">
                <div className="w-72 sm:w-96 h-full lg:w-full overflow-hidden duration-300 shadow-lg " >
                  <div className=" cursor-pointer mt-4 ">
                    <div className="">
                      <div className="pr-4 flex justify-end relative ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-white hover:text-white hover:bg-color1">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                      </div>
                      <div className="-mt-10">
                        <img className="rounded-t-sm sm:rounded-t-md w-full h-full" src="HomePage5/Mask group.svg" />
                      </div>

                    </div>
                    <div className="pt-5 px-3 2xl:pt-7 2xl:px-7 shadow-md rounded-b-sm sm:rounded-b-md">
                      <h3 className="text-sm sm:text-lg 2xl:text-xl font-bold text-color5">2016 FORD FUSION SEDUNN</h3>
                      <div className=" pb-5 border-b border-color5 border-opacity-30">
                        <h3 className="py-1 font-semibold my-auto text-color1">Є1500</h3>
                        <div className="flex -ml-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-color5 mr-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          <h3 className="text-sm my-auto">Ireland, Dublin</h3>
                        </div>
                      </div>

                      <div className="flex space-x-4 py-3">
                        <div className="flex h-full cursor-default">
                          <img className="w-4 sm:w-5 lg:w-4 h-full my-auto" src="HomePage5/Group.svg" />
                          <h3 className="text-color5 text-opacity-50 text-xs text-center 2xl:text-sm ml-1">Automatic</h3>
                        </div>
                        <div className="flex h-full cursor-default">
                          <img className="w-4 sm:w-5 lg:w-4 h-full my-auto" src="HomePage5/Group2.svg" />
                          <h3 className="text-color5 text-opacity-50 text-xs text-center 2xl:text-sm ml-1">Petrol + CNG</h3>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Carts 01 */}
              <div className="inline-block cursor-pointer lg:w-full">
                <div className="w-72 sm:w-96 h-full lg:w-full overflow-hidden duration-300 shadow-lg " >
                  <div className=" cursor-pointer mt-4 ">
                    <div className="">
                      <div className="pr-4 flex justify-end relative ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-7 h-7 p-1 my-auto cursor-pointer rounded-full focus:bg-color1 text-white hover:text-white hover:bg-color1">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                      </div>
                      <div className="-mt-10">
                        <img className="rounded-t-sm sm:rounded-t-md w-full h-full" src="HomePage5/Mask group.svg" />
                      </div>

                    </div>
                    <div className="pt-5 px-3 2xl:pt-7 2xl:px-7 shadow-md rounded-b-sm sm:rounded-b-md">
                      <h3 className="text-sm sm:text-lg 2xl:text-xl font-bold text-color5">2016 FORD FUSION SEDUNN</h3>
                      <div className=" pb-5 border-b border-color5 border-opacity-30">
                        <h3 className="py-1 font-semibold my-auto text-color1">Є1500</h3>
                        <div className="flex -ml-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-color5 mr-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          <h3 className="text-sm my-auto">Ireland, Dublin</h3>
                        </div>
                      </div>

                      <div className="flex space-x-4 py-3">
                        <div className="flex h-full cursor-default">
                          <img className="w-4 sm:w-5 lg:w-4 h-full my-auto" src="HomePage5/Group.svg" />
                          <h3 className="text-color5 text-opacity-50 text-xs text-center 2xl:text-sm ml-1">Automatic</h3>
                        </div>
                        <div className="flex h-full cursor-default">
                          <img className="w-4 sm:w-5 lg:w-4 h-full my-auto" src="HomePage5/Group2.svg" />
                          <h3 className="text-color5 text-opacity-50 text-xs text-center 2xl:text-sm ml-1">Petrol + CNG</h3>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>







            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <h3 className="hidden lg:block w-max  hover:underline sm:text-right cursor-pointer md:text-base 2xl:text-xl font-medium text-color5">See All listing</h3>
        </div>

      </div>




      <div className="md:flex space-y-4 md:space-y-0 md:space-x-4 pt-10 md:pt-20 pb-10 p-4 xs:px-6 md:px-8 lg:px-20">
        <div className="w-full md:w-1/2 flex justify-center items-center ">
          <div className="bg-cover bg-center rounded-sm md:rounded-lg w-full" style={{ backgroundImage: "url('HomePage5/Group 9130.png')", }}>
            <div className="py-4 px-4 2xl:py-7 2xl:px-12">
              <h1 className="text-white text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">ARE YOU LOOKING FOR A CAR?</h1>
              <h1 className="pt-2.5 sm:w-10/12 text-white text-sm sm:text-base 2xl:text-lg">Search Our Inventory With Thousands Of Cars And More Cars Are Adding On Daily Basis.</h1>
              <div className="flex justify-end pt-4 2xl:pt-10">
                <button type="submit" class="w-max h-full outline-none focus:outline-none font-bold text-white bg-color1 hover:bg-white hover:text-color1 hover:shadow-lg rounded-sm md:rounded text-sm xl:text-base px-8 2xl:px-12 py-2 2xl:py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Become A Sell Buyer</button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center ">
          <div className="bg-cover bg-center rounded-sm md:rounded-lg w-full" style={{ backgroundImage: "url('HomePage5/Group 9131.png')", }}>
            <div className="py-4 px-4 2xl:py-7 2xl:px-12">
              <h1 className="text-white text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">DO YOU WANT TO SELL A CAR?</h1>
              <h1 className="pt-2.5 sm:w-10/12 text-white text-sm sm:text-base 2xl:text-lg">Search Our Inventory With Thousands Of Cars And More Cars Are Adding On Daily Basis.</h1>
              <div className="flex justify-end pt-4 2xl:pt-10">
                <button type="submit" class="w-max h-full outline-none focus:outline-none font-bold text-white bg-color1 hover:bg-white hover:text-color1 hover:shadow-lg rounded-sm md:rounded text-sm xl:text-base px-8 2xl:px-12 py-2 2xl:py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Become A Sell Buyer</button>
              </div>
            </div>
          </div>
        </div>
      </div>










    </div>
  )
}

export default HomePage5;
