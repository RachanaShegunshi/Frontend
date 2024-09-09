import React, { useState } from 'react';
import '../../../App.css';

const AddInventoryForm = () => {
  // State to manage form inputs
  const [product, setProduct] = useState({
    productName: '',
    supplierId: '',
    quantity: '',
    productDescription: '',
    price: '',
    categoryId: ''
  });

  // State to manage success and error messages
  const [message, setMessage] = useState('');

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProduct({
      ...product,
      [id]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (Object.values(product).some(value => value === '')) {
      setMessage('Please fill in all fields.');
      return;
    }

    // Post the form data to the API
    fetch('http://localhost:8081/api/v1/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Product added successfully:', data);
        setProduct({
          productName: '',
          supplierId: '',
          quantity: '',
          productDescription: '',
          price: '',
          categoryId: ''
        });
        setMessage('Product added successfully!');
      })
      .catch(error => {
        console.error('There was an error adding the product:', error);
        setMessage('Failed to add product. Please try again.');
      });
  };

  return (
    <div className="dark-bg">
      <div className="container mt-4">
        <div className="card form-card">
          <div className="card-body">
            <h5 className="card-title text-center">Add Product</h5>
            <form className="form-container" onSubmit={handleSubmit}>
              {['productName', 'supplierId', 'quantity', 'productDescription', 'price', 'categoryId'].map((field, index) => (
                <div className="row mb-3" key={index}>
                  <label htmlFor={field} className="col-sm-4 col-form-label">
                    {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                  </label>
                  <div className="col-sm-8">
                    <input
                      type={field === 'price' || field === 'quantity' || field === 'supplierId' ? 'number' : 'text'}
                      className="form-control"
                      id={field}
                      value={product[field]}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              ))}
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-secondary">Add</button>
              </div>
            </form>
            {message && <div className="alert alert-info mt-3">{message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInventoryForm;
