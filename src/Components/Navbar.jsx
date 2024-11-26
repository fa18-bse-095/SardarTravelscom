// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import { FaTimes } from "react-icons/fa";
// import { FaBars } from "react-icons/fa";

// function Navbar() {
//     const [isOpen, setOpen] = useState(false)
//     return (
//         <>
//             <nav className=' fixed m-4 top-0 right-0 left-0 shadow-lg z-50 bg-white'>
//                 <div className='container px-4 flex justify-between items-center h-16'>
//                     <h3 className=' text-2xl font-bold'>Travel</h3>
//                     <div className=' hidden md:flex space-x-4  text- font-bold items-center  '>
//                         <Link to="/" className=' px-6 py-2 hover:bg-gray-500 hover:text-white'>Home</Link>
//                         <Link to="/gallery" className=' px-4 py-2 hover:bg-gray-500 hover:text-white' >Gallery</Link>
//                         <Link to="/contact" className=' px-6 py-2 hover:bg-gray-500 hover:text-white'>Contact</Link>
//                         <Link to="/about" className=' px-6 py-2 hover:bg-gray-500 hover:text-white'>About</Link>
//                         <button className='py-2 px-6 border bg-gray-300 rounded-lg hover:bg-blue-500 transition transform duration-300 hover:scale-105 hover:rounded-xl'>Login</button>

//                     </div>
//                     <div className=' md:hidden'>
//                         <button onClick={() => setOpen(!isOpen)}>
//                             {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
//                         </button>
//                     </div>

//                 </div>
//                 {
//                     isOpen && (
//                         <div className=' md:hidden flex  space-y-4 py-4 flex-col bg-white  text-black font-bold items-center  '>
//                         <Link to="/" className=' px-6 py-2 hover:bg-gray-500 hover:text-white'>Home</Link>
//                         <Link to="/gallery" className=' px-6 py-2 hover:bg-gray-500 hover:text-white' >Gallery</Link>
//                         <Link to="/contact" className=' px-6 py-2 hover:bg-gray-500 hover:text-white'>Contact</Link>
//                         <Link to="/about" className=' px-6 py-2 hover:bg-gray-500 hover:text-white'>About</Link>
//                         <button className='py-2 px-6 border bg-gray-300 rounded-lg hover:bg-blue-500 transition transform duration-300 hover:scale-105 hover:rounded-xl'>Login</button>

//                     </div>

//                     )
//                 }
//             </nav>
//         </>
//     )
// }

// export default Navbar

import React, { useState, useEffect, useRef } from 'react';
import Image from "../Assets/fly.png"
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from "react-icons/fa";

function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            <nav className='fixed m-4 top-0 right-0 left-0 shadow-lg z-50 p-2 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 '>
                <div className='container px-4 flex justify-between items-center h-16'>
                    <h3 className='text-2xl font-bold text-white p-2  flex gap-3 '>Sardar Travel 
                    <img src={Image} alt="" className=' flex w-6 h-7 justify-between items-center' />
                    </h3>
                    <div className='hidden md:flex space-x-4 font-bold items-center text-white text-[18px] '>
                        <Link to="/" className='px-6 py-2 hover:bg-gray-500 hover:text-white hover:rounded-md '>Home</Link>
                        <Link to="/gallery" className='px-4 py-2 hover:bg-gray-500 hover:text-white hover:rounded-md '>Gallery</Link>
                        <Link to="/contact" className='px-6 py-2 hover:bg-gray-500 hover:text-white hover:rounded-md'>Contact</Link>
                        <Link to="/about" className='px-6 py-2 hover:bg-gray-500 hover:text-white hover:rounded-md'>About</Link>
                        <Link to="/login" className='px-6 py-2 hover:bg-gray-500 hover:text-white hover:rounded-md'>Login</Link>
                        {/* <button <Link to={}></Link> className='py-2 px-6 border bg-gray-300 rounded-lg hover:bg-blue-500 transition transform duration-300 hover:scale-105 hover:rounded-xl'>Login</button> */}
                    </div>
                    <div className='md:hidden'>
                        <button onClick={() => setOpen(!isOpen)}>
                            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div ref={menuRef} className='md:hidden flex space-y-4 py-4 flex-col  text-black font-bold items-center bg-gradient-to-r from-teal-400 to-blue-500'>
                        <Link to="/" className='px-6 py-2 hover:bg-gray-500 hover:text-white'>Home</Link>
                        <Link to="/gallery" className='px-6 py-2 hover:bg-gray-500 hover:text-white'>Gallery</Link>
                        <Link to="/contact" className='px-6 py-2 hover:bg-gray-500 hover:text-white'>Contact</Link>
                        <Link to="/about" className='px-6 py-2 hover:bg-gray-500 hover:text-white'>About</Link>
                        <button className='py-2 px-6 border bg-gray-300 rounded-lg hover:bg-blue-500 transition transform duration-300 hover:scale-105 hover:rounded-xl'>Login</button>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
