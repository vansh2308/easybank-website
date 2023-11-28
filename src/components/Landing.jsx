import React from 'react'
import bgimgIntro from "./../assets/bg-intro-desktop.svg"
import mockupImg from "./../assets/image-mockups.png"
import bgimgIntroMob from "./../assets/bg-intro-mobile.svg"
import { useDispatch, useSelector } from 'react-redux'
import { setMenu } from '../features/menuSlice'

const Landing = () => {
  const menu = useSelector(state => state.menu.value)
  const dispatch = useDispatch()


  return (
    <div className='w-screen  h-screen px-32 max-[640px]:px-8 flex items-center overflow-x-hidden   '>
            
      {
        menu && 
        <div className='w-screen h-full absolute left-0 pt-20 px-8 z-[100] hidden max-[640px]:block'>
        <div className='bg-white flex flex-col items-center justify-center py-7 rounded-lg shadow-[0_40px_100px_100px] shadow-navy/40' >
          <button className='mb-4 font-medium' onClick={() => dispatch(setMenu(false))}>Home</button>
          <button className='mb-4 font-medium' onClick={() => dispatch(setMenu(false))}>About</button>
          <button className='mb-4 font-medium' onClick={() => dispatch(setMenu(false))}>Contact</button>
          <button className='mb-4 font-medium' onClick={() => dispatch(setMenu(false))}>Blog</button>
          <button className='mb-4 font-medium' onClick={() => dispatch(setMenu(false))}>Careers</button>
        </div>
      </div>}


      <img src={bgimgIntro} alt='bg-img-intro' className='absolute h-screen -right-56 bottom-0 max-[640px]:hidden  ' />
      <img src={mockupImg} alt='mockuop-img' className='-right-28 absolute top-28 z-40 max-[640px]:-top-20 max-[640px]:left-1/2 max-[640px]:-translate-x-1/2 max-[640px]:w-5/6' />
      <img src={bgimgIntroMob} alt='bgimg-mobile' className='hidden max-[640px]:block absolute -top-14 left-0 w-full' />

      <div className='w-1/3 max-[640px]:w-full max-[640px]:text-center max-[640px]:px-4 max-[640px]:mt-52'>
        <h1 className='text-[3rem] leading-snug text-navy mb-4 max-[640px]:text-3xl'> Next Generation Digital Banking</h1>
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
