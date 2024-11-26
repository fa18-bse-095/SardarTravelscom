import React from 'react'

function Login() {
  return (
    
    <div className='lo  h-[120vh] flex items-center justify-center bg-cover bg-center   '>    
    <div className=' text-white  border border-slate-500 rounded-md p-10 shadow-lg backdrop-filter backdrop-blur-sm  bg-opacity-30 relative -top-10  bg-gray-900  '>
      <h1 className='text-4xl font-bold text-center'>Login</h1>
      <form action="">
        <div className='relative my-4'>
        <label htmlFor="username"  >Username</label>
          <input type="text" className='text-white block w-72 py-2 px-0 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer 'placeholder='Enter your Username' />
          
        </div>
        <div className='relative my-4'>
        <label htmlFor="password">Password</label>
          <input  type="password" className='text-white block w-72 py-2 px-0 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer ' placeholder='Enter Password'  />
          
        </div>
        <button type='submit' className='w-full mb-4 text-[18px]  rounded-md bg-blue-500 py-2 hover:bg-blue-600  duration-300 mt-5 '>Login
        
        </button>
      </form>
    </div> 

        


      </div>
    

  
  )
}

export default Login