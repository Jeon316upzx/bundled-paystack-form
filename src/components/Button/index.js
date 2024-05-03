import React from "react";

const PayButton = ({ amount, currency, title, outline, onClick, loading }) => {
  return  (
    !outline ? (
    amount ?  <button onClick={(e)=> onClick(e)} className="btn-solid">
     { loading ?  'loading...' : `Pay ${currency} ${amount}` } 
    </button>
 : 
    <button onClick={(e)=> onClick(e)} className="btn-solid">
      { loading ? 'loading' : title }
    </button>) 
    
    : 

    (
      amount ?  <button onClick={(e)=> onClick(e)} className="btn-outline">
        { loading ?  'loading...' : `Pay ${currency} ${amount}` } 
      </button>
   : 
      <button  onClick={(e)=> onClick(e)} className="btn-outline">
         { loading ? 'loading' : title }
      </button>)
  )
};

export default PayButton;
