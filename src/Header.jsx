import { createBrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Header() {

    return (
      <div className="Header, flex justify-between shadow-lgmin-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-black p-2">
        <div className="Logo-Container">
        <img className="Logo, w-40 rounded-lg" src="https://img.freepik.com/premium-vector/small-house-with-small-orange-front-sign-that-says-yogurt_1205884-2957.jpg?size=626&ext=jpg"></img>
        </div>
        <div className="Nav-Item, flex items-center">
          <ul className="flex px-1 m-1 font-bold">
            {/* <li className="px-4 py-2 bg-gray-100 m-4 rounded-lg text-black  hover:bg-gray-400">
              Online-Status
            </li> */}
            <Link to={"/"} className="px-4 py-2 m-4 rounded-lg -blue-600 dark:bg-blue-500 text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300">
                Home
            </Link>
            <Link to={"/about"} className="px-4 py-2 m-4 rounded-lg -blue-600 dark:bg-blue-500 text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300">
                About
            </Link>
            <Link to={"/contact"} className="px-4 py-2 m-4 rounded-lg -blue-600 dark:bg-blue-500 text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300">
                Contact Us
            </Link>
            <Link to={"/grocery"} className="px-4 py-2 m-4 rounded-lg -blue-600 dark:bg-blue-500 text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300">
                Grocery
            </Link>
            <Link to={"/login"} className="px-4 py-2 m-4 rounded-lg -blue-600 dark:bg-blue-500 text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300">
                Login
            </Link>
          </ul>
        </div>
      </div>
    )
  }
  
export default Header; 

