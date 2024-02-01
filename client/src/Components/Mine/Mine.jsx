import React, { useState } from 'react'
import './Mine.css'
import left_Image from '../Assets/Bitcoin-Logo.png'
import right_image from '../Assets/TRON-Logo.png'
import { Link} from 'react-router-dom'
import BottomBar from '../BottomBar/BottomBar'
import { useDispatch } from 'react-redux'
import { signOutUserSuccess, signOutUserStart, signOutUserFailure } from '../../redux/user/userSlice'

const Mine = () => {

    const dispatch = useDispatch()

    
    const [loadPage,setLoadPage] = useState({
        recharge: false,
        withdrawal : false,
        bidPaymentAccount: false,
        withdrawalLog: false,
        rechargeMagagement: false,
        productIncome: false,
        customerService: false,
        logOut:false
    });

  const signOutUser = async () => {
    try{
      dispatch(signOutUserStart())

      const res = await fetch(`/api/auth/signout`, {
        method: 'GET',
      });

      const data = await res.json()

      if(data.success === false){            
        dispatch(signOutUserFailure(data.message))
        return;
      }

      dispatch(signOutUserSuccess(data))     
    }
    catch(err){
      dispatch(signOutUserFailure())
      return;
    }
  } 
  return (
    <div className='mine'>
        <div className="mine-topbar">
            <div className="mine-left">
                <div onClick={() => {setLoadPage({...loadPage, recharge:true})}}>
                    <Link style={{textDecoration: 'none'}} to = '/recharge'>
                            <img src={left_Image} alt="" />
                            <p>Recharge</p>
                    </Link>
                    {loadPage.recharge? <div className=''></div>:<></>}
                </div>
            </div>
            <div className="mine-right">
                <div onClick={() => {setLoadPage({...loadPage,withdrawal:true})}}>
                    <Link style={{textDecoration: 'none'}} to = '/withdraw'> 
                        <img src={right_image} alt="" />
                        <p>Withdraw</p>
                    </Link>
                    {loadPage.withdrawal?<div className=''></div>:<></>}
                </div>
            </div>
        </div>

        <div className="mine-mine-activities">
            <div className="mine-active" onClick={() => {setLoadPage({...loadPage,bidPaymentAccount:true})}}>
                 <Link style={{textDecoration: 'none'}} to = '/bidAccount'>
                    Bind Payment account
                 </Link>
                {loadPage.bidPaymentAccount?<div className=''></div>:<></>}   
            </div>
            <div className="mine-active" onClick={() => {setLoadPage({...loadPage,withdrawalLog:true})}}>
                <Link style={{textDecoration: 'none'}} to = '/withdrawalHistory'>
                     withdraw log
                 </Link>
                {loadPage.withdrawalLog?<div className=''></div>:<></>} 
            </div>
            <div className="mine-active" onClick={() => {setLoadPage({...loadPage,rechargeMagagement:true})}}>
               <Link style={{textDecoration: 'none'}} to = '/rechargeLog'>
                    Recharge Management
                 </Link>
                {loadPage.rechargeMagagement?<div className=''></div>:<></>} 
            </div>
            <div className="mine-active" onClick={() => {setLoadPage({...loadPage,productIncome:true})}}>
              <Link style={{textDecoration: 'none'}} to = '/projectIncome'>
                     Product Income 
                 </Link>
                {loadPage.productIncome?<div className=''></div>:<></>} 
            </div>
            <div className="mine-active" onClick={() => {setLoadPage({...loadPage,customerService:true})}}>
               <Link style={{textDecoration: 'none'}} to = '/bidpaymentaccount'>
                     Customer Service
                </Link>
                {loadPage.customerService?<div className=''></div>:<></>} 
            </div>
            <div className="mine-active" onClick={() => {setLoadPage({...loadPage,logOut:true})}}>
                <button onClick={signOutUser} style={{textDecoration: 'none'}}>Log Out</button>                
                {loadPage.logOut?<div className=''></div>:<></>} 
            </div>
        </div>
        <BottomBar />
    </div>
  )
}

export default Mine
