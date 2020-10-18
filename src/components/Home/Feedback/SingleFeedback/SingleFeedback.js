import React from 'react';
import './SingleFeedback.css'

const SingleFeedback = (props) => {
    const {name, designation, image, comment}= props.SingleFeedback
    return (
        <div className='single-feedback text-left'>
            
            <div className='row '>
                <div className='col-md-3'>
                    <img src={image} alt=""/>
                </div>
                <div className='col-md-9'>
                    <h4>{name}</h4>
                    <h6>{designation}</h6>
                </div>
            </div>
            <p>{comment}</p>
            
        </div>
    );
};

export default SingleFeedback;