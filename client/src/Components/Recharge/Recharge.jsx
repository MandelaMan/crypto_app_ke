import { useState } from 'react'
import './Recharge.css'
import mpesa_logo from '../Assets/mpesa-logo.png'


const Recharge = () => {
  const [status,currentStatus] = useState(null)
  const [amount,setAmount] = useState(0)

  return (
    <>{status === null ? 
    <div className='recharge'>
      <div className="recharge-bar">
          <p>KES {amount}.00</p>
          <p>My Balance</p>
      </div>
      <div className="recharge-amounts">
        <div className="recharge-contents">
          <div>
              <button onClick={() => setAmount(1500)}>Recharge 1,500</button>
              <button onClick={() => setAmount(4100)}>Recharge 4,100</button>
              <button onClick={() => setAmount(6200)}>Recharge 6,200</button>
          </div>
          <div>
              <button onClick={() => setAmount(13500)}>Recharge 13,500</button>
              <button onClick={() => setAmount(22000)}>Recharge 22,000</button>
              <button onClick={() => setAmount(40000)}>Recharge 40,000</button>
          </div>
          <div>
              <button onClick={() => setAmount(52000)}>Recharge 52,000</button>
              <button onClick={() => setAmount(79000)}>Recharge 79,000</button>
              <button onClick={() => setAmount(120000)}>Recharge 120,000</button>
          </div>
        </div>
      </div>
      <div className="recharge-input">
        <p>Recharge Amount</p>
        <input type="text" placeholder='Please enter amount recharged' value={amount} disabled={true}/>
          <button onClick={()=>{currentStatus('recharge')}} disabled={amount < 1 && true}>
            Recharge
          </button>
      </div>
      <div className="deposit-rules">
        <p>Deposit Rules</p>
        <p>1. The minimum deposit amount for any transaction is 2500 KES</p>
        <p>2. After succesful recharge, kindly wait for 1-3 minutes after filling in the transaction code to check whether your account has recharged successfuly.</p>
        <p>3. If the recharge is unsuccesful for more than 30 minutes after payment, please contact customer care.</p>
      </div>
   </div> 
    : <>

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
                  <p>{amount} KES <button>Copy</button></p>
                  <p>James Malelu <button>Copy</button></p>
                  <p>0708460956 <button>Copy</button></p>
              </div>
          </div>
          <div className="deposit-submit-info">
              <p>*Transaction id is required</p>
              <p>Get it from payment notification SMS</p>
              <input type="Text" placeholder='Input transaction id [Eg: QGUOCKTY34HC]' />
              <button>submit mpesa transaction code for validation</button>
              <button onClick={()=>{currentStatus(null)}} >{`<<`} Go Back</button>
          </div>
</div>
</>}</>  
  )
}

export default Recharge
