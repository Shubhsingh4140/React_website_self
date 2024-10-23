import { Button } from "@nextui-org/react";
import React, { useContext } from "react";
import { userContext } from "../Context/UserContextProvider";

export default function Login(){
   
    const {setVis}=useContext(userContext)

    const closeLogin=()=>{
        setVis(false)

    }

    return(
        <>
        <div className="  h-96 w-160 z-10 fixed top-1/4 left-1/3 flex flex-col items-center bg-yellow-50 text-black rounded-xl shadow-lg outline-none backdrop-blur-3xl"> 
            <div>
              
                <p className="text-center pb-10 text-3xl pt-4">Login</p>
                <Button  onClick={closeLogin}className="fixed top-0 right-0 bg-red-600 ">cut</Button>
                
                <div >
                    <label>USERNAME</label>
                    <input type='text'className="m-4 text-black  h-12" placeholder="UserName"/>
                </div>
                <div >
                    <label>PASSWORD</label>
                    <input type='password'className="m-4 text-black  h-12" placeholder="Password"/>
                </div>
               
                <div className="flex justify-center">
                    <Button className="bg-customBlue rounded-full mt-8">Submit</Button>
                </div>

            </div>
        </div>
        </>
    )
}