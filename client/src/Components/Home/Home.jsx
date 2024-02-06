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

    const { currentUser } = useSelector((state) => state.user)
    const [recharge,setRecharge] = useState({
        withdraw: false,
        deposit: false,
        buyProduct: false
    });

    const [loadingBalances, setLoadingBalances] = useState({})

    const [balances, setBalances] = useState(null)

    const [products, setProducts] = useState(null)

    const updateRechargeAmounts = async (data) => {

        let recharge_amount = data.filter((transaction) => {
            return transaction.type === 'Recharge' &&  transaction.status === 'Complete';
        });
                
        recharge_amount = recharge_amount.reduce((acc, transaction) => acc + transaction.amount, 0);
        
        return recharge_amount
    }

    const updateEarnings = async (data) => {

        let total_earnings = data.filter((transaction) => {
            return transaction.type === 'Earnings';
        });
                
        total_earnings = total_earnings.reduce((acc, transaction) => acc + transaction.amount, 0);

        return total_earnings
    }

     const updateWithdrawableEarnings = async (data) => {

        let total_earnings = data.filter((transaction) => {
            return transaction.type === 'Earnings' && transaction.status === 'Available';
        });
                
        total_earnings = total_earnings.reduce((acc, transaction) => acc + transaction.amount, 0);

        return total_earnings
    }

    const getInvitationIncome = async () => {
        try{
            const res = await fetch(`/api/user/invitation-income/${currentUser.user_code}`, {
                method: 'GET',
            });

            const data = await res.json()

            if(data.success === 0){        
                return;
            }

            return data;
        }
        catch(err){
            console.log(err)
        }
    }
     
    const getTransactions = async () => {
        try{
            setLoadingBalances(true)

            const res = await fetch(`/api/user/transactions/${currentUser.user_code}`, {
                method: 'GET',
            });

            const data = await res.json()

            if(data.success === 0){ 
                // setMyListingsError(data.message)        
                return;
            }
            else{
                let recharge_amount = await updateRechargeAmounts(data);

                let total_earnings = await updateEarnings(data);

                let withdrawable_earnings = await updateWithdrawableEarnings(data);                

                let invite_income = await getInvitationIncome();
                
                setBalances({...balances,  invite_income, recharge_amount, total_earnings, withdrawable_earnings})

                setLoadingBalances(false);             
            }
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

    const purchaseProduct = async (p) => {

        let details = {
            product_id: p.code,
        }

        const res = await fetch('/api/product/purchase', {
          method: 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
            ...details,
            user_id: currentUser.id
          })
        });

        const data = await res.json()

        if(data['success'] === 0){ 
            console.log("Purchase Failed") 
          return;
        }
        else{
            console.log("Purchased")
        }  
    }
  
    useEffect(() => {               
        getTransactions();         
        getProducts();

        return ()=>{
            setBalances({})
            // removeEventListner(a)  //whenever the component removes it will executes
        }
    } ,[]) 

    return ( 
        <div className='home'>
            <div className="home-home-display">
                <p>Unlimited - product purchase</p>
            </div>
            {loadingBalances ? 
                <div className="home-home-bar">
                    <h1>Loading Balances. Please wait ....</h1>                    
                </div> 
                : 
                <>
                    <div className="home-home-bar">
                        <div className="home-home-left">
                            <h1>Withdrawable Earnings</h1>
                            <h2>KES {balances.withdrawable_earnings ? balances.withdrawable_earnings : 0}.00</h2>
                            <Link style={{textDecoration: 'none'}} to = '/withdraw'>
                                <button onClick={()=>{setRecharge({...recharge, withdraw: true})}}>
                                    Withdraw
                                {recharge.withdraw? <div className=''></div>:<></>}
                                </button>
                            </Link>  
                        </div>      
                        <div className="home-home-right">
                            <h1>Recharge Amount</h1>
                            <h2>KES {balances.recharge_amount ? balances.recharge_amount : 0}.00</h2>
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
                            <h2>KES {balances.invite_income ? balances.invite_income : 0}.00</h2>
                        </div>
                        <div className="home-home-right">
                            <h1>Total Earnings</h1>
                            <h2>KES {balances.total_earnings ? balances.total_earnings : 0}.00</h2>
                        </div>                
                    </div>
                </>
            }

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
                    <Link style={{textDecoration: 'none'}} to = ''>
                        <button onClick={()=>{
                                setRecharge({...recharge, buyProduct: true})                        
                                purchaseProduct(products[i]); 
                            }}>
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
