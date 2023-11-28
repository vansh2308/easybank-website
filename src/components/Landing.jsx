import React from 'react'
import bgimgIntro from "./../assets/bg-intro-desktop.svg"
import mockupImg from "./../assets/image-mockups.png"

const Landing = () => {
  return (
    <div className='w-screen max-h-screen h-screen px-32 flex items-center overflow-x-hidden landing'>
      <img src={bgimgIntro} alt='bg-img-intro' className='absolute h-screen -right-56 bottom-0' />
      <img src={mockupImg} alt='mockuop-img' className='-right-28 absolute top-28 z-40' />


      <div className='w-1/3'>
        <h1 className='text-[3rem] leading-snug text-navy mb-4'> Next Generation Digital Banking</h1>
        <p className='text-grey font-normal text-md mb-10'>
          Take your financial life online. Your Easybank account
          will be a one-stop-shop for spending, saving,
          budgeting, investing, and much more.
        </p>
        <button className='rounded-full bg-gradient-to-r from-green to-blue text-white px-8 py-3 text-sm'>
          Request Invite
        </button>

      </div>

    </div>
  )
}

export default Landing
