import React, { useEffect, useState } from 'react';

const showingOrders = () => {
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(response => response.json())
            .then(data => setOrderItems(data))
    }, []);




    return (
        <div>
            
        </div>
    );
};

export default showingOrders;