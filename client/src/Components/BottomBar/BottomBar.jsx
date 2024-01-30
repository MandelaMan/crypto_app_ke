import React, { useState } from 'react'
import './BottomBar.css'
import home_button from '../Assets/Home_button2.png'
import product_icon from '../Assets/Product_Icon.png'
import team_icon    from '../Assets/Team_image.png'
import mine_icon from '../Assets/Mine_logo.png'
import { Link, Route,BrowserRouter as Router} from 'react-router-dom'


const BottomBar = () => {
    const [menu,setMenu] = useState({
        home:false,
        products:false,
        team:false,
        mine:false
    })
  return (
    <div className="bottomBar-menu-items">
        <ul className='bottomBar-nav-menu'>
            <li onClick={() => {setMenu({...menu,home: true})}}>
                <Link style={{textDecoration: 'none'}} to = '/'> 
                    <img src= {home_button} alt="" />
                </Link>
                {menu.home ? <div className=''></div>:<></>}
            </li>
            <li onClick={() => {setMenu({...menu,products:true})}}>
                <Link style={{textDecoration: 'none'}} to ='/products'>
                    <img src= {product_icon} alt="" />
                </Link>
                {menu.products?<div className=''></div>:<></>}
            </li>
            <li onClick={() =>{setMenu({...menu,team: true})}}>
                <Link style={{textDecoration: 'none'}} to = '/teams'>
                    <img src= {team_icon} alt="" />
                </Link>
                {menu.team?<div className=''></div>:<></>}
            </li>
            <li onClick={()=>{setMenu({...menu,mine: true})}}>
                <Link style={{textDecoration: 'none'}} to = '/mine'>
                    <img src= {mine_icon} alt="" />
                </Link>
                {menu.mine?<div className=''></div>:<></>}
            </li>
        </ul>
    </div>
  )
}

export default BottomBar
