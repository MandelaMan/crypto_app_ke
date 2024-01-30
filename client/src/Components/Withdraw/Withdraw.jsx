import React from 'react'
import './Withdraw.css'

const Withdraw = () => {
  return (
    <div className='withdraw'>
        <div className="withdraw-header">
            Withdraw
        </div>
        <div className="withdraw-account-balance">
            <p>KES 0.00</p>
            <p>My Balance</p>
        </div>
        <div className="withdraw-amount-input">
            <p>Withdraw Amount</p>
            <input type="text" placeholder='Kindly input the withdrawal amount' />
            <button>Withdraw</button>
        </div>
        <div className="withdraw-rules">
            <p>
                1. Withdrawal hours are monday to friday, 9:00 AM to 17:00 PM. Funds will arrive within 24-48 hours
                .Withdrawals made on friday shall be processed on monday.
            </p>
            <p>
                2. Minimum withdrawal amount is 200 KES.
            </p>
            <p>
                3.No fee for withdrawals
            </p>
            <p>
                If the withdrawal is not recived within 48 hours, please contact customer care.
            </p>
        </div>
    </div>
  )
}

export default Withdraw
