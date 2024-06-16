import React from 'react'
import './Shipping.css'
export const Shipping = () => {
  return (
    <div className='shipping_container'>
        <div className='page_container'>
        <h1>SHIPPIG</h1>
        <div className="inputfields">
            <input type="text" placeholder="Enter your Address" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Pincode" />
            <input type="text" placeholder="Country" />
            <button className='paymenbutton'>PROCEED PAYMENT</button>
        </div>
        
        </div>
      
        
    </div>
  )
}
