import React from 'react'
const client=[
    {
        id:"1",
        name:"Jhon Doe",
        image: './client/men2.jpg',
        text: 'This is trvel agency company provided excellent services and helped',
        location: 'New York,USA'
    },
    {
        id:2,
        name:"Jhon Doe",
        image: './client/men3.webp ',
        text: 'This is trvel agency company provided excellent services and helped',
        location: 'New York,USA'
    },
    {
        id:3,
        name:"Jhon Doe",
        image: './client/men5.jpg',
        text: 'This is trvel agency company provided excellent services and helped',
        location: 'New York,USA'
    },
   
]

function Ourclient() {
  return (
    <>
        <div className='py-28'>
            <div className='container mx-auto  bg-gradient-to-r from-teal-400 to-blue-500 py-20'>
            <h1 className=' text-center items-center font-bold text-3xl mb-10 text-white capitalize '>what our client say</h1>
            <div className=' grid sm:grid-cols-1 md:grid-cols-3 gap-8 '>
            { 
                client.map((client, index)=>(
                    <div key={index} className='bg-gray-300 rounded-lg shadow-md text-center cursor-pointer transform transition duration-500 hover:scale-105 items-center flex flex-col p-4 '>
                        <img src={client.image} alt="" className=' w-[40%] rounded-lg h-full mb-4' />
                        <h3>{client.name}</h3>
                        <h2>{client.id}</h2>

                        <h3 className=' text-xl font-bold  mb-4'>{client.text}  </h3>
                        <p className=' text-lg'>{client.location}</p>
                    </div>
                ))
            }

            </div>

            </div>
        </div>
    </>
  )
}

export default Ourclient