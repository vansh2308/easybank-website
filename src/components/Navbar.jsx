import React from 'react'
import logo from "./../assets/logo.svg"

const Navbar = () => {
  return (
    <div className='absolute px-32 py-4 flex justify-between w-screen max-w-full overflow-hidden bg-white items-center z-50 '>
      <img src={logo} alt='logo' className=' flex-shrink-0 ' />
      
      <ul className='flex text-sm' >
        <li> <button className='mr-6 text-grey'> Home </button>  </li>
        <li> <button className='mr-6 text-grey'> About </button>  </li>
        <li> <button className='mr-6 text-grey'> Contact </button>  </li>
        <li> <button className='mr-6 text-grey'> Blog </button>  </li>
        <li> <button className='mr-6 text-grey'> Careers </button>  </li>
      </ul>

      <button className='rounded-full bg-gradient-to-r from-green to-blue text-white px-8 py-3 text-sm'>
        Request Invite
      </button>
 
      
    </div>
  )
}

export default Navbar
