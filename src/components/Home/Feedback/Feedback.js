import React, { useEffect, useState } from 'react';
import SingleFeedback from './SingleFeedback/SingleFeedback';

const Feedback = () => {


    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/feedback')
            .then(response => response.json())
            .then(data => setFeedback(data))
    }, []);


    return (
        <div className='container'>
            <h1 className='text-center' style={{ margin: '80px 0' }}>Clients <span style={{ color: "#7AB259" }}> feedback </span></h1>
            <div className='row'>
                {feedback.map((item) => (
                    <div className='col-md-4 text-center' key={item._id}>
                        <SingleFeedback SingleFeedback={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feedback;