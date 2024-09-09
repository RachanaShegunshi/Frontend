import React, { useState } from 'react';
import './Modal.css'
const AddModal = ({handleClose, show}) => {
  // Define state variables for form inputs
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');

  // Handler function for closing the modal
  // const handleClose = () => {
  //   // Logic to close the modal
  //   console.log('Modal closed');
  // };

  // Handler function for adding an employee
  const handleAdd = () => {
    // Logic to add employee, e.g., API call or state update
    console.log('Employee added:', { name, phone, email, salary });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Add Employee</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone No:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
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
          <button onClick={handleAdd} className="modal-button">Add Employee</button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
