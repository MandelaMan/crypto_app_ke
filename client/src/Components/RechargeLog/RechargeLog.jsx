import {useEffect, useState} from 'react'
import './RechargeLog.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const RechargeLog = () => {
    const [recharge, setRecharge] = useState('recharge');

     const { currentUser } = useSelector((state) => state.user)

    const [recharges, setRecharges] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const getRecharges = async() => {
        try{
            setLoading(true)
            const res = await fetch(`/api/user/transactions/${currentUser.user_code}?type=Recharge`, {
                method: 'GET',
            });
            const data = await res.json()
            if(data['success'] === 0){ 
                setError(data.message)        
                return;
            }    
            setRecharges(data)
            setLoading(false)
        }
        catch(err){
          setError(err.message)
        }
    }

    useEffect(() => {     
        getRecharges();    
        return () => {
            // second
        }
    }, [])

    return (
        <div className='recharge-log'>
            <div className="recharge-log-header">
                <h3>Recharge Log</h3>
            </div>
            <hr />
            {error && <>Error trying to fetch withdrawls. Try again later</>}
            {loading ? <>Loading....</> : 
            <>                
                {!loading && !error && recharges && recharges.length > 0 ?  
                    <>
                        {recharges.map((r,i) =>  
                            <div key={i}>
                                <div className="recharge-log-list" key={i}>
                                    <div className="recharge-log-list-left-side">
                                        <p>Order SN: {r.code ? r.code : "N/A"}</p>
                                        <p>Amount: KSH {r.amount}.00</p>
                                        {/* Install moment to formart dates */}
                                        <p>Time: 01 Jan 03:00</p>
                                    </div>
                                    <div className="recharge-log-list-right-side">
                                        <p>{r.status}</p>
                                        <button onClick={() => {setRecharge('recharge')}}>
                                            <Link style={{textDecoration: 'none'}} to = '/rechargeUpload'> 
                                                Transmit
                                            </Link>
                                            {recharge==="recharge"? <div className=''></div>:<></>}
                                        </button>
                                    </div>    
                                </div>                                                            
                                <hr />
                            </div>                             
                        )} 
                    </>
                :  
                    <div className='zero-withdrawals'>
                        No withdrawals
                    </div>
                } 
            </>
            }         
        </div>
    )
}

export default RechargeLog
