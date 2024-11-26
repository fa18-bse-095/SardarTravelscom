import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
    const [formData, setFormData] = useState({
        name:"",
    })

    const handleInput = (e)=>{
        console.log('target: ',e.target)
        console.log('name: ',e.target.name)
        console.log('value: ',e.target.value)
        const {name,value} = e.target
        setFormData(()=>(
            {...formData, [name]:value}
        ))
    }

    const handleForm =(event)=>{
        event.preventDefault();
        setFormData({
            name:'',
        })
    }
    return (
        <>
            <div className=' bg-gray-100'>
                <div className='lo mx-w-[1240px] bg-cover  bg-center relative h-96    '>
                    <div className=' absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
                        <h4 className=' text-4xl md:text-6xl font-bold text-white mb-4'>Contact Us</h4>



                    </div>
                </div>
                <div className=' container mx-auto px-4 py-12  '>
                    <div className=' grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className=' bg-white rounded-lg shadow-md p-6'>
                           <h3 className=' text-2xl font-bold m mb-6'>Contact Detail</h3>
                            <div className='flex items-center mb-4'>
                                <FaEnvelope className=' text-blue-500 mr-2 text-xl'/>
                                <p>info@Sardartravelagency.com</p>
                            </div>
                            <div className='flex items-center mb-4'>
                                <FaPhone className=' text-blue-500 mr-2 text-xl' />
                                <p>phone : 03411190506</p>

                            </div>
                            <div className='flex items-center mb-4 '>
                                <FaMapMarkerAlt className=' text-blue-500 mr-2 text-xl' />
                                <p>St:23 Mingora swat ,Pakistan</p>

                            </div>

                        </div>
                        <div className=' bg-white rounded-lg shadow-md p-6  text-black'>
                            <h3 className=' text-2xl font-bold mb-4 '> Get in Touch</h3>
                            <form onSubmit={handleForm}>
                                <div className=' mb-4'>
                                    <label className=' block  mb-2  ' htmlFor="Name">Name</label>
                                    <input onChange={handleInput} value={formData.name} name='name' type="text" className=' w-full p-2 border border-gray-300 rounded' placeholder='Enter Name' />
                                </div>
                                <div className=' mb-4'>
                                    <label className='block  mb-2' htmlFor="Name">Email</label>
                                    <input type="email" className=' w-full p-2 border border-gray-600 ' placeholder='Enter email' />

                                </div>
                                <div className=' mb-4 text-black '>
                                    <label htmlFor="Name" className=' block  mb-2'>Massage</label>
                                    <textarea name="" className=' w-full p-2 border border-gray-500 rounded ' placeholder='Enter your message' id=""></textarea>
                                </div>
                                <button type='submit' className=' py-2 px-4 bg-gradient-to-r from-pink-500 to-blue-500 rounded-md text-white transform transition duration-300 hover:scale-110  '>Send Message</button>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact