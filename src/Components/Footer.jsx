 import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook,FaInstagram,FaTwitter,FaYoutube  } from "react-icons/fa";
 
 function Footer() {
   return (
     <>
        <div className=' bg-gradient-to-r from-slate-600 to-blue-800  text-white '>
        
        <div className='container mx-auto px-4' >
        <div className='grid grid-cols-1 gap-10  md:grid-cols-3 p-4'>
            <div>
                <h1 className=' text-2xl font-bold mb-4'>Travel Agency</h1>
                <p className=' mb-4'>Your trusted partner for unforgebetable tavel experience, Explorw the world with us</p>

            </div>
            <div className=' flex flex-col md:items-center'>
                <h2 className=' text-xl font-semibold mb-4 '>Quick links</h2>
                <div className=' flex flex-col mb-4 space-y-2'>
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                  </div>
                  
            </div>
            <div>
                <h1 className='text-xl font-bold mb-4'>Follow us</h1>
                <div className='flex space-x-4 mb-4 '>
                <FaFacebook size={30} className=' text-blue-500 hover:text-blue-600 transform transition duration-300 hover:scale-110 hover:cursor-pointer' />
                <FaInstagram size={30} className=' text-pink-500 hover:text-pink-600 transform transition duration-300 hover:scale-110 hover:cursor-pointer' />
                <FaTwitter size={30} className=' text-white transform transition duration-300 hover:scale-110 hover:cursor-pointer' />
                <FaYoutube size={30} className=' text-red-500 hover:text-red-600 transform transition duration-300 hover:scale-110 hover:cursor-pointer' />
                

                </div>
                <form className=' flex items-center justify-center mt-8 gap-6' >
                    <input type="email" placeholder='Enter your Email' className=' w-full p-2 rounded-lg bg-gray-700 border border-gray-500' />
                    <button className='bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold px-4 rounded-r-lg border border-blue-600 py-2 transform transition duration-300 hover:scale-110'>Subscribe</button>
                  </form>
            </div>
        </div>
        <div className='text-white flex justify-between mt-8 border-t-2 border-pink-600 pt-4 '>
            <p>@ 2024 Travel Agency .All right</p>
            <div className=' flex space-x-4 mt-4 md:mt-0'>
            <Link to="">Privacy Policy</Link>
            <Link to="">Terms of services</Link>
            
            </div>
        </div>
        </div>
        </div>
     </>
   )
 }
 
 export default Footer