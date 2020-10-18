import React, { useEffect, useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Order = () => {
    const {_id} = useParams()
    console.log(_id);

    const [serviceItem, setServiceItem] = useState([]);
    // let selectedTask

    useEffect(() => {
        fetch(`https://thawing-mountain-11421.herokuapp.com/services/`)
            .then(response => response.json())
            .then(data => setServiceItem(data.filter(x => x._id === _id)))
            
    }, [_id]);
    serviceItem.length && console.log(serviceItem[0]._id)    




    return (
        <div>
            <Form>
                <Form.Group >
                    <Form.Control type="text" name='name' placeholder="Your Name/ Company's Name" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="email" name='email' placeholder='Your email address' />
                </Form.Group>
                <Form.Group >
                    <Form.Control type="text" value = {serviceItem.length && serviceItem[0].heading} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows="3" placeholder='Project details'/>
                </Form.Group>
                <Form.Row>
                    <Col>
                        <Form.Control placeholder="Price" />
                    </Col>
                    <Col>
                        <Form.File id="exampleFormControlFile1" placeholder='Upload Projects'/>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    );
};

export default Order;