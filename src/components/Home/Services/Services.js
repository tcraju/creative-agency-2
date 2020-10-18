import React, { useEffect, useState } from 'react';
import SingleService from './SingleService/SingleService';
import './Service.css'

const Services = () => {

    const [serviceItem, setServiceItem] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(response => response.json())
            .then(data => setServiceItem(data))
    }, []);






    return (
        <div className='container mt-5 service-area'>
            <h1 className='text-center' style={{marginBottom: "60px"}}> Provide awesome <span style={{ color: "#7AB259" }}> services </span></h1>
            <div className='row '>
                {serviceItem.map((item) => (
                    <div className='col-md-4 text-center single-service' key={item._id}>
                        <SingleService singleService={item} />
                    </div>
                ))}


            </div>



        </div>
    );
};

export default Services;