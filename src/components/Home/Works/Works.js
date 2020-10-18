import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Works.css'


const Works = () => {

    const [works, setWorks] = useState([]);

    useEffect(() => {
        // fetch('https://thawing-mountain-11421.herokuapp.com/works')
        fetch('http://localhost:5000/works')
            .then(response => response.json())
            .then(data => setWorks(data))
    }, []);

    const settings = {
        dots: true,
        // infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className='works-carousel'>
            <h2 className='text-white text-center'> Hare are some of <span style={{ color: "#7AB259" }}> our works </span></h2>
            <Slider {...settings} className='container'>
                {works.map((item) => (
                    <div key={item._id}>
                        <img src={item.img} alt="" style={{ width: '300px', height: '200px', marginRight: '80px' }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Works;

