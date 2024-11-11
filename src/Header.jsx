import { createBrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Header() {

    return (
      <div className="Header, flex justify-between shadow-lg bg-black text-white p-2">
        <div className="Logo-Container">
        <img className="Logo, w-40 rounded-lg" src="https://img.freepik.com/premium-vector/small-house-with-small-orange-front-sign-that-says-yogurt_1205884-2957.jpg?size=626&ext=jpg"></img>
        </div>
        <div className="Nav-Item, flex items-center">
          <ul className="flex px-1 m-1 font-bold">
            <li className="px-4 py-2 bg-gray-100 m-4 rounded-lg text-black  hover:bg-gray-400">
              Online-Status
            </li>
            <Link to={"/"} className="px-4 py-2 bg-gray-100 m-4 rounded-lg  text-black  hover:bg-gray-400">
                Home
            </Link>
            <Link to={"/about"} className="px-4 py-2 bg-gray-100 m-4 rounded-lg  text-black  hover:bg-gray-400">
                About
            </Link>
            <Link to={"/contact"} className="px-4 py-2 bg-gray-100 m-4 rounded-lg  text-black  hover:bg-gray-400">
                Contact Us
            </Link>
            <Link to={"/grocery"} className="px-4 py-2 bg-gray-100 m-4 rounded-lg  text-black  hover:bg-gray-400">
                Grocery
            </Link>
            <Link to={"/login"} className="px-4 py-2 bg-gray-100 m-4 rounded-lg  text-black  hover:bg-gray-400">
                Login
            </Link>
          </ul>
        </div>
      </div>
    )
  }
  
export default Header; 

