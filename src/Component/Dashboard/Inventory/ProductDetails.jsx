import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import soap from '../../../assets/soap.jpg';

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(location.state?.product || null);

  useEffect(() => {
    if (!product) {
      // If product data isn't available, you can fetch it using an API
      // Assuming there's an ID in the state for fetching details
      // Uncomment the following code to implement optional fetching:
      
      // const productId = location.state?.productId;
      // if (productId) {
      //   fetch(`http://localhost:8081/api/v1/product/${productId}`)
      //     .then(response => response.json())
      //     .then(data => setProduct(data))
      //     .catch(error => console.error('Error fetching product details:', error));
      // }
    }
  }, [product]);

  const handleClose = () => {
    // Using navigate to go back instead of window.history
    navigate(-1);
  };

  return (
    <>
      {product ? (
        <div
          className="modal show"
          style={{ display: 'block' }}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Product Name: {product.productName}
                </h5>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <img
                        src={soap}
                        className="img-fluid rounded mx-auto d-block w-100 p-2"
                        alt="Product"
                      />
                    </div>
                    <div className="col">
                      <p>Supplier: {product.supplierName || 'N/A'}</p>
                      <p>Quantity: {product.quantity || 'N/A'}</p>
                      <p>Description: {product.productDescription || 'N/A'}</p>
                      <p>Price: {product.price ? `$${product.price}` : 'N/A'}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                  Close
                </button>
                {/* Add functionality to the Save Changes button if needed */}
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductDetails;
