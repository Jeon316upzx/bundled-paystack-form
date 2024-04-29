import React from 'react'

const Header = ({ email, currency, amount, logo }) => {
  return (
    <div className='flex flex-row justify-between items-center'>
        <img src={logo} alt='company logo' height={25} width={25}/>
        <div className='flex flex-col'>
           <span className='text-xs opacity-60'>{email} </span>
           <span className='text-[12px] text-green-300'>{currency} {amount}</span>
        </div>
    </div>
  )
}

export default Header
