import React, { useState } from 'react'
import './Teams.css'
import tether_logo from'../Assets/Cosmos-Logo.png'
import { Link,BrowserRouter as Router} from 'react-router-dom'
import BottomBar from '../BottomBar/BottomBar'
const Teams = () => {
  const [menu,setMenu] = useState('')
  return (
    <div className='teams'>
        <div className="teams-header">
            <img src={tether_logo} alt="" />
        </div>
        <div className="teams-text">
            <p>Invitation Code</p>
            <input type="text" placeholder='This is your invitation code'/>
        </div>
        <div className="teams-text">
            <p>Invitation Link</p>
            <input type="text" placeholder='This is your invitation link'/>
        </div>
        <div className="team-teams">
            <p>Team 1</p>
            <p>Team 2</p>
            <p>Team 3</p>
        </div>
        <div className="team-total-Income">
            <div>
                <p>0</p>
                <p>Total People</p>
            </div>
            <div>
                <p>Kes 0</p>
                <p>Total Income</p>
            </div>
            <div>
                <p>20%</p>
                <p>Team Profit</p>
            </div>
        </div>
        <BottomBar />
    </div>
  )
}

export default Teams
