import React from 'react'
import { star } from '../assets/icons'
const ReviewCard = ({imgURL,customerName, rating, feedback}) => {
  return (
    <div className="flex flex-col justify-center
    items-center">
      <img src={imgURL} alt="customer"
      className='rounded-full object-cover 
      w-[120px] h-[120px]'/>
      <p className='mt-6 max-w-sm 
      text-center info-text '>{feedback}</p>
     
      <div className='mt-3 flex 
      justify-center items-center gap-2.5'>
        <img src={star} className='object-contain m-0 w-[24]
        h-[24]'/>
        <p className='text-xl font-montserrat
        text-slate-gray'>({rating})</p>
        </div>

        <div>
        <h3 className='mt-1 font-palanquin 
        text-3xl text-center font-bold'>{customerName}</h3>
      </div>
    </div>
  )
}

export default ReviewCard
