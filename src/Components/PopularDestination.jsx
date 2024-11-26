 import React from 'react'
 const destinations = [
    {
        image :'./picture/nature.jpg',
        title : 'stars',
        description: 'The stars shine in night',
    },
    {
        image :'./picture/des1.jpg',
        title : 'Pakistan',
        description: 'The stars shine in night',

    },
    {
        image :'./picture/des2.jpg',
        title : 'Thailand',
        description: 'The stars shine in night',
        

    },
    {
        image :'./picture/des3.jpg',
        title : 'Switezerland',
        description: 'The stars shine in night',

    },
    // {
    //     image :'./picture/tra.jpg',
    //     title : 'stars, sky',
    //     description: 'The stars shine in night',

    // },



 ]
 
 function PopularDestination() {
   return (
    <div className=' py-12 bg-gray-100' >
    <div className='container mx-auto px-4 ' >
        <h3 className=' text-3xl font-bold text-center mb-10'>Popular destination</h3>
        <div className=' grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 '>
            {destinations.map((city,index)=>
            <div key={index} className=' bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-110'>
                <img  src={city.image} alt={city.title} className=' w-full h-48 object-cover ' />
                <div className=' p-4'>
                <h4 className=' text-xl font-bold mb2 transform transition duration-500 hover:scale-105'>{city.title}</h4>
                <p className='text-purple-600 transform transition duration-500 hover:scale-105'>{city.description}</p>
                </div>
            </div>
            )}
        </div>
    </div>

    </div>
   )
 }
 
 export default PopularDestination