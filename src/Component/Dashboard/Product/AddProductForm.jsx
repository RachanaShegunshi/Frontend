import React from 'react'

const AddProductForm = () => {
  return (
    <div class="container mt-4">
    <div class="card form-card">
      <div class="card-body">
        <h5 class="card-title text-center">Add Product</h5>
        <form class="form-container">
          <div className="row mb-3">
            <label htmlFor="name" className="col-sm-4 col-form-label">Product Name</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="inputName" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="number" className="col-sm-4 col-form-label">Price</label>
            <div className="col-sm-8">
              <input type="number" className="form-control" id="inputNumber" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="number" className="col-sm-4 col-form-label">Quantity</label>
            <div className="col-sm-8">
              <input type="number" className="form-control" id="inputNumber" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="description" className="col-sm-4 col-form-label">Product Description</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="inputDescription" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="category" className="col-sm-4 col-form-label">Category</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="inputCategory" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  </div>
  
  )
}

export default AddProductForm
