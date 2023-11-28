import React from 'react'
import imgConfetti from "./../assets/image-confetti.jpg"
import imgCurrency from "./../assets/image-currency.jpg"
import imgPlane from "./../assets/image-plane.jpg"
import imgRestaurant from "./../assets/image-restaurant.jpg"

const Articles = () => {
  const articleList = [
    {
      img: <img src={imgCurrency} className='w-full h-52' />,
      author: "Claire Robinson",
      title: "Receive money In any currency witn no fees",
      desc: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only revieve money in a single..."
    },
    {
      img: <img src={imgRestaurant} className='w-full h-52' />,
      author: "Claire Robinson",
      title: "Receive money In any currency witn no fees",
      desc: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only revieve money in a single... "
    },
    {
      img: <img src={imgPlane} className='w-full h-52' />,
      author: "Claire Robinson",
      title: "Receive money In any currency witn no fees",
      desc: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only revieve money in a single..."
    },
    {
      img: <img src={imgConfetti} className='w-full h-52' />,
      author: "Claire Robinson",
      title: "Receive money In any currency witn no fees",
      desc: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only revieve money in a single..."
    },
   
  ]

  return (
    <div className='w-screen h-fit px-32 py-40 bg-w '>
      <h1 className='text-4xl font-light leading-snug text-navy mb-8'>Latest Articles  </h1>

      <div className='w-full flex '>
        {
          articleList.map((item) => {
            return (
              <Article icon={item.img} author={item.author} title={item.title} desc={item.desc}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Articles


const Article = ({icon, author, title, desc }) => {
  return (
    <div className='w-1/4 pr-6 min-h-full'>
      <div className='w-full bg-white rounded-md overflow-hidden min-h-full'>
        {icon}
        
        <div className='w-full px-4 py-6'>
          <span className='text-xs text-grey'>By {author}</span>
          <h3 className='text-md leading-snug text-navy w-5/6 my-2'>{title}</h3>
          <p className='text-xs text-grey leading-relaxed font-medium w-11/12'>{desc}</p>
        </div>
      </div>
    </div>
  )
}
