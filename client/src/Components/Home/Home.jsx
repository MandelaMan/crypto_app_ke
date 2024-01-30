import React, { useState, useEffect } from 'react'
import './Home.css'
import bitcoin_logo from '../Assets/Bitcoin-Logo.png'
import algorand_logo from '../Assets/Algorand-Logo.png'
import binance_logo from '../Assets/Binance-USD-Logo.png'
import bnb_logo from '../Assets/BNB-Logo.png'
import cosmos_logo from '../Assets/Cosmos-Logo.png'
import dogcoin_logo from '../Assets/Dogecoin-logo.png'
import flow_logo from '../Assets/Flow-Logo.png'
import hedera_logo from '../Assets/Hedera-Logo.png'
import litecoin_logo from '../Assets/Litecoin-Logo.png'
import tether_logo from '../Assets/Tether-Logo.png'
import tron_logo from '../Assets/TRON-Logo.png'
import home_button from '../Assets/Home_button2.png'
import product_icon from '../Assets/Product_Icon.png'
import team_icon    from '../Assets/Team_image.png'
import mine_icon from '../Assets/Mine_logo.png'
import { Link, Route,BrowserRouter as Router} from 'react-router-dom'
import HomePage from '../../Pages/HomePage'
import BottomBar from '../BottomBar/BottomBar'
import { useSelector} from "react-redux";

