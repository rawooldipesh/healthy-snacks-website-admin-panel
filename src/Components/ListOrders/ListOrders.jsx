import React, { useState, useEffect } from 'react';
import './ListOrders.css'
const ListOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from backend API
    const fetchOrders = async () => {
      const response = await fetch('https://healthy-snacks-website-backend.onrender.com/orders'); // Admin can fetch all orders
      const data = await response.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders">
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Total Amount</th>
            <th>Date</th>
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.userDetails.name}</td>
              <td>{order.userDetails.email}</td>
              <td>{order.userDetails.address}</td>
              <td>₹{order.amount}</td>
              <td>{new Date(order.date).toLocaleString()}</td>
              <td>
                {order.products.map(product => (
                  <div key={product.productId}>
                    {product.name} - {product.quantity} pcs
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOrders;
