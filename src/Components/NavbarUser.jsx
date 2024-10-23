import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Side from "./Side";
import { useContext } from "react";
import { userContext } from "../Context/UserContextProvider";
import Login from "./Login";
import { useEffect } from "react";

export default function NavbarUser({child}){
    const {vis,setVis}=useContext(userContext)

const[display,setDisplay]=useState(false)
useEffect(()=>{
    setTimeout(() => {
        setVis(true)
    }, 1500);
},[])
const handleClick=()=>{

    setDisplay((prev)=>!prev)
}
    return(
        <>
            {vis &&<Login/>}
        <div className="flex justify-end">
            {display && <Side/>}
            <div className="w-9/12">
        <div className="bg-customBlue w-9/12 h-20 p-4 m-4 rounded-xl flex justify-evenly">
            <div className="flex justify-center items-center">
                <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={handleClick}>        
                </button>

            </div>
            <div className="flex justify-center items-center">
                <NavLink to="/" className={({isActive})=>` text-xl items-center ${isActive?"text-customYellow":"text-black"}`}>
                    Home
                </NavLink>
            </div>
            <div className="flex justify-center items-center">
                <NavLink to="/contact" className={({isActive})=>` text-xl items-center ${isActive?"text-customYellow":"text-black"}`}>
                    Contact
                </NavLink>
            </div>
            <div className="flex justify-center items-center">
                <NavLink to="/info" className={({isActive})=>` text-xl items-center ${isActive?"text-customYellow":"text-black"}`}>
                    Information
                </NavLink>
            </div>
            <div className="flex justify-center items-center">
                <NavLink to="/More" className={({isActive})=>` text-xl items-center ${isActive?"text-customYellow":"text-black"}`}>
                    More
                </NavLink>
            </div>
            <div className="flex justify-center items-center">
                <NavLink to="/details" className={({isActive})=>` text-xl items-center ${isActive?"text-customYellow":"text-black"}`}>
                    Details
                </NavLink>
            </div>
            
         
           
            
        </div>
        <div>
            {/* {child} */}
        </div>
        </div>
        
        </div>
            
        </>
    )
}