import { useState, useEffect } from 'react'
import './Home.css'
import bitcoin_logo from '../Assets/Bitcoin-Logo.png'
import binance_logo from '../Assets/Binance-USD-Logo.png'
import bnb_logo from '../Assets/BNB-Logo.png'
import cosmos_logo from '../Assets/Cosmos-Logo.png'
import dogcoin_logo from '../Assets/Dogecoin-logo.png'
import flow_logo from '../Assets/Flow-Logo.png'
import litecoin_logo from '../Assets/Litecoin-Logo.png'
import tether_logo from '../Assets/Tether-Logo.png'
import { Link } from 'react-router-dom'
import BottomBar from '../BottomBar/BottomBar'
import { useSelector} from "react-redux";

const Home = () => {
    const { currentUser } = useSelector((state) => state.user)
    const [recharge,setRecharge] = useState({
        withdraw: false,
        deposit: false,
        buyProduct: false
    });

    const [invitationIncome, setInvitationIncome] = useState(null)

    const [balance, setBalance] = useState(0)

     const [products, setProducts] = useState(null)

    const getBalance = async () => {
        try{
            const res = await fetch(`/api/user/balance/${currentUser.user_code}`, {
                method: 'GET',
            });

            const data = await res.json()

            if(data['success'] === 0){ 
                // setMyListingsError(data.message)        
                return;
            }            
            setBalance(data)
        }
        catch(err){
            console.log(err)
        }
    }

    const getInvitationIncome = async () => {
        try{
            const res = await fetch(`/api/user/invitation-income/${currentUser.user_code}`, {
                method: 'GET',
            });

            const data = await res.json()

            if(data['success'] === 0){ 
                // setMyListingsError(data.message)        
                return;
            }

            setInvitationIncome(data)
        }
        catch(err){
            console.log(err)
        }
    }

    const getProducts = async () => {
        try{
            const res = await fetch(`/api/product/all`, {
                method: 'GET',
            });

            const data = await res.json()

            if(data['success'] === 0){ 
                // setMyListingsError(data.message)        
                return;
            }

            setProducts(data)
        }
        catch(err){
            console.log(err)
        }
    }

    const coverImage = (logo) => {

        if(logo === "bitcoin"){
            return bitcoin_logo;
        }
        else if(logo === "binance"){
            return binance_logo;
        }
        else if(logo === "bnb"){
            return bnb_logo;
        }
        else if(logo === "cosmos"){
            return cosmos_logo;
        }
        else if(logo === "dogcoin"){
            return dogcoin_logo;
        }
        else if(logo === "flow"){
            return flow_logo;
        }
        else if(logo === "litecoin"){
            return litecoin_logo;
        }
        else if(logo === "tether"){
            return tether_logo;
        }
        else{
            return bitcoin_logo;
        }
    };


   
    useEffect(() => {     
      
      getInvitationIncome();
      getBalance();
      getProducts();

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
                    <h2>KES {balance}.00</h2>
                    <Link style={{textDecoration: 'none'}} to = '/withdraw'>
                        <button onClick={()=>{setRecharge({...recharge, withdraw: true})}}>
                            Withdrawal
                        {recharge.withdraw? <div className=''></div>:<></>}
                        </button>
                    </Link>  
                </div>      
                <div className="home-home-right">
                    <h1>Invite Income</h1>
                    <h2>KES {invitationIncome ? invitationIncome.redeemed_times * invitationIncome.reedem_amount : 0}.00</h2>
                    <Link style={{textDecoration: 'none'}} to = '/recharge'>
                        <button onClick={()=>{setRecharge({...recharge,recharge: true})}}>
                            Recharge
                        {recharge.recharge? <div className=''></div>:<></>}
                        </button>
                    </Link>  
                </div>          
            </div>
             <div className="home-home-bar">
                <div className="home-home-left">
                    <h1>Invite Income</h1>
                    <h2>KES {invitationIncome ? invitationIncome.redeemed_times * invitationIncome.reedem_amount : 0}.00</h2>
                </div>
                <div className="home-home-right">
                    <h1>Total Earnings</h1>
                    <h2>KES 0.00</h2>
                </div>                
            </div>
            {/* {products.length} */}
            <div className="home-products-tittle">
                <p>Crypto Currencies</p>

                {products && products.map((p,i) => 
                   <>
                    <hr key={i} />
                     <img src={coverImage(p.name)} alt=""/>
                    <div className="home-Products-bar">
                        <div className="home-product-left">
                            <h1>KES {p.price}.00</h1>
                            <h2>Product Price</h2>
                        </div>
                        <div className="home-product-middle">
                            <h1>{p.period_cycle} Days</h1>
                            <h2>Product Cycle</h2>    
                        </div>
                        <div className="home-product-right">
                            <h1>KES {p.daily_earnings}.00</h1>
                            <h2>Daily Earnings</h2>    
                        </div>    
                    </div>
                    <Link style={{textDecoration: 'none'}} to = '/products'>
                        <button onClick={()=>{setRecharge({...recharge, buyProduct: true})}}>
                            Buy Product
                        {recharge.buyProduct? <div className=''></div>:<></>}
                        </button>
                    </Link>
                    </>
                )}
            </div>
            <BottomBar />
        </div>
    )
}

export default Home
