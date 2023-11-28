import React from 'react'
import iconBudgetting from "./../assets/icon-budgeting.svg"
import iconApi from "./../assets/icon-api.svg"
import iconOnboarding from "./../assets/icon-onboarding.svg"
import iconOnline from "./../assets/icon-online.svg"




const Features = () => {
  const featureList  = [
    {
      icon:  <img src={iconOnline} className='aspect-square w-16 mb-8' />,
      title: "Online Banking",
      desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world"
    },
    {
      icon:  <img src={iconBudgetting} className='aspect-square w-16 mb-8' />,
      title: "Simple Budgeting",
      desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world"
    },
    {
      icon:  <img src={iconOnboarding} className='aspect-square w-16 mb-8' />,
      title: "Fast Onboarding",
      desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world"
    },
    {
      icon:  <img src={iconApi} className='aspect-square w-16 mb-8' />,
      title: "Open API",
      desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world"
    }
     
  ]
  return (
    <div className='w-screen h-fit px-32 py-36 bg-wd relative max-[640px]:px-8 max-[640px]:text-center max-[640px]:py-24'>
      <h1 className='text-4xl font-light leading-snug text-navy mb-8'> Why choose EasyBank? </h1>
      <p className='text-grey font-normal text-md w-1/2 mb-12 max-[640px]:w-full '>
        We leverage Open Banking to turn your bank account into your financial hub. <br />
        Control your finances like never before.
      </p>

      <div className='w-full flex max-[640px]:flex-col'>
        {
          featureList.map((item) => {
            return(
              <FeatureTile icon={item.icon} title={item.title} desc={item.desc} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Features

const FeatureTile = ({icon, title, desc}) => {
  return (
    <div className='flex flex-col w-1/4 pr-6 max-[640px]:w-full max-[640px]:items-center max-[640px]:mt-12'>
      {/* <img src={iconOnboarding} className='aspect-square w-16 mb-8' /> */}
      {icon}
      <h3 className='text-xl  leading-snug text-navy mb-8'>{title}  </h3>
      <p className='text-md font-extralight text-grey'>{desc} </p>
    </div>
  )
}
