import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard';
import soap from '../../../assets/soap.jpg';

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8081/api/v1/product')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Data fetched is not an array:', data);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  const viewProduct = (product) => {
    navigate('/employee/inventory/product', { state: { product } });
  };

  return (
    <Dashboard>
      <div className="container m-2">
        <div className="d-flex flex-row-reverse">
          <Link className="btn btn-success" to="/AddInventory">
            Add Product To Inventory
          </Link>
        </div>
      </div>
      <div className="container vh-100">
        {products.length > 0 ? (
          <div className="row">
            {products.map((product) => (
              <div className="col-md-4 mb-4" key={product.id || product.productName}>
                {/* Adjusted width to column-based system */}
                <div className="card" style={{ width: '100%' }}>
                  <div className="m-3 ms-auto">
                    <span className="bi-heart"></span>
                  </div>
                  <img
                    src={soap}
                    className="img-fluid rounded mx-auto d-block w-50 p-2"
                    alt="Product"
                  />
                  <div className="card-body p-3">
                    <h5 className="card-title text-center">
                      {product.productName || 'No Product Name'}
                    </h5>
                    <p className="card-text">
                      {product.supplierName || 'No Supplier Name'}
                    </p>
                    <div className="row mt-2">
                      <div className="col-md d-grid gap-2">
                        <button
                          onClick={() => viewProduct(product)}
                          className="btn btn-outline-secondary"
                        >
                          View More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No products available.</p>
        )}
      </div>
    </Dashboard>
  );
};

export default Inventory;
