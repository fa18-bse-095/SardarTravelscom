import React from 'react'

function About() {
  return (
   <>
    <div>
    <div className='lo mx-w-[1240px] bg-cover  bg-center relative h-96    '>
                    <div className=' absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
                        <h4 className=' text-4xl md:text-6xl font-bold text-white mb-4'>About Us</h4>



                    </div>
                </div>
                <div className=' container mx-auto px-6 py-10 '>
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div>
                        <img className=' w-full h-full rounded-xl transform transition duration-300 hover:scale-110' src="./picture/wa.jpg" alt="" />
                    </div>
                    <div className=' flex flex-col justify-center'>
                        <h1 className=' text-2xl font-bold mb-4 '>Who We Are</h1>
                        <p className=' text-gray-500 mb-4 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consectetur aperiam vitae perferendis a harum maiores recusandae iure ab? Eos tempore laboriosam vel quae at adipisci molestias architecto aliquid deleniti!</p>
                        <h3 className=' text-2xl font-bold mb-4'> Our Mission</h3>
                        <p className=' text-gray-500 mb-4 font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam commodi veniam dolor consectetur pariatur recusandae ipsa vitae labore cupiditate ducimus unde voluptates impedit praesentium reiciendis, nobis eius autem placeat. Hic?</p>
                    </div>
                </div>
                </div>

    </div>
   </>
  )
}

export default About