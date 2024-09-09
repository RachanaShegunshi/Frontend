import React from 'react'

const AddCategoryFrom = () => {
  return (
    <div class="container mt-4">
    <div class="card form-card">
      <div class="card-body">
        <h5 class="card-title text-center">Add Category</h5>
        <form class="form-container">
          <div className="row mb-3">
            <label htmlFor="name" className="col-sm-4 col-form-label">Category Name</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="inputName" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  </div>
  
  )
}

export default AddCategoryFrom
