import React, { useState } from 'react'
import './RechargeLog.css'
import { Link } from 'react-router-dom';

const RechargeLog = () => {
    const [recharge,setRecharge] = useState('recharge');
  return (
    <div className='recharge-log'>
        <div className="recharge-log-header">
            <h3>Recharge Log</h3>
        </div>

        <hr />
        <div className="recharge-log-list">
            <div className="recharge-log-list-left-side">
                <p>Order SN: 0000000111</p>
                <p>Amount: $50.00</p>
                <p>Time: 01 Jan 03:00</p>
            </div>
            <div className="recharge-log-list-right-side">
                <p>in progress</p>
                <button onClick={() => {setRecharge('recharge')}}>
                    <Link style={{textDecoration: 'none'}} to = '/rechargeUpload'> 
                        Transmit
                    </Link>
                    {recharge==="recharge"? <div className=''></div>:<></>}
                </button>
            </div>
        </div>
        <hr />
       
        <div className="recharge-log-list">
            <div className="recharge-log-list-left-side">
                <p>Order SN: 0000000111</p>
                <p>Amount: $50.00</p>
                <p>Time: 01 Jan 03:00</p>
            </div>
            <div className="recharge-log-list-right-side">
                <p>in progress</p>
                <button>Transmit</button>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default RechargeLog
