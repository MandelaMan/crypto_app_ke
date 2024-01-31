import React from 'react'
import './Products.css'
import binance_logo from '../Assets/Binance-USD-Logo.png'
import flow_logo from '../Assets/Flow-Logo.png'
import BottomBar from '../BottomBar/BottomBar'

const Products = () => {
      
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
        </div>
        <BottomBar />
    </div>
  )
}

export default Products
