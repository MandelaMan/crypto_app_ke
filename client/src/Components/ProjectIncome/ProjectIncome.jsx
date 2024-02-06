import {useEffect, useState} from 'react'
import './ProjectIncome.css'
import { useSelector } from 'react-redux'
import BottomBar from '../BottomBar/BottomBar'

const ProjectIncome = () => {
    const { currentUser } = useSelector((state) => state.user)

    const [earnings, setEarnings] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const getEarnings = async() => {
        try{
            setLoading(true)
            const res = await fetch(`/api/user/transactions/${currentUser.user_code}?type=Earnings`, {
                method: 'GET',
            });
            const data = await res.json()
            if(data['success'] === 0){ 
                setError(data.message)        
                return;
            }    
            setEarnings(data)
            setLoading(false)
        }
        catch(err){
          setError(err.message)
        }
    }

    useEffect(() => {     
        getEarnings();    

        return () => {
            // second
        }
    }, [])

    return (
        <div className='project-income'>
            <div className="project-income-header">
                <h3>Project Income</h3>
            </div>
            <hr />

            {error && <>Error trying to fetch withdrawls. Try again later</>}
            {loading ? <>Loading....</> : 
            <>                
                {!loading && !error && earnings && earnings.length > 0 ?  
                    <>
                        <div className="project-income-list">
                            <div>Time</div>
                            <div>Information</div>
                            <div>Amount</div>
                        </div>
                        <hr />                        
                        {earnings.map((r,i) =>  
                            <div key={i}>
                               <div className="project-income-list">
                                    <div>20:00</div>
                                    <div>Project Income</div>
                                    <div>20,000</div>
                                </div>
                                <hr />                                                           
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
        <BottomBar />
        </div>
    )
}

export default ProjectIncome
