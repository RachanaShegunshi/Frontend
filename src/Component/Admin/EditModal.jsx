import React, { useState } from 'react';
import './Modal.css'
const EditModal = () => {
  // Define state variables for form inputs
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');

  // Handler function for closing the modal
  const handleClose = () => {
    // Logic to close the modal
    console.log('Modal closed');
  };

  // Handler function for editing an employee
  const handleEdit = () => {
    // Logic to edit employee, e.g., API call or state update
    console.log('Employee edited:', { email, salary });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Edit Employee</h2>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Salary:</label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
        </form>
        <div className="modal-actions">
          <button onClick={handleClose} className="modal-button">Close</button>
          <button onClick={handleEdit} className="modal-button">Edit Employee</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
