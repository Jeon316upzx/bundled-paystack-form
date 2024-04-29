import React from "react";

const PayButton = ({ amount, currency, title, outline, onClick, loading }) => {
  return  (
    !outline ? (
    amount ?  <button onClick={(e)=> onClick(e)} className="bg-green-600 py-3 rounded-md text-white text-sm">
     { loading ?  'loading...' : `Pay ${currency} ${amount}` } 
    </button>
 : 
    <button onClick={(e)=> onClick(e)} className="bg-green-600 py-3 rounded-md text-white text-sm">
      { loading ? 'loading' : title }
    </button>) 
    
    : 

    (
      amount ?  <button onClick={(e)=> onClick(e)} className="bg-white py-3 rounded-md text-black text-sm border-solid border-2 border-gray-400">
        { loading ?  'loading...' : `Pay ${currency} ${amount}` } 
      </button>
   : 
      <button  onClick={(e)=> onClick(e)} className="bg-white py-3 rounded-md text-black text-sm border-solid border-2 border-gray-400">
         { loading ? 'loading' : title }
      </button>)
  )
};

export default PayButton;
