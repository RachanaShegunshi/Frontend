import React, { useState, useEffect } from 'react';
import Dashboard from '../Dashboard';
import './Category.css';
import { Link } from 'react-router-dom';

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/category') // Your Spring Boot API URL
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <Dashboard>
      <div className="container m-2">
        <div className="d-flex flex-row-reverse">
          <Link className="btn btn-success" to={"/AddCategory"}>Add Category</Link>
        </div>
        <section className="intro">
          <div className="bg-image h-100" style={{ backgroundColor: '#f5f7fa' }}>
            <div className="mask d-flex align-items-center h-100">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <div className="card shadow-2-strong">
                      <div className="card-body p-0">
                        <div className="table-responsive table-scroll" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: 700 }}>
                          <table className="table table-dark mb-0">
                            <thead style={{ backgroundColor: '#393939' }}>
                              <tr className="text-uppercase text-success">
                                <th scope="col">Category Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {categories.map(category => (
                                <tr key={category.id}>
                                  <td>{category.id}</td>
                                  <td>{category.categoryName}</td>
                                  <td>
                                    {/* Add action buttons like edit or delete here */}
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Dashboard>
  );
}

export default Category;
