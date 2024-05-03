import React from 'react'

const Header = ({ email, currency, amount, logo }) => {
  return (
    <div className='header-container'>
        <img src={logo} alt='company logo' height={25} width={25}/>
        <div className='email_curr '>
           <span className='email'>{email} </span>
           <span className='curr'>{currency} {amount}</span>
        </div>
    </div>
  )
}

export default Header
