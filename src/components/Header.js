import React from "react";

const Header = () => {
  return (
    <div className="fixed w-full" style={{ "background": "#F8FBFF" }}>



      <nav>

        {/* Mobile Responsive */}
        <div className=" sm:hidden">
          <div className="flex px-4 xs:px-6 py-2 justify-between">
            <div className="flex space-x-1 xs:space-x-2  ">
              <img className="w-6 xs:w-max my-auto cursor-pointer" src="Header/facebook.svg" />
              <img className="w-6 xs:w-max my-auto cursor-pointer" src="Header/instagram.svg" />
              <img className="w-6 xs:w-max my-auto cursor-pointer" src="Header/Group (2).svg" />
              <img className="w-6 xs:w-max my-auto cursor-pointer" src="Header/twitter.svg" />
            </div>
            <div className=" space-x-2">
              <button className="font-bold text-xs xs:text-sm px-2 py-1 outline-none focus:outline-none">Login</button>
              <button className="font-medium text-xs bg-color13 text-white px-3 py-2 hover:bg-white hover:text-color13 hover:shadow-md rounded outline-none focus:outline-none">Register Now</button>
            </div>
          </div>

          <div className="relative" style={{ "background": "#0F4C81", }}>
            <div className=" flex justify-between p-4 xs:p-6 pt-6">

              <div className="">
                {/* Menu bar */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white cursor-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </div>

              <div className="mx-auto flex justify-center">
                <img className="w-3/4" src="Header/logo.svg" />
              </div>

              <div className="">
                {/* Search icon */}
                <div className=" cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-white cursor-pointer my-auto">
                    <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>








        </div>


        {/* Desktop Responcive */}
        <div className="hidden sm:block">
          {/* Icon /Contact */}
          <div className="px-8 lg:px-20 py-2 flex justify-between">
            <div className="flex space-x-2">
              <img className="w-6 h-6 2xl:w-9 2xl:h-9 my-auto cursor-pointer" src="Header/facebook.svg" />
              <img className="w-6 h-6 2xl:w-9 2xl:h-9 my-auto cursor-pointer" src="Header/instagram.svg" />
              <img className="w-6 h-6 2xl:w-9 2xl:h-9 my-auto cursor-pointer" src="Header/Group (2).svg" />
              <img className="w-6 h-6 2xl:w-9 2xl:h-9 my-auto cursor-pointer" src="Header/twitter.svg" />
            </div>

            <div className="flex space-x-4 lg:space-x-10">
              <img className="w-36 md:w-40 lg:w-48 2xl:w-64 cursor-pointer my-auto" src="Header/office.png" />
              <div className="flex">
                <img className="w-4 h-4 my-auto cursor-pointer" src="Header/email.png" />
                <h3 className="text-sm md:text-base my-auto ml-1" style={{ "color": "#0E3860" }}>example@xyz.com</h3>
              </div>
            </div>
          </div>

          {/* Logo/ search bar/ login*/}
          <div className="relative px-8 lg:px-20 py-3 flex justify-between shadow-md" style={{ "background": "#0F4C81", "margin-top": "-4px" }}>
            {/* logo */}
            <div className="my-auto">
              <img className="w-40 lg:w-52 2xl:w-full" src="Header/logo.svg" />
            </div>
            <div className="flex space-x-8 lg:space-x-16">
              <h3 className="my-auto text-white hover:text-color4 text-sm lg:text-base font-bold cursor-pointer hover:scale-75">Login</h3>
              <h3 className="my-auto text-white hover:text-color4 text-sm lg:text-base font-bold cursor-pointer hover:scale-75">Signup</h3>

              <img className="w-9 h-9 rounded-full object-cover cursor-pointer" src="Header/Ellipse 127.png" />

              <button className="text-white focus:outline-none text-sm text-center w-full h-full font-medium bg-color2 hover:text-color2 hover:bg-white py-2 lg:py-1.5 px-6 rounded" >Place Ad</button>
            </div>

          </div>

        </div>


      </nav>







     








    </div>
  );
};

export default Header;
