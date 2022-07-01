import React from "react";
import "../input.css";

const MicrosoftClone = () => {
  return (
    <>
      <div class="container mx-auto">
        <div class="navbar flex justify-between items-center p-4">
          <div class="flex justify-center items-center  md:order-2">
            <div class="hamburger inline-block p-4 cursor-pointer md:hidden">
              <div class="line h-0.5 w-6 my-1 bg-black"></div>
              <div class="line h-0.5 w-6 my-1 bg-black"></div>
              <div class="line h-0.5 w-6 my-1 bg-black"></div>
            </div>
            <div class="search md:hidden w-4 mr-6">
              <img src="./Images/search.svg" alt="" />
            </div>
          </div>

          <div class="logo text-center flex md:order-1">
            <div class="flex justify-start">
              <img class="w-[50%]" src="./Images/mslogo.png" alt="" />
            </div>

            <div class="features absolute w-fit md:static md:w-auto bg-gray-200 md:bg-white inset-0 md:flex md:items-center md:mx-4 md:space-x-6 -translate-x-96 md:translate-x-0">
              <div class="fitem hover:underline hover:underline-offset-8 cursor-pointer">
                Microsoft 365
              </div>
              <div class="hover:underline hover:underline-offset-8 cursor-pointer">
                Office
              </div>
              <div class="hover:underline hover:underline-offset-8 cursor-pointer">
                Windows
              </div>
              <div class="hover:underline hover:underline-offset-8 cursor-pointer">
                Surface
              </div>
              <div class="hover:underline hover:underline-offset-8 cursor-pointer">
                Xbox
              </div>
              <div class="hover:underline hover:underline-offset-8 cursor-pointer">
                Support
              </div>
            </div>
          </div>
          <div class="cart text-center md:order-3 flex">
            <div class="search hidden md:block mr-6"> All Microsoft </div>
            <div class="mx-2">Search</div>
            <img class="w-4 mr-6" src="./Images/search.svg" alt="" />
            <div class="flex pt-1">
              <img class="w-4 h-4 mr-4" src="./Images/cart icon.svg" alt="" />
              <img
                class="w-4 h-4 mr-4"
                src="./Images/account icon.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="slider flex flex-col-reverse md:flex-row bg-[#f2f2f2]">
          <div class="left flex flex-col justify-center items-center md:items-baseline py-12 ml-32 space-y-5">
            <h1 class="text-2xl font-medium md:text-4xl mx-5">
              Surface Laptop 4
            </h1>
            <p class="w-3/4 mx-5 text-center md:text-left">
              Do it all with a perfect balance of sleek, ultra-thin design,
              multitasking speed and improved performance
            </p>
            <button class="text-white bg-black px-4 py-2 my-6 font-bold mx-5">
              Shop Now
            </button>
          </div>
          <div class="right">
            <img class="w-[60rem] md:w-[64rem]" src="./Images/ms.webp" alt="" />
          </div>
        </div>

        <div class="promo space-y-6 flex flex-col lg:flex-row justify-center">
          <div class="item flex items-center mx-4 mt-6 space-x-2 md:flex-col">
            <img src="./Images/ic1.png" alt="" />
            <span class="font-medium md:w-[8rem] md:text-center text-sm my-4">
              Choose your Microsoft 365
            </span>
          </div>
          <div class="item flex md:flex-col items-center mx-4 space-x-2">
            <img src="./Images/ic2.webp" alt="" />
            <span class="font-medium md:w-[8rem] md:text-center text-sm my-4">
              Explore Surface devices
            </span>
          </div>
          <div class="item flex items-center mx-4 space-x-2 md:flex-col">
            <img src="./Images/ic3.webp" alt="" />
            <span class="font-medium md:w-[8rem] md:text-center text-sm my-4">
              Buy Xbox games
            </span>
          </div>
          <div class="item flex items-center mx-4 space-x-2 md:flex-col">
            <img src="./Images/ic4.png" alt="" />
            <span class="font-medium md:w-[8rem] md:text-center text-sm my-4">
              Get Windows 11
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicrosoftClone;
