import React from 'react'
import './WithdrawalHistory.css'

const WithdrawalHistory = () => {
  return (
    <div className='withdraw-history'>
        <div className="withdraw-history-header">
            <h3>Withdraw History</h3>
        </div>
        <div className="withdraw-history-content">
            <table>
                <tr>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td>15th Jan 09:02</td>
                    <td>Unaudited</td>
                    <td>KES 10000</td>
                </tr>
                <tr>
                    <td>12 Jan 15:50</td>
                    <td>Suceeded</td>
                    <td>KES 1125</td>
                </tr>
            </table>
        </div>
      
    </div>
  )
}

export default WithdrawalHistory
