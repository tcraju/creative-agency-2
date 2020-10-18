import React from 'react';
import featuredImage from '../../../images/featured-image.png'

const HeaderMain = () => {
    return (
        <main className='row mt-5'>
            <div className='col-md-5'>
                <h1> Lets Grow Your <br/> Brand To The <br/> Next Level</h1>             
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sit.</p>
                <button className='btn btn-dark'> Hire Us</button>
            </div>
            <div className='col-md-6 offset-md-1'>
                <img style={{maxWidth:'100%', height: '280px'}} src={featuredImage} alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;