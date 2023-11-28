import React from 'react'
import logo from "./../assets/logo.svg"
import facebook from "./../assets/icon-facebook.svg"
import youtube from "./../assets/icon-youtube.svg"
import twitter from "./../assets/icon-twitter.svg"
import pinterest from "./../assets/icon-pinterest.svg"
import instagram from "./../assets/icon-instagram.svg"

const Footer = () => {
  return (
    <div className='h-fit px-32 py-14 w-screen bg-navy flex justify-between max-[640px]:flex-col max-[640px]:text-center max-[640px]:px-8 max-[640px]:items-center'>
      <div className='flex max-[640px]:flex-col max-[640px]:items-center'>
        <div className='flex flex-col justify-between mr-14 max-[640px]:mr-0'>
          <img src={logo} alt='logo' className='text-white max-[640px]:mb-4' />
          <div className='flex max-[640px]:my-6'>
            <button> <img src={facebook} className='w-4 max-[640px]:w-6 max-[640px]:mr-4 mr-2' /> </button>
            <button> <img src={youtube} className='w-4 max-[640px]:w-6 max-[640px]:mr-4 mr-2' /> </button>
            <button> <img src={twitter} className='w-4 max-[640px]:w-6 max-[640px]:mr-4 mr-2' /> </button>
            <button> <img src={pinterest} className='w-4 max-[640px]:w-6 max-[640px]:mr-4 mr-2' /> </button>
            <button> <img src={instagram} className='w-4 max-[640px]:w-6 max-[640px]:mr-4 mr-2' /> </button>
          </div>
        </div>

        <div className='grid-2-3 text-white text-xs font-thin mr-10 max-[640px]:mr-0'>
          <button>About Us</button>
          <button>Contact</button>
          <button>Blog</button>
          <button>Careers</button>
          <button>Support</button>
          <button>Privacy Policy</button>
        </div>

      </div>


      <div className='flex flex-col items-end'>
        <button className='rounded-full bg-gradient-to-r from-green to-blue text-white px-8 py-3 text-sm mb-6'>
          Request Invite
        </button>
        <span className='text-grey text-xs font-xl'>@EasyBank all rights reserved</span>
      </div>



    </div>
  )
}

export default Footer
