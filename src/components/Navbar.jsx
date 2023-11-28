import React from 'react'
import logo from "./../assets/logo.svg"
import menu from "./../assets/icon-hamburger.svg"

const Navbar = () => {
  return (
    <div className='absolute px-32 py-4 flex justify-between w-screen max-w-full overflow-hidden bg-white items-center z-50 max-[640px]:px-8 max-[640px]:py-5'>
      <img src={logo} alt='logo' className=' flex-shrink-0 ' />
      
      <ul className='flex text-sm max-[640px]:hidden' >
        <li> <button className='mr-6 text-grey'> Home </button>  </li>
        <li> <button className='mr-6 text-grey'> About </button>  </li>
        <li> <button className='mr-6 text-grey'> Contact </button>  </li>
        <li> <button className='mr-6 text-grey'> Blog </button>  </li>
        <li> <button className='mr-6 text-grey'> Careers </button>  </li>
      </ul>

      <button className='rounded-full bg-gradient-to-r from-green to-blue text-white px-8 py-3 text-sm max-[640px]:hidden'>
        Request Invite
      </button>

      <button className="hidden max-[640px]:block">
        <img src={menu} alt='menu-icon'  className='w-8'/>
      </button>
 
      
    </div>
  )
}

export default Navbar
