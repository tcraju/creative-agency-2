import React from 'react';
import { useHistory } from 'react-router-dom';
import './SingleService.css'

const SingleService = (props) => {
    const {_id, image, heading, description}= props.singleService
    const history = useHistory()
    // console.log(props);
    return (
        <div className='single-item' onClick={()=> history.push(`/service/${_id}`)}>
            <img src={image} alt=""/>
            <h5>{heading}</h5> 
            <p>{description}</p> 
        </div>
    );
};

export default SingleService;