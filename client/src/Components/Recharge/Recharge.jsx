import { useState } from 'react'
import './Recharge.css'
import { Link } from 'react-router-dom'

const Recharge = () => {
  const [status,currentStatus] = useState('recharge')
  const [amount,setAmount] = useState(0)
  
  return (
    <div className='recharge'>
        <div className="recharge-bar">
            <p>KES {amount}.00</p>
            <p>My Balance</p>
        </div>
        <div className="recharge-amounts">
          <div className="recharge-contents">
            <div>
                <button onClick={() => setAmount(1500)}>Recharge 1500</button>
                <button onClick={() => setAmount(4100)}>Recharge 4100</button>
                <button onClick={() => setAmount(6200)}>Recharge 6200</button>
            </div>
            <div>
                <button onClick={() => setAmount(13500)}>Recharge 13500</button>
                <button onClick={() => setAmount(22000)}>Recharge 22000</button>
                <button onClick={() => setAmount(40000)}>Recharge 40000</button>
            </div>
            <div>
                <button onClick={() => setAmount(52000)}>Recharge 52000</button>
                <button onClick={() => setAmount(79000)}>Recharge 79000</button>
                <button onClick={() => setAmount(120000)}>Recharge 120000</button>
            </div>
          </div>
            
        </div>
        <div className="recharge-input">
          <p>Recharge Amount</p>
          <input type="text" placeholder='Please enter amount recharged' value={amount} disabled={true}/>
          <button  onClick={()=>{currentStatus('recharge')}}>
            <Link style={{textDecoration: 'none'}} to = '/deposit'>
               Recharge
            </Link>
            {status==="recharge"? <div className=''></div>:<></>}
          </button>
        </div>
        <div className="deposit-rules">
          <p>Deposit Rules</p>
          <p>1. The minimum deposit amount for any transaction is 2500 KES</p>
          <p>2. After succesful recharge, kindly wait for 1-3 minutes after filling in the transaction code to check whether your account has recharged successfuly.</p>
          <p>3. If the recharge is unsuccesful for more than 30 minutes after payment, please contact customer care.</p>
        </div>
    </div>
  )
}

export default Recharge
