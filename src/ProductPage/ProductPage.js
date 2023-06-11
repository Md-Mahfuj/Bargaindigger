import React from "react";

const ProductPage = ({ onScroll }) => {

  return (
    <div>


      <div className="fixed sm:hidden w-full flex justify-center px-6 bottom-0 py-6">
        <button className="font-bold w-full bg-color1 py-2 text-white rounded-sm hover:bg-white hover:text-color1 hover:shadow-lg outline-none focus:outline-none">Filter</button>
      </div>


      <div className=" px-4 xs:px-6 md:px-8 lg:px-20 pt-32 xs:pt-36 py-10 lg:flex ">

        {/* Side Bar */}
        <div className="mx-auto sm:hidden xl:block h-full w-full sm:w-1/2 xl:w-1/4 rounded sm:rounded-lg bg-color5">

          <div className="flex justify-end px-3 pt-3 pb-5">
            <img className="lg:hidden cursor-pointer hover:opacity-50" src="MainPageImage/Group 9442.svg" />
          </div>

          <div className="px-10 lg:px-6 pb-14">

            <div className="text-white flex justify-center py-2 bg-color4 rounded" >
              <img className="my-auto mr-2" src="MainPageImage/Star.svg" />
              <h3 className="mt-1">Save Search</h3>
            </div>

            <div className="flex justify-between py-6">
              <h2 className="text-white text-2xl font-semibold my-auto cursor-pointer">Filters</h2>
              <button className="my-auto text-sm cursor-pointer py-1 px-2 outline-none focus:outline-none" style={{ "color": "#00AAFF" }}>Reset All</button>
            </div>

            <div className="flex px-4 py-2 cursor-pointer space-x-2 bg-color1 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 my-auto" style={{ "color": "#D9D9D9" }}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-white font-medium ">My Last Search</h3>
                <h4 className="text-xs" style={{ "color": "#D9D9D9" }}>All Sections</h4>
              </div>
            </div>

            <div className="py-4 pb-6 space-y-3">
              <h3 className="pb-2" style={{ "color": "#1C70BF" }}>Make/Model</h3>
              <div className="flex px-4 py-2 rounded-md border justify-between cursor-pointer border-color12">
                <h3 className="my-auto text-white">All Makes</h3>
                <img className="my-auto" src="MainPageImage/downarrow.svg" />
              </div>
              <div className="flex px-4 py-2 rounded-md border justify-between cursor-pointer border-color12">
                <h3 className="my-auto text-white">All Makes</h3>
                <img className="my-auto" src="MainPageImage/downarrow.svg" />
              </div>
            </div>

            <div className="flex justify-center px-4 py-2 cursor-pointer space-x-2 bg-color1 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-white font-medium ">My Last Search</h3>
            </div>

            <div className="pt-5  space-y">
              <h3 className="pb-2 text-white">Year</h3>
              <div className="flex">
                <div className="flex w-full px-4 py-2 rounded-l-md border justify-between cursor-pointer border-color12">
                  <h3 className="my-auto text-white">Min</h3>
                  <img className="my-auto" src="MainPageImage/downarrow.svg" />
                </div>
                <div className="flex w-full px-4 py-2 rounded-r-md border justify-between cursor-pointer border-color12">
                  <h3 className="my-auto text-white">Max</h3>
                  <img className="my-auto" src="MainPageImage/downarrow.svg" />
                </div>
              </div>
            </div>

            <div className="pt-5 space-y">
              <h3 className="pb-2 text-white">Price</h3>
              <div className="flex">
                <div className="flex w-full px-4 py-2 rounded-l-md border justify-between cursor-pointer border-color12">
                  <h3 className="my-auto text-white">Total</h3>
                  <img className="my-auto" src="MainPageImage/downarrow.svg" />
                </div>
                <div className="flex w-full px-4 py-2 rounded-r-md border justify-between cursor-pointer border-color12">
                  <h3 className="my-auto text-white">Monthly</h3>
                  <img className="my-auto" src="MainPageImage/downarrow.svg" />
                </div>
              </div>
              <div className="flex pt-3">
                <div className="flex w-full px-4 py-2 rounded-l-md border justify-between cursor-pointer border-color12">
                  <h3 className="my-auto text-white">Min</h3>
                  <img className="my-auto" src="MainPageImage/downarrow.svg" />
                </div>
                <div className="flex w-full px-4 py-2 rounded-r-md border justify-between cursor-pointer border-color12">
                  <h3 className="my-auto text-white">Max</h3>
                  <img className="my-auto" src="MainPageImage/downarrow.svg" />
                </div>
              </div>
            </div>

            <div className="pt-10">
              <h3 className="text-white">Fual Type</h3>
              <div className="py-3 flex flex-wrap gap-3 text-base 2xl:text-xl">
                <button className="px-3 py-1.5 2xl:py-2 border text-white cursor-pointer border-color12 hover:border-white focus:border-white outline-none focus:outline-none rounded">Any</button>
                <button className="px-3 py-1.5 2xl:py-2 border text-white cursor-pointer border-color12 hover:border-white focus:border-white outline-none focus:outline-none rounded">Petrol</button>
                <button className="px-3 py-1.5 2xl:py-2 border text-white cursor-pointer border-color12 hover:border-white focus:border-white outline-none focus:outline-none rounded">Diesel</button>
                <button className="px-3 py-1.5 2xl:py-2 border text-white cursor-pointer border-color12 hover:border-white focus:border-white outline-none focus:outline-none rounded">Electric</button>
                <button className="px-3 py-1.5 2xl:py-2 border text-white cursor-pointer border-color12 hover:border-white focus:border-white outline-none focus:outline-none rounded">Hybrid</button>
              </div>
            </div>

            <div className="pt-10">
              <h3 className="text-white">Fual Type</h3>
              <div className="py-3 flex flex-wrap gap-3 text-base 2xl:text-xl">
                <button className="px-3 py-1.5 2xl:py-2 border text-white cursor-pointer border-color12 hover:border-white focus:border-white outline-none focus:outline-none rounded">Any</button>
                <button className="px-3 py-1.5 2xl:py-2 border text-white cursor-pointer border-color12 hover:border-white focus:border-white outline-none focus:outline-none rounded">Convertible</button>
                <button className="px-3 py-1.5 2xl:py-2 border text-white cursor-pointer border-color12 hover:border-white focus:border-white outline-none focus:outline-none rounded">Couper</button>
                <button className="px-3 py-1.5 2xl:py-2 border text-white cursor-pointer border-color12 hover:border-white focus:border-white outline-none focus:outline-none rounded">Saloon</button>
                <button className="px-3 py-1.5 2xl:py-2 border text-white cursor-pointer border-color12 hover:border-white focus:border-white outline-none focus:outline-none rounded">Hatchback</button>
                <button className="px-3 py-1.5 2xl:py-2 border text-white cursor-pointer border-color12 hover:border-white focus:border-white outline-none focus:outline-none rounded">Van</button>
                <button className="px-3 py-1.5 2xl:py-2 border text-white cursor-pointer border-color12 hover:border-white focus:border-white outline-none focus:outline-none rounded">MPV</button>
                <button className="px-3 py-1.5 2xl:py-2 border text-white cursor-pointer border-color12 hover:border-white focus:border-white outline-none focus:outline-none rounded">SUV</button>
                <button className="px-3 py-1.5 2xl:py-2 border text-white cursor-pointer border-color12 hover:border-white focus:border-white outline-none focus:outline-none rounded">Pick Up</button>
              </div>
            </div>

            <div className="pt-10 space-y-3">
              <h3 className="pb-2 text-white">Location</h3>
              <div className="flex px-4 py-2 rounded-md border justify-between cursor-pointer border-color12">
                <h3 className="my-auto text-white">All Ireland</h3>
                <img className="my-auto" src="MainPageImage/downarrow.svg" />
              </div>
            </div>

            <div className="pt-10 space-y">
              <h3 className="pb-2 text-white">Price</h3>
              <div className="flex xl:text-sm">
                <div className=" w-full text-center text-white px-4 xl:px py-2 rounded-l-md border justify-between cursor-pointer border-color12">Any</div>
                <div className=" w-full text-center text-white px-4 xl:px py-2 border-t border-b justify-between cursor-pointer border-color12">Manual</div>
                <div className=" w-full text-center text-white px-4 xl:px py-2 rounded-r-md border justify-between cursor-pointer border-color12">Automatic</div>
              </div>
            </div>

          </div>
        </div>







        {/* Carts /Product  */}

        <div className="sm:px-4 xl:w-full pt-4 sm:pt-0">

          <div className=" sm:flex justify-between ">
            <h3 className=" py-4  md:text-left md:py-8 md:text-xl lg:text-2xl font-bold text-color5 ">New & Use Car for Sale</h3>
            <div className="my-auto pb-6 sm:pb-0 2xl:w-96">
              <div className="relative ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-6 h-6 text-color5 text-opacity-50 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="w-full px-4 py-2 pl-10 text-sm outline-none  border border-color5 border-opacity-30 rounded-sm lg:rounded placeholder-color5 placeholder-opacity-50 focus:placeholder-opacity-100" placeholder="Search Car" />
              </div>
            </div>
          </div>


          {/* Carts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

            {/* Carts 01 */}
            <div className="inline-block cursor-pointer lg:w-full">
              <div className=" h-full w-full overflow-hidden duration-300 shadow-lg " >
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
              <div className=" h-full w-full overflow-hidden duration-300 shadow-lg " >
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
              <div className=" h-full w-full overflow-hidden duration-300 shadow-lg " >
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


          <div className="py-10 flex justify-center ">
            <button type="submit" class="w-max h-full bg-color1 font-bold text-white hover:bg-white hover:text-color1 hover:shadow-lg rounded md:text-base text-sm px-8 py-2 md:px-12 md:py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 outline-none focus:outline-none"  >View All</button>
          </div>


        </div>






      </div>
    </div>
  )
}

export default ProductPage;
