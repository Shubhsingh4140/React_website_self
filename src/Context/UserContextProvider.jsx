import React, { createContext, useState } from "react";

export const userContext=createContext({vis:false,setVis:()=>{}});

export default function UserContextProvider({children}){
    const [vis,setVis]=useState(null)
        return(
            <>
                <userContext.Provider value={{vis,setVis}}>
                    {children}
                </userContext.Provider>
            </>
        )
}