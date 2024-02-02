import {useEffect, useState} from 'react'
import './WithdrawalHistory.css'
import { useSelector } from 'react-redux'

const WithdrawalHistory = () => {
    const { currentUser } = useSelector((state) => state.user)

    const [withdrawals, setWithdrawals] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const getWithdrawals = async() => {
        try{
            setLoading(true)
            const res = await fetch(`/api/user/transactions/${currentUser.user_code}?type=Withdrawal`, {
                method: 'GET',
            });
            const data = await res.json()
            if(data['success'] === 0){ 
                setError(data.message)        
                return;
            }    
            setWithdrawals(data)
            setLoading(false)
        }
        catch(err){
          setError(err.message)
        }
    }

    useEffect(() => {     
        getWithdrawals();    
        return () => {
            // second
        }
    }, [])
    
  return (
    <div className='withdraw-history'>
        <div className="withdraw-history-header">
            <h3>Withdraw History</h3>
        </div>      
        <div className="withdraw-history-content">
            {error && <>Error trying to fetch withdrawls. Try again later</>}
            {loading ? <>Loading</> : 
            <>                
                {!loading && !error && withdrawals && withdrawals.length > 0 ?  
                    <table>
                        <tr>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Amount</th>
                        </tr>
                        {withdrawals.map((w,i) =>  
                            <tr key={i}>
                                {/* Install moment to formart date */}
                                <td>15th Jan 09:02</td>
                                <td>{w.status}</td>
                                <td>KES {w.amount}</td>
                            </tr>
                        )}                   
                    </table>
                :  
                    <div className='zero-withdrawals'>
                        No withdrawals
                    </div>
                } 
            </>
            }                     
        </div>       
    </div>
  )
}

export default WithdrawalHistory
