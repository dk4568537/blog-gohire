"use client";
import Link from "next/link";
import React from "react";
import Navlogo from "../../../public/images/LogoNav.svg";
import Accountlogo from "../../../public/images/Accountlogo.svg";
import Locationlogo from "../../../public/images/Locationlogo.svg";
import Worldlogo from "../../../public/images/Worldlogo.svg";
const Bgssimg = "/images/Dashboard-bg.png";
import Image from "next/image";
import { Button, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";
import { FaUser } from "react-icons/fa";

const Navber = () => {
  return (
    <div className="bg-black bg-cover">
      <div
        className="w-[100%] h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${Bgssimg})` }}
      >
        <nav className="border-gray-200">
          <div className="w-full sm:max-w-screen-xl flex items-center justify-end sm:gap-[55px] md:gap-[315px] mx-auto p-4">
            <div className="md:hidden">
              <Image src={Navlogo} className="h-[58.56px] w-[73.5px]" alt="Rent Hire Logo" />
            </div>

            <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-xs sm:text-sm px-5 py-2.5 text-center"
              >
                Get Started
              </button>
              <Menu>
                <MenuButton
                  colorScheme="white"
                  variant="ghost"
                  border={"none"}
                  color={"white"}
                  as={Button}
                  rightIcon={<HiChevronDown />}
                >
                  English
                </MenuButton>
                <MenuList>
                  <MenuItem>Option One</MenuItem>
                  <MenuItem>Option two</MenuItem>
                  <MenuItem>Option Three</MenuItem>
                  <MenuItem>Option Four</MenuItem>
                  <MenuItem>Option Five</MenuItem>
                </MenuList>
              </Menu>
              <p className="flex justify-center items-center text-center text-white">
                <IconButton
                  colorScheme="white"
                  variant="ghost"
                  border={"none"}
                  color={"white"}
                  icon={<FaUser />}
                />
              </p>
            </div>

            <div className="hidden md:flex md:order-1">
              <Image src={Navlogo} className="sm:h-[58.56px] sm:w-[73.5px]" alt="Rent Hire Logo" />
            </div>
          </div>
        </nav>

        <div className="flex justify-center items-center">
          <ul className="flex md:flex-row font-medium  md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <Link
                href="#"
                className="block text-lg font-semibold py-2 px-3 md:p-0 text-white hover:text-green-500 rounded md:bg-transparent md:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block text-lg font-semibold py-2 px-3 md:p-0 text-white rounded hover:text-green-500 md:hover:bg-transparent md:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block text-lg font-semibold py-2 px-3 md:p-0 text-white rounded hover:text-green-500 md:hover:bg-transparent md:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                About us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center min-h-screen text-center px-4">
          <div className="max-w-2xl text-white">
            <h3 className="mb-4 font-semibold text-xs sm:text-3xl md:text-2xl">
              Streamline Your Rental Business with Go-Hire.com
            </h3>
            <h1 className="mb-6 text-sm sm:text-3xl md:text-3xl font-bold">
              Connecting Sellers and Customers Globally with Efficient Rental
              Management.
            </h1>
            <p className="font-semibold text-xs sm:text-lg md:text-lg">
              Lorem ipsum dolor sit amet consectetur. Luctus duis lectus risus
              augue suspendisse interdum felis. Hac eu nulla quam mauris urna
              vitae amet elit. Rutrum tortor ut porta magna praesent eget mauris
              lectus velit. Sed mattis faucibus imperdiet pretium egestas nunc
              pretium eu condimentum.
            </p>
            <button
              type="button"
              className="text-white bg-gradient-to-r mt-5 from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 pb-5 gap-6">
          <div className="flex justify-center    items-center gap-5">
            <div className="flex gap-5 items-center text-lg font-bold">
              <div className="border p-3 bg-white border-black rounded-full">
                <Image className="sm:w-8 sm:h-8" src={Accountlogo} alt="Account" />
              </div>
              <div className="text-white flex flex-col">
                <p>1K+</p>
                <p>Users</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="flex gap-5 items-center text-lg font-bold">
              <div className="border p-3 bg-white border-black rounded-full">
                <Image className="sm:w-8 sm:h-8" src={Locationlogo} alt="Location" />
              </div>
              <div className="text-white flex flex-col">
                <p>50K+</p>
                <p>Locations</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="flex gap-5 items-center text-lg font-bold">
              <div className="border p-3 bg-white border-black rounded-full">
                <Image className="sm:w-8 sm:h-8" src={Worldlogo} alt="World" />
              </div>
              <div className="text-white flex flex-col">
                <p>50K+</p>
                <p>Servers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
