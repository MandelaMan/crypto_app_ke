import React from 'react'
import './Deposit.css'
import mpesa_logo from '../Assets/mpesa-logo.png'


const Deposit = () => {
  return (
    <div className='deposit'>
        <div className="depostit-mpesa-logo">
            <img src={mpesa_logo} alt="" />
        </div>
        <div className="deposit-mpesa-info">
            <h3>OrderId: 425665356753636</h3>
            <p>
             Please copy the phone number and paste it into
             your M-Pesa app. Before sending, ensure to verify the recipient's name to prevent any validation issues.
            </p>
        </div>
        <div className="deposit-payment-number">
            <div className="left-side">
                <p>Payment Amount: </p>
                <p>Sent To:</p>
                <p>Phone Number:</p>
            </div>
            <div className="right-side">
                <p>4500 KES <button>Copy</button></p>
                <p>James Malelu <button>Copy</button></p>
                <p>0708460956 <button>Copy</button></p>
            </div>
        </div>
        <div className="deposit-submit-info">
            <p>*Transaction id is required</p>
            <p>Get it from payment notification SMS</p>
            <input type="Text" placeholder='Input transaction id [Eg: QGUOCKTY34HC]' />
            <button>submit mpesa transaction code for validation</button>
        </div>
    </div>
  )
}

export default Deposit
