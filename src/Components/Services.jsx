import React from 'react'
import { FaPlane, FaHotel,FaUmbrellaBeach, FaConciergeBell } from "react-icons/fa";
const services=[
    {
        icon: <FaPlane className='text-4xl text-blue-500' />,
        title: "Flight Booking",
        description:"we provided easy and quick ride flight booking services to make you traveal relax",
    },
    {
        icon: <FaHotel className='text-4xl text-blue-500' />,
        title: "Flight Booking",
        description:"we provided easy and quick ride flight booking services to make you traveal relax",
    },
    {
        icon: <FaUmbrellaBeach className='text-4xl text-blue-500' />,
        title: "Flight Booking",
        description:"we provided easy and quick ride flight booking services to make you traveal relax",
    },
    {
        icon: <FaConciergeBell className='text-4xl text-blue-500' />,
        title: "Flight Booking",
        description:"we provided easy and quick ride flight booking services to make you traveal relax",
    },
]

function Services() {
  return (
    <>
        <div className=' py-12 bg-gray-300 '>
            <div className=' container mx-auto px-4'>
            <h1 className=' text-center items-center font-bold text-3xl mb-8 '>Our Services</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 items-center text-center'>
                {
                    services.map((service,index) =>(
                        <div key={index} className=' bg-white rounded-lg shadow-md cursor-pointer p-8 flex flex-col items-center transform transition duration-300 hover:scale-110 '>
                            <div className='mb-4 '>{service.icon}</div>
                            <h3 className='text-xl font-bold mb-2'>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>


                    ))
                }
            </div>

            </div>
        </div>
    </>
  )
}

export default Services