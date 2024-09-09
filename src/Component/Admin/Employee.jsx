import React, { useState } from 'react';
import Admin from './Admin';
import 'bootstrap/dist/css/bootstrap.min.css';

const Employee = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [employees, setEmployees] = useState([]);

  const handleCardClick = (action) => {
    if (action === 'add') {
      setShowAddModal(true);
    } else if (action === 'delete') {
      setShowDeleteModal(true);
    } else if (action === 'view') {
      setShowViewModal(true);
    }
  };

  const closeModal = () => {
    setShowAddModal(false);
    setShowDeleteModal(false);
    setShowViewModal(false);
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const phone = e.target.elements.phone.value;
    const email = e.target.elements.email.value;
    const salary = e.target.elements.salary.value;

    const newEmployee = { id: employees.length + 1, name, phone, email, salary };
    setEmployees([...employees, newEmployee]);

    e.target.reset();
    closeModal();
  };

  const cardStyle = {
    cursor: 'pointer',
    width: '300px',
    height: '300px',
  };

  return (
    <Admin>
      <div className="container text-center">
        <h1 className="my-4">Employee Management</h1>
        <div className="row justify-content-center">
          {/* Add Card */}
          <div className="col-md-4 mb-4">
            <div
              className="card text-center p-5 bg-light border shadow-lg"
              onClick={() => handleCardClick('add')}
              style={cardStyle}
            >
              <h2>Add</h2>
            </div>
          </div>

          {/* Delete Card */}
          <div className="col-md-4 mb-4">
            <div
              className="card text-center p-5 bg-light border shadow-lg"
              onClick={() => handleCardClick('delete')}
              style={cardStyle}
            >
              <h2>Delete</h2>
            </div>
          </div>
        </div>

        {/* Row with View and Edit cards */}
        <div className="row justify-content-center">
          {/* View Card */}
          <div className="col-md-4 mb-4">
            <div
              className="card text-center p-5 bg-light border shadow-lg"
              onClick={() => handleCardClick('view')}
              style={cardStyle}
            >
              <h2>View</h2>
            </div>
          </div>

          {/* Edit Card */}
          <div className="col-md-4 mb-4">
            <div
              className="card text-center p-5 bg-light border shadow-lg"
              style={cardStyle}
            >
              <h2>Edit</h2>
            </div>
          </div>
        </div>

        {/* Modal for Add Employee */}
        {showAddModal && (
          <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Employee</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleAddEmployee}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter name"
                        name="name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter phone number"
                        name="phone"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        name="email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter salary"
                        name="salary"
                        required
                      />
                    </div>
                    <div className="d-flex justify-content-between">
                      <button type="submit" className="btn btn-primary">
                        Add
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal for Delete Employee */}
        {showDeleteModal && (
          <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Delete Employee</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter employee email"
                      />
                    </div>
                    <div className="d-flex justify-content-between">
                      <button type="submit" className="btn btn-danger">
                        Delete
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal for View Employees */}
        {showViewModal && (
          <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">View Employees</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body">
                  {employees.length > 0 ? (
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Phone</th>
                          <th>Email</th>
                          <th>Salary</th>
                        </tr>
                      </thead>
                      <tbody>
                        {employees.map((employee) => (
                          <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.email}</td>
                            <td>{employee.salary}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p>No employees added yet.</p>
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Admin>
  );
};

export default Employee;