const Home = () => {

    const { currentUser } = useSelector((state) => state.user)

    const [menu,setMenu] = useState('');

    const [recharge,setRecharge] = useState({
        withdraw: false,
        deposit: false,
        buyProduct: false
    });

    const [invitationIncome, setInvitationIncome] = useState({
        reedem_amount: 0,
        redeemed_times: 0
    })

    const getInvitationIncome = async () => {
        try{
            const res = await fetch(`/api/user/invitation-income/${currentUser.user_code}`, {
                method: 'GET',
            });

            const data = await res.json()

            if(data.success === false){ 
                // setMyListingsError(data.message)        
                return;
            }

            setInvitationIncome({
                ...invitationIncome,
                reedem_amount: 0,
                redeemed_times: 0
            })

            setInvitationIncome({
                ...invitationIncome,
                redeemed_times: data.data.redeemed_times,
                reedem_amount: data.data.reedem_amount
            })
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {     
      
      getInvitationIncome();

      return ()=>{
        // removeEventListner(a)  //whenever the component removes it will executes
      }
    } ,[]) 

    return ( 
        <div className='home'>
            <div className="home-home-display">
                <p>Unlimited - product purchase</p>
            </div>
            <div className="home-home-bar">
                <div className="home-home-left">
                    <h1>My Balance</h1>
                    <h2>KES 0.00</h2>
                    <button onClick={()=>{setRecharge({...recharge, withdraw: true})}}>
                    <Link style={{textDecoration: 'none'}} to = '/withdraw'>
                        Withdrawal
                    </Link>  
                    {recharge.withdraw? <div className=''></div>:<></>}
                    </button>
                </div>
                <div className="home-home-right">
                    <h1>Invite Income</h1>
                    <h2>KES {invitationIncome.reedem_amount > 1 ? invitationIncome.redeemed_times * invitationIncome.reedem_amount : 0}.00</h2>
                    <button onClick={()=>{setRecharge({...recharge,recharge: true})}}>
                    <Link style={{textDecoration: 'none'}} to = '/recharge'>
                        Recharge
                    </Link>  
                    {recharge.recharge? <div className=''></div>:<></>}
                    </button>
                </div>
            </div>
            
            <div className="home-products-tittle">
                <p>Crypto Currencies</p>
                <hr />
                <img src= {flow_logo} alt="" />
                <div className="home-Products-bar">
                    <div className="home-product-left">
                        <h1>KES 1500.00</h1>
                        <h2>Product Price</h2>
                    </div>
                    <div className="home-product-middle">
                        <h1>20 Days</h1>
                        <h2>Product Cycle</h2>    
                    </div>
                    <div className="home-product-right">
                        <h1>KES 150.00</h1>
                        <h2>Daily Earnings</h2>    
                    </div>    
                </div>
                <button onClick={()=>{setRecharge({...recharge, buyProduct: true})}}>
                <Link style={{textDecoration: 'none'}} to = '/products'>
                    Buy Product
                </Link>
                {recharge.buyProduct? <div className=''></div>:<></>}
                </button>
                <hr />
                <img src= {binance_logo} alt="" />
                <div className="home-Products-bar">
                    <div className="home-product-left">
                        <h1>KES 4100.00</h1>
                        <h2>Product Price</h2>
                    </div>
                    <div className="home-product-middle">
                        <h1>25 Days</h1>
                        <h2>Product Cycle</h2>    
                    </div>
                    <div className="home-product-right">
                        <h1>KES 410.00</h1>
                        <h2>Daily Earnings</h2>    
                    </div>    
                </div>
                <button onClick={()=>{setRecharge({...recharge, buyProduct: true})}}>
                <Link style={{textDecoration: 'none'}} to = '/products'>
                    Buy Product
                </Link>
                {recharge.buyProduct? <div className=''></div>:<></>}
                </button>
                <hr />
                <img src= {bnb_logo} alt="" />
                <div className="home-Products-bar">
                    <div className="home-product-left">
                        <h1>KES 6200.00</h1>
                        <h2>Product Price</h2>
                    </div>
                    <div className="home-product-middle">
                        <h1>25 Days</h1>
                        <h2>Product Cycle</h2>    
                    </div>
                    <div className="home-product-right">
                        <h1>KES 620.00</h1>
                        <h2>Daily Earnings</h2>    
                    </div>    
                </div>
                <button onClick={()=>{setRecharge({...recharge, buyProduct: true})}}>
                <Link style={{textDecoration: 'none'}} to = '/products'>
                    Buy Product
                </Link>
                {recharge.buyProduct? <div className=''></div>:<></>}
                </button>
                <hr />
                <img src= {cosmos_logo} alt="" />
                <div className="home-Products-bar">
                    <div className="home-product-left">
                        <h1>KES 13500.00</h1>
                        <h2>Product Price</h2>
                    </div>
                    <div className="home-product-middle">
                        <h1>25 Days</h1>
                        <h2>Product Cycle</h2>    
                    </div>
                    <div className="home-product-right">
                        <h1>KES 1350.00</h1>
                        <h2>Daily Earnings</h2>    
                    </div>    
                </div>
                <button onClick={()=>{setRecharge({...recharge, buyProduct: true})}}>
                <Link style={{textDecoration: 'none'}} to = '/products'>
                    Buy Product
                </Link>
                {recharge.buyProduct? <div className=''></div>:<></>}
                </button>
                <hr />
                <img src= {dogcoin_logo} alt="" />
                <div className="home-Products-bar">
                    <div className="home-product-left">
                        <h1>KES 22000.00</h1>
                        <h2>Product Price</h2>
                    </div>
                    <div className="home-product-middle">
                        <h1>25 Days</h1>
                        <h2>Product Cycle</h2>    
                    </div>
                    <div className="home-product-right">
                        <h1>KES 2200.00</h1>
                        <h2>Daily Earnings</h2>    
                    </div>    
                </div>
                <button onClick={()=>{setRecharge({...recharge, buyProduct: true})}}>
                <Link style={{textDecoration: 'none'}} to = '/products'>
                    Buy Product
                </Link>
                {recharge.buyProduct? <div className=''></div>:<></>}
                </button>
                <hr />
                <img src= {litecoin_logo} alt="" />
                <div className="home-Products-bar">
                    <div className="home-product-left">
                        <h1>KES 40000.00</h1>
                        <h2>Product Price</h2>
                    </div>
                    <div className="home-product-middle">
                        <h1>25 Days</h1>
                        <h2>Product Cycle</h2>    
                    </div>
                    <div className="home-product-right">
                        <h1>KES 4000.00</h1>
                        <h2>Daily Earnings</h2>    
                    </div>    
                </div>
                <button onClick={()=>{setRecharge({...recharge, buyProduct: true})}}>
                <Link style={{textDecoration: 'none'}} to = '/products'>
                    Buy Product
                </Link>
                {recharge.buyProduct? <div className=''></div>:<></>}
                </button>
                <hr />
                <img src= {tether_logo} alt="" />
                <div className="home-Products-bar">
                    <div className="home-product-left">
                        <h1>KES 52000.00</h1>
                        <h2>Product Price</h2>
                    </div>
                    <div className="home-product-middle">
                        <h1>25 Days</h1>
                        <h2>Product Cycle</h2>    
                    </div>
                    <div className="home-product-right">
                        <h1>KES 5200.00</h1>
                        <h2>Daily Earnings</h2>    
                    </div>    
                </div>
                <button onClick={()=>{setRecharge({...recharge, buyProduct: true})}}>
                <Link style={{textDecoration: 'none'}} to = '/products'>
                    Buy Product
                </Link>
                {recharge.buyProduct? <div className=''></div>:<></>}
                </button>
                <hr />
                <img src= {bitcoin_logo} alt="" />
                <div className="home-Products-bar">
                    <div className="home-product-left">
                        <h1>KES 79000.00</h1>
                        <h2>Product Price</h2>
                    </div>
                    <div className="home-product-middle">
                        <h1>25 Days</h1>
                        <h2>Product Cycle</h2>    
                    </div>
                    <div className="home-product-right">
                        <h1>KES 7900.00</h1>
                        <h2>Daily Earnings</h2>    
                    </div>    
                </div>
                <button onClick={()=>{setRecharge({...recharge, buyProduct: true})}}>
                <Link style={{textDecoration: 'none'}} to = '/products'>
                    Buy Product
                </Link>
                {recharge.buyProduct? <div className=''></div>:<></>}
                </button>
                <hr />
            </div>
            <BottomBar />
        </div>
    )
}

export default Home
