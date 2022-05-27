import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar(){

    const navigate = useNavigate();
    return(
        <div className="flex fixed inset-x-0 bottom-0 bg-black w-screen h-16 items-center">
            <div>
                <ul className=" font-serif flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium pl-5 md:pl-40">
                    <li className="pl-5">
                    <NavLink to="/Home" className={(navData) => (navData.isActive ? 'active' : 'text-xl text-gray-400 hover:text-green-500')}   >Home</NavLink>
                    </li>
                    <li className="pl-5">
                        <NavLink to="/About" className={(navData) => (navData.isActive ? 'active' : 'text-xl text-gray-400 hover:text-green-500')}   >About</NavLink>
                    </li>
                    <li className="pl-5">
                    <NavLink to="/Work" className={(navData) => (navData.isActive ? 'active' : 'text-xl text-gray-400 hover:text-green-500')}   >Work Experience</NavLink>
                    </li>
                    <li className="pl-5">
                    <NavLink to="/Projects" className={(navData) => (navData.isActive ? 'active' : 'text-xl text-gray-400 hover:text-green-500')}   >Projects</NavLink>
                    </li>
                    <li className="pl-5">
                    <NavLink to="/Contact" className={(navData) => (navData.isActive ? 'active' : 'text-xl text-gray-400 hover:text-green-500')}   >Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className=" absolute inset-x-0 bottom-0 bg-green-400 w-screen h-1.5"/>
        </div>
    );


}

export default Navbar;