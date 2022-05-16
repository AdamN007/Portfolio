import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <div className="flex absolute inset-x-0 bottom-0 bg-black w-screen h-16 items-center">
            <div>
                <ul className=" font-serif flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium pl-5 md:pl-40">
                    <li className="pl-5">
                        <NavLink to="/Home" className= "text-xl text-gray-400 hover:text-green-500" activeClassName="text-green-400">Home</NavLink>
                    </li>
                    <li className="pl-5">
                    <NavLink to="/About" className= "text-xl text-gray-400 hover:text-green-500">About</NavLink>
                    </li>
                    <li className="pl-5">
                        <a href="www.google.com" className=" text-gray-400 text-xl hover:text-green-500">Work Experience</a>
                    </li>
                    <li className="pl-5">
                        <a href="www.google.com" className=" text-gray-400 text-xl hover:text-green-500">Projects</a>
                    </li>
                    <li className="pl-5">
                        <a href="www.google.com" className=" text-gray-400 text-xl hover:text-green-500">Contact</a>
                    </li>
                </ul>
            </div>
            <div className=" absolute inset-x-0 bottom-0 bg-green-400 w-screen h-1.5"/>
        </div>
    );


}

export default Navbar;