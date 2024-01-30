import React, { useState } from 'react'
import './Products.css'
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

const Products = () => {
    const [menu,setMenu] = useState('')
    
  return (
    <div className='products'>
        <div className="products-tittle">
            <p>Purchased Products</p>
            <hr />
            <img src= {flow_logo} alt="" />
            <div className="Products-bar">
                <div className="product-left">
                    <h1>KES 1000.00</h1>
                    <h2>Product Price</h2>
                </div>
                <div className="product-middle">
                    <h1>25 Days</h1>
                    <h2>Product Cycle</h2>    
                </div>
                <div className="product-right">
                    <h1>18th Jan 02:40</h1>
                    <h2>Date purchased</h2>    
                </div>   
            </div>
            
            <hr />
            <img src= {binance_logo} alt="" />
            <div className="Products-bar">
                <div className="product-left">
                    <h1>KES 1000.00</h1>
                    <h2>Product Price</h2>
                </div>
                <div className="product-middle">
                    <h1>25 Days</h1>
                    <h2>Product Cycle</h2>    
                </div>
                <div className="product-right">
                    <h1>18th Jan 15:40</h1>
                    <h2>Date purchased</h2>    
                </div>    
            </div>
            <hr />
        </div>
        <BottomBar />
    </div>
  )
}

export default Products
