import {useEffect, useState} from 'react'
import './Withdraw.css'

import { useSelector} from "react-redux";

const Withdraw = () => {
    const { currentUser } = useSelector((state) => state.user)
    const [withdrawableAmount, setWithdrawableAmount] = useState(null)
    const [amount, setAmount] = useState(0)

     const updateWithdrawableEarnings = async (data) => {

        let total_earnings = data.filter((transaction) => {
            return transaction.type === 'Earnings' && transaction.status === 'Available';
        });
                
        total_earnings = total_earnings.reduce((acc, transaction) => acc + transaction.amount, 0);

        return total_earnings
    }

    const getWithdrawableAmount= async () => {
        try{

            const res = await fetch(`/api/user/transactions/${currentUser.user_code}`, {
                method: 'GET',
            });

            const data = await res.json()

            if(data.success === 0){ 
                // setMyListingsError(data.message)        
                return;
            }
            else{
                let withdrawable_earnings = await updateWithdrawableEarnings(data); 

                setWithdrawableAmount(withdrawable_earnings)
            }
        }
        catch(err){
            console.log(err)
        }
    } 

    const handleChange = (e) => {
        setAmount(e.target.value)
    }

     useEffect(() => {   
        
      getWithdrawableAmount(); 

      return ()=>{
        // removeEventListner(a)  //whenever the component removes it will executes
      }
    } ,[]) 

  return (
    <div className='withdraw'>
        <div className="withdraw-header">
            Withdraw
        </div>
        <div className="withdraw-account-balance">
            <p>{withdrawableAmount ? `KES ${withdrawableAmount}.00` : "Fetching withdrawable amaount..."}</p>
            <p>My Balance</p>
        </div>
        <div className="withdraw-amount-input">
            <p>Withdraw Amount</p>
            <input type="text" id="withdrawal_amount" onChange={handleChange} placeholder='Kindly input the withdrawal amount' />
            <button disabled={amount < 1 && true}>Withdraw</button>
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
