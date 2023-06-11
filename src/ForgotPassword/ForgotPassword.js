import React from "react";

const ForgotPassword = ({ onScroll }) => {

    return (
        <div className="">



            {/* Forgot Password */}
            <section class="sm:bg-gray-50 dark:bg-gray-900 pt-32 md:pt-0">
                <div class=" flex flex-col items-center justify-center sm:px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div class=" bg-white rounded-lg sm:shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="sm:text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Forgot Password</h1>
                            <form class="space-y-4 pb-8 md:space-y-6" action="#">
                                <h2 className="text-sm pt-6" style={{ "color": "#5A5A5D" }}>
                                    Enter your email for the verification process will send
                                    4 digits code to your email
                                </h2>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{ "color": "#5A5A5D" }}>Email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 outline-none text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ "border-width": "3px", "border-color": "#E0EFFE" }} placeholder="Vectormonk@gmail.com" required="" />
                                </div>
                                <button type="submit" class="w-full font-bold text-white hover:shadow-lg rounded text-sm px-5 py-3 text-center bg-color1 hover:text-color1 hover:bg-white outline-none focus:outline-none" >Continue</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            {/* Forgot Password ---> Verification */}
            <section class="sm:bg-gray-50 dark:bg-gray-900 pt-32 md:pt-0">
                <div class="flex flex-col items-center justify-center sm:px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div class="w-full bg-white rounded-lg sm:shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="sm:text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Verification</h1>
                            <form class="space-y-4 md:space-y-0" action="#">
                                <h2 className="text-sm pt-6" style={{ "color": "#5A5A5D" }}>
                                    Enter Your 4 Digits Code That You Received On Your Email
                                </h2>
                                <div id="otp" class="flex flex-row justify-center text-center px-2 md:pt-6 2xl:pt-12" style={{ "color": "#5A5A5D" }}>
                                    <input class="m-2 border-2 h-12 w-12 text-center form-control rounded outline-none" style={{ "border-width": "3px", "border-color": "#E0EFFE" }} type="text" id="first" maxlength="1" />
                                    <input class="m-2 border-2 h-12 w-12 text-center form-control rounded outline-none" style={{ "border-width": "3px", "border-color": "#E0EFFE" }} type="text" id="second" maxlength="1" />
                                    <input class="m-2 border-2 h-12 w-12 text-center form-control rounded outline-none" style={{ "border-width": "3px", "border-color": "#E0EFFE" }} type="text" id="third" maxlength="1" />
                                    <input class="m-2 border-2 h-12 w-12 text-center form-control rounded outline-none" style={{ "border-width": "3px", "border-color": "#E0EFFE" }} type="text" id="fifth" maxlength="1" />
                                </div>
                                <span className="text-center flex justify-center pt-1 pb-4 2xl:py-4" style={{ "color": "#E72A1A" }}>00:30</span>

                                <button type="submit" class="w-full font-bold text-white hover:shadow-lg rounded text-sm px-5 py-3 sm:text-center bg-color1 hover:text-color1 hover:bg-white outline-none focus:outline-none" >Continue</button>
                                <p class="text-sm py-5 md:text-base sm:text-center font-light dark:text-gray-400" style={{ "color": "#BEBEBF" }}>
                                    If You Didn’t Receive a Code! <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500" style={{ "color": "#E72A1A" }}>Resent</a>
                                </p>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Forgot Password ---> Verification */}
            <section class="sm:bg-gray-50 dark:bg-gray-900 pt-32 md:pt-0">
                <div class="flex flex-col items-center justify-center sm:px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div class="w-full bg-white rounded-lg sm:shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Verification</h1>
                            <form class="space-y-4 md:space-y-0" action="#">
                                <h2 className="text-sm pt-6" style={{ "color": "#5A5A5D" }}>
                                    Enter Your 4 Digits Code That You Received On Your Email
                                </h2>
                                <div id="otp" class="flex flex-row justify-center text-center px-2 md:pt-6 2xl:pt-12" style={{ "color": "#5A5A5D" }}>
                                    <input class="m-2 border-2 h-12 w-12 text-center form-control rounded outline-none" style={{ "border-width": "3px", "border-color": "#E0EFFE" }} type="text" id="first" maxlength="1" />
                                    <input class="m-2 border-2 h-12 w-12 text-center form-control rounded outline-none" style={{ "border-width": "3px", "border-color": "#E0EFFE" }} type="text" id="second" maxlength="1" />
                                    <input class="m-2 border-2 h-12 w-12 text-center form-control rounded outline-none" style={{ "border-width": "3px", "border-color": "#E0EFFE" }} type="text" id="third" maxlength="1" />
                                    <input class="m-2 border-2 h-12 w-12 text-center form-control rounded outline-none" style={{ "border-width": "3px", "border-color": "#E0EFFE" }} type="text" id="fifth" maxlength="1" />
                                </div>
                                <span className="text-center flex justify-center pt-1 pb-4 2xl:py-4" style={{ "color": "#E72A1A" }}>00:30</span>

                                <button type="submit" class="w-full font-bold text-white hover:shadow-lg rounded text-sm px-5 py-3 text-center bg-color1 hover:text-color1 hover:bg-white outline-none focus:outline-none" >Verify</button>
                                <p class="text-sm py-5 md:text-base sm:text-center font-light dark:text-gray-400" style={{ "color": "#BEBEBF" }}>
                                    If You Didn’t Receive a Code! <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500" style={{ "color": "#E72A1A" }}>Resent</a>
                                </p>

                            </form>
                        </div>
                    </div>
                </div>
            </section>


            {/* Forgot Password ---> New Password */}
            <section class="sm:bg-gray-50 dark:bg-gray-900 pt-32 md:pt-0">
                <div class="flex flex-col items-center justify-center sm:px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div class="w-full bg-white rounded-lg sm:shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">New Password</h1>
                            <form class="space-y-4 pb-8 md:space-y-6" action="#">
                                <h2 className="text-sm " style={{ "color": "#5A5A5D" }}>
                                    Set The New Password For Your Account So You Can Login
                                    And Access All Featuress.
                                </h2>
                                <div>
                                    <label for="email" class="block mb-2 text text-gray-900 dark:text-white" style={{ "color": "#5A5A5D" }}>Enter New Password</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 outline-none text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ "border-width": "2px", "border-color": "#E0EFFE" }} placeholder="8 Symbols At Least" required="" />
                                </div>
                                <div>
                                    <label for="email" class="block mb-2 text text-gray-900 dark:text-white" style={{ "color": "#5A5A5D" }}>Confirm Password</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 outline-none text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ "border-width": "2px", "border-color": "#E0EFFE" }} placeholder="8 Symbols At Least" required="" />
                                </div>

                                <button type="submit" class="w-full font-bold text-white hover:shadow-lg rounded text-sm px-5 py-3 text-center bg-color1 hover:text-color1 hover:bg-white outline-none focus:outline-none" >Updated Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            {/* Forgot Password ---> Successfully Password */}
            <section class="sm:bg-gray-50 dark:bg-gray-900 pt-32 md:pt-0">
                <div class="flex flex-col items-center justify-center sm:px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div class="w-full bg-white rounded-lg sm:shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <form class="space-y-4 md:space-y-0 pt-10 pb-8 md:space-y-6" action="#">
                                <div>
                                    <img className="mx-auto" src="ForgotPassword/Group 9013.svg" />
                                    <h2 className="pt-6 text-2xl font-semibold text-center" style={{ "color": "#0E3860" }}>Successfully</h2>
                                </div>
                                <h2 className="text-sm text-center" style={{ "color": "#5A5A5D" }}>
                                    You Password Has Been Reset Successfully
                                </h2>

                                <button type="submit" class="w-full font-bold text-white hover:shadow-lg rounded text-sm px-5 py-3 text-center bg-color1 hover:text-color1 hover:bg-white outline-none focus:outline-none" >Continue</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>










        </div>
    )
}


export default ForgotPassword;


