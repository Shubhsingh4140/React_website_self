import React from 'react'
import {Link,NavLink} from 'react-router-dom'
// import img01 from './img01.png';



export default function Home() {
    return (
        <>
        <div className='flex flex-col items-center  text-white text-pretty'>
        <img src="React/React_self/src/Components/IMG_user.jpg" alt="profile picture"/>


        <p className='text-7xl m-6'>Hello Folks!,I'm Shubhankar</p>
        <p className='text-5xl m-3'>Aspiring Deverloper</p>
        <p className='text-xl m-2'>A 3rd year Student who is working to build his career as a developer by learning new Skills and Technologies.</p>
        </div>

        </>
    );
}
