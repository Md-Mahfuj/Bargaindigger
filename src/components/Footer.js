import React from "react";
import colors from "tailwindcss/colors";

const Footer = () => {
  return (
    <div className="px-4 xs:px-6 py-10 md:px-8 lg:px-20" style={{ "background": "#F6F6F6" }}>



      <div className="lg:flex lg:justify-between gap-6 xl:gap-10">

        <div className=" space-y-4 sm:w-max sm:pr-4 lg:pr-14 xl:pr-32 lg:border-r border-gray-300 pb-5">
          <h3 className="text-sm font-bold sm:text-left text-color14">JOIN OUR MAILING LIST</h3>
          <div className="flex justify-center sm:justify-start">
            <input className="w-full outline-none px-4 py-1.5 border border-color5 border-opacity-30 rounded-sm sm:rounded" placeholder="Name" />
          </div>
          <div className="flex justify-center sm:justify-start">
            <input className="w-full outline-none px-4 py-1.5 border border-color5 border-opacity-30 rounded-sm sm:rounded" placeholder="Password" type={"password"} />
          </div>

          <button className="w-full sm:w-max text-white py-2 px-14 font-bold rounded-sm bg-color13 hover:bg-white hover:text-color13 hover:shadow-md outline-none focus:outline-none"> Send</button>
        </div>


        {/* Mobile */}
        <div className="sm:hidden">

          <div className="flex justify-between py-4 border-b border-color5 border-opacity-10 pr-6 cursor-pointer">
            <h2 className="text-sm font-semibold text-color14">OUR LOCATIONS</h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-color14">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </div>


          <div className="flex justify-between py-4 border-b border-color5 border-opacity-10 pr-6 cursor-pointer">
            <h2 className="text-sm font-semibold text-color14">ABOUT US</h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-color14">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </div>


          <div className="flex justify-between py-4 border-b border-color5 border-opacity-10 pr-6 cursor-pointer">
            <h2 className="text-sm font-semibold text-color14">Example 01</h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-color14">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </div>


          <div className="flex justify-between py-4 border-b border-color5 border-opacity-10 pr-6 cursor-pointer">
            <h2 className="text-sm font-semibold text-color14">Example 02</h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-color14">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </div>


          <div className="flex justify-between py-4 border-b border-color5 border-opacity-10 pr-6 cursor-pointer">
            <h2 className="text-sm font-semibold text-color14">HELP</h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-color14">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </div>

          <div className="flex justify-between py-4 border-b border-color5 border-opacity-10 pr-6 cursor-pointer">
            <h2 className="text-sm font-semibold text-color14">OTHER</h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-color14">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </div>




        </div>


        {/* tab and desktop */}
        <div className="hidden px-4 sm:px-0 py-4  sm:grid sm:grid-cols-4 md:grid-cols-5 gap-8 xl:gap-20">

          <div className="space-y-1 text-color14">
            <h1 className="text-sm font-bold pb-2">OUR LOCATIONS</h1>

            <h3 className="text-sm cursor-pointer">Toronto</h3>
            <h3 className="text-sm cursor-pointer">Calgary</h3>
            <h3 className="text-sm cursor-pointer">Montreal</h3>
            <h3 className="text-sm cursor-pointer">Edmonton </h3>
            <h3 className="text-sm cursor-pointer">Vancouver</h3>
            <h3 className="text-sm cursor-pointer">Markham</h3>
            <h3 className="text-sm cursor-pointer">Mississauga</h3>
            <h3 className="text-sm cursor-pointer">Ottawa</h3>

          </div>


          <div className="space-y-1 text-color14">
            <h1 className="text-sm font-bold pb-2">About Us</h1>

            <h3 className="text-sm cursor-pointer">Our Story</h3>
            <h3 className="text-sm cursor-pointer">Blogs & Articles</h3>
            <h3 className="text-sm cursor-pointer">Careers</h3>

          </div>


          <div className="space-y-1 text-color14">
            <h1 className="text-sm font-bold pb-2">OUR LOCATIONS</h1>

            <h3 className="text-sm cursor-pointer">Toronto</h3>
            <h3 className="text-sm cursor-pointer">Calgary</h3>
            <h3 className="text-sm cursor-pointer">Montreal</h3>
            <h3 className="text-sm cursor-pointer">Edmonton </h3>
            <h3 className="text-sm cursor-pointer">Vancouver</h3>
            <h3 className="text-sm cursor-pointer">Markham</h3>
            <h3 className="text-sm cursor-pointer">Mississauga</h3>
            <h3 className="text-sm cursor-pointer">Ottawa</h3>

          </div>


          <div className="space-y-1 text-color14">
            <h1 className="text-sm font-bold pb-2">OUR LOCATIONS</h1>

            <h3 className="text-sm cursor-pointer">Toronto</h3>
            <h3 className="text-sm cursor-pointer">Calgary</h3>
            <h3 className="text-sm cursor-pointer">Montreal</h3>
            <h3 className="text-sm cursor-pointer">Edmonton </h3>
            <h3 className="text-sm cursor-pointer">Vancouver</h3>
            <h3 className="text-sm cursor-pointer">Markham</h3>
            <h3 className="text-sm cursor-pointer">Mississauga</h3>
            <h3 className="text-sm cursor-pointer">Ottawa</h3>

          </div>

          <div className="space-y-1 text-color14">
            <h1 className="text-sm font-bold pb-2">HELP</h1>

            <h3 className="text-sm cursor-pointer">Call</h3>
            <h3 className="text-sm cursor-pointer">Email</h3>

          </div>

        </div>


      </div>






    </div>
  );
};

export default Footer;
