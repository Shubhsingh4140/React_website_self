import React, { useContext } from "react";
import Login from "./Login";
import { useState,useEffect } from "react";
import { userContext } from "../Context/UserContextProvider";

export default function Side(){
   const {vis,setVis}=useContext(userContext)

    const handleClick=()=>{
        setVis((prev)=>!prev);
    }
    
    return(
        <>
        <div className="absolute top-0 left-0 z-10 shadow-2xl border-2 bg-customYellow w-2/12 p-4 m-4 rounded-xl h-160">
               <p className="text-center text-decoration-line: underline text-xl">SIDEBAR</p>
               <ul>
                <button onClick={handleClick}>
                    LogIn
                </button>
                <br></br>
                <button>
                    More
                </button>
                <br></br>
                <button>
                    Help
                </button>
                <br></br>
                 <button>
                    Contact
                </button>
               </ul>
            </div>
            
        </>
    )
}