import React, { useState } from 'react';
import Dashboard from '../Dashboard';
import './Product.css';

const Product = () => {
  const [customerName, setCustomerName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [productName, setProductName] = useState('');
  const [productRate, setProductRate] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);
  const [billNumber, setBillNumber] = useState(0);
  const [billItems, setBillItems] = useState([]);

  const handleCustomerNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handlePhoneNoChange = (event) => {
    setPhoneNo(event.target.value);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductRateChange = (event) => {
    setProductRate(event.target.value);
  };

  const handleProductQuantityChange = (event) => {
    setProductQuantity(event.target.value);
  };

  const addItem = () => {
    const newItem = {
      name: productName,
      rate: parseFloat(productRate),
      quantity: parseInt(productQuantity),
    };
    setBillItems([...billItems, newItem]);
    setProductName('');
    setProductRate(0);
    setProductQuantity(0);
  };

  const generateBill = () => {
    setBillNumber(Math.floor(Math.random() * 10000)); // Generate a random bill number
  };

  const clearBill = () => {
    setCustomerName('');
    setPhoneNo('');
    setBillItems([]);
    setBillNumber(0);
  };

  const calculateTotal = () => {
    return billItems.reduce((total, item) => total + item.rate * item.quantity, 0);
  };

  return (
    <Dashboard>
      <div className="billing-software">
        <h1>Billing Software</h1>
        
        {/* Customer Details Section */}
        <div className="customer-details">
          <h2>Customer Details</h2>
          <div className="customer-info-row">
            <div className="customer-info-item">
              <label htmlFor="customer-name">Customer Name:</label>
              <input
                type="text"
                id="customer-name"
                value={customerName}
                onChange={handleCustomerNameChange}
              />
            </div>
            <div className="customer-info-item">
              <label htmlFor="phone-no">Phone No:</label>
              <input
                type="text"
                id="phone-no"
                value={phoneNo}
                onChange={handlePhoneNoChange}
              />
            </div>
          </div>
        </div>

        {/* Product Details and Bill Area Side by Side */}
        <div className="details-container">
          <div className="product-details">
            <h2>Product Details</h2>
            <label htmlFor="product-name">Product Name:</label>
            <input
              type="text"
              id="product-name"
              value={productName}
              onChange={handleProductNameChange}
            />
            <label htmlFor="product-rate">Product Rate:</label>
            <input
              type="number"
              id="product-rate"
              value={productRate}
              onChange={handleProductRateChange}
            />
            <label htmlFor="product-quantity">Product Quantity:</label>
            <input
              type="number"
              id="product-quantity"
              value={productQuantity}
              onChange={handleProductQuantityChange}
            />
            <button onClick={addItem}>Add Item</button>
          </div>

          <div className="bill-area">
            <h2>Bill Area</h2>
            <h3>Welcome Shivam Retail</h3>
            <p>Bill Number: {billNumber}</p>
            <p>Customer Name: {customerName}</p>
            <p>Phone Number: {phoneNo}</p>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>QTY</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {billItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.rate * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>Total: {calculateTotal()}</p>
            <button onClick={generateBill}>Generate Bill</button>
          </div>
        </div>

        <div className="buttons">
          <button onClick={clearBill}>Clear</button>
          <button onClick={() => window.location.reload()}>Exit</button>
        </div>
      </div>
    </Dashboard>
  );
};

export default Product;
