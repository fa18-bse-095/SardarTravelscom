import React from 'react'
const images=[
    './picture/nature.jpg',
    './picture/des1.jpg',
    './picture/des2.jpg',
    './picture/des3.jpg',
    './picture/ki.jpg',
    './picture/kl.jpg',
    './picture/kp.jpg',





]

function Gallery() {
  return (
    <>

   <div>
    <div className='lo mx-w-[1240px] bg-cover  bg-center relative h-96    '>
       <div className=' absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
       <h4 className=' text-4xl md:text-6xl font-bold text-white mb-4'>Gallery</h4>
       
        

       </div>
    </div>
    <div className=' container mx-auto px-4 py-6'>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {images.map(image =>(
                <div className=' shadow-md overflow-hidden transform transition duration-300 hover:scale-110' >
                    <img src={image} alt="" className=' w-full h-full object-cover rounded-lg ' />
                </div>

            ))}
        </div>
    </div>
    </div>
    </>
  )
}

export default Gallery