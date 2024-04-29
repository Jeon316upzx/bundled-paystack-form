import React from 'react'

const Badge = ({ title }) => {
  return (
    <span className='ml-2 p-[1.5px] bg-red-500 uppercase text-white text-[7px]'>
      {title}
    </span>
  )
}

export default Badge
