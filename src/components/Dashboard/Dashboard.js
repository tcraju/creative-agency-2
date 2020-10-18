import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Dashboard.css'
import mainLogo from '../../images/main-logo.png'
import Order from './Order/Order';

const Dashboard = () => {
    const history = useHistory()
    const [clickArea, setClickArea] = useState({
        clicked:'order'
    })




    return (
        <div className='row'>
            <div className="col-md-4 side-bar">
            <img id='home-logo' onClick={()=> history.push('/')} src={mainLogo} alt=""/>
                    <br/>
                    <br/>
                    <div className='toggle-item'>
                        <p id='order-btn' onClick={()=>setClickArea({clicked:'order'})}>Order</p>
                        <br/>
                        <p id='service-btn' onClick={()=>setClickArea({clicked:'service-list'})}>Service List</p>
                        <br/>
                        <p id='review-btn' onClick={()=>setClickArea({clicked:'review'})}>Review</p>
                    </div>
            </div>
            <div className="col-md-6">
                <p>right side</p>
                <Order></Order>
                
            </div>
            
        </div>
    );
};

export default Dashboard;