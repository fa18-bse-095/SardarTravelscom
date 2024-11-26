import React from 'react'
import PopularDestination from '../PopularDestination'
import Services from '../Services'
import Ourclient from '../Ourclient'



function Home() {
    return (
        <>
            <div className='lo mx-w-[1240px] bg-cover bg-center relative h-screen transform transition duration-500 hover:scale-105  '>
            
                <div className=' absolute inset-0 bg-black bg-opacity-50  flex flex-col items-center justify-center text-white capitalize ' >
                    <h1 className=' text-4xl md:text-6xl mb-4 '>Explore the world with Us </h1>
                    <p className=' text-xl mb-4'>Discover amazing places at exclusive deals</p>
                    <button className=' border px-6 mb-4 rounded-full py-2  text-lg md:text-xl hover:bg-blue-500 transform transition duration-300 hover:scale-105 '>Get started</button>
                </div>
            </div>

            <PopularDestination/>
            <Services/>
            <Ourclient/>
          
           
        </>
    )
}

export default Home