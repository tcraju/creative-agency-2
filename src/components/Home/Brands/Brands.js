import React from 'react';
import './Brand.css'
import brand1 from '../../../images/brand-1.png'
import brand2 from '../../../images/brand-2.png'
import brand3 from '../../../images/brand-3.png'
import brand4 from '../../../images/brand-4.png'
import brand5 from '../../../images/brand-5.png'

const Brands = () => {
    return (
        <div className='brand-images d-flex justify-content-around'>
            <img src={brand1} alt=""/>
            <img src={brand2} alt=""/>
            <img src={brand3} alt=""/>
            <img src={brand4} alt=""/>
            <img src={brand5} alt=""/>
        </div>
    );
};

export default Brands;
