import React, { useEffect, useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Order = () => {
    const { register, handleSubmit } = useForm()
    const {_id} = useParams()
    // console.log(_id);

    const [serviceItem, setServiceItem] = useState([]);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    // let selectedTask

    useEffect(() => {
        fetch(`http://localhost:5000/services/`)
            .then(response => response.json())
            .then(data => setServiceItem(data.filter(x => x._id === _id)))
            
    }, [_id]);
    // serviceItem.length && console.log(serviceItem[0]._id)    


    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        console.log(info);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
        console.log(file);
        
    }

    const onSubmit = (e) => {
        
        
        const formData = new FormData()
        // console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('details', info.details);
        formData.append('price', info.price);
        formData.append('heading', serviceItem.length && serviceItem[0].heading )

        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        console.log(formData)
        // e.preventDefault()
    }




    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group >
                    <Form.Control onBlur={handleBlur} type="text" name='name' placeholder="Your Name/ Company's Name" />
                </Form.Group>
                <Form.Group>
                    <Form.Control onBlur={handleBlur} type="email" name='email' placeholder='Your email address' />
                </Form.Group>
                <Form.Group >
                    <Form.Control  type="text" name= 'heading' value = {serviceItem.length && serviceItem[0].heading} />
                </Form.Group>
                <Form.Group onBlur={handleBlur} controlId="exampleForm.ControlTextarea1">
                    <Form.Control name='details' as="textarea" rows="3" placeholder='Project details'/>
                </Form.Group>
                <Form.Row>
                    <Col>
                        <Form.Control onBlur={handleBlur} name='price' placeholder="Price" />
                    </Col>
                    <Col>
                        <Form.File onChange={handleFileChange} id="exampleFormControlFile1" placeholder='Upload Projects'/>
                    </Col>
                </Form.Row>
                
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default Order;