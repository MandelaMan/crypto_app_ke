import React from 'react'
import './BidPaymentAcc.css'
import BottomBar from '../BottomBar/BottomBar'

const BidPaymentAcc = () => {
  return (
    <div className='bid-payment-account'>
      <div className="bid-payment-account-header">
          <p>Bid Payment Account</p>
      </div>
      <hr />
      <div className="bid-payment-details">
        <p>Account Name : James Malelu</p>
        <p>Phone Number : 0708460976</p>
      </div>
      <BottomBar />
    </div>
  )
}

export default BidPaymentAcc
