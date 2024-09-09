import { useEffect, useState } from 'react'
import './App.css';
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import { Routes, Route } from "react-router-dom";
import Signup from './Component/Registration/Signup';
import Signin from './Component/Registration/Signin';
import Layout from './Component/Layout/Layout';
import Category from './Component/Dashboard/Category/Category';
import Customer from './Component/Dashboard/Customer/Customer';
import Inventory from './Component/Dashboard/Inventory/Inventory';
import Product from './Component/Dashboard/Product/Product';
import AddProductForm from './Component/Dashboard/Product/AddProductForm';
import AddCategoryFrom from './Component/Dashboard/Category/AddCategoryFrom';
import AddInventoryFrom from './Component/Dashboard/Inventory/AddInventoryFrom';
import Employee from './Component/Admin/Employee';
import OrderPage from './Component/Admin/OrderPage';
import keycloak from './keycloak';
import {ReactKeycloakProvider } from '@react-keycloak/web';
import ProductDetails from './Component/Dashboard/Inventory/ProductDetails';
import BillingSoftware from './Component/Dashboard/Product/Product';
import PrivateRoute from './Routes/PrivateRoutes';
import AddModal from './Component/Admin/AddModal';
import EditModal from './Component/Admin/EditModal';
import ReportPage from './Component/Admin/ReportPage';
import Order from './Component/Order';
import ProductPage from './Component/Admin/ProductPage';
import EditProduct from './Component/Admin/EditProduct';
import Profile from './Component/Dashboard/Profile';



function App() {
  useEffect(() => {
    if (window.opener) {
      // send them to the opening window
      window.focus();
      window.opener.location.href = "/";
      window.close();
    }
  }, []);
  return (
    <>
    <ReactKeycloakProvider authClient={keycloak}>
<Layout>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/employee/category" element={<Category/>} />
        <Route path="/employee/customer" element={<Customer/>} />
        <Route path="/employee/inventory" element={<Inventory/>} />
        {/* <Route path="/employee/order" element={<Order/>} /> */}
        <Route path="/employee/product" element={<Product/>} />
        <Route path="/AddProduct" element={<AddProductForm/>} />
        <Route path="/AddCategory" element={<AddCategoryFrom/>}/>
        <Route path="/AddInventory" element={<AddInventoryFrom/>}/>
       
        <Route path="/employee/inventory/product" element={<ProductDetails />} />
        <Route path="/Dashboard" element={<PrivateRoute/>}/>
       <Route path="/admin/employee" element={<Employee/>}/>
       <Route path="/admin/orderPage" element={<OrderPage/>}/>
       <Route path="/admin/reportPage" element={<ReportPage/>}/>
       <Route path="/order" element={<Order/>}/>
       <Route path="/admin/productPage" element={<ProductPage/>}/>
       <Route path="/admin/editProduct" element={<EditProduct/>}/>
       <Route path="/employee/profile" element={<Profile/>}/>
        {/* <Route path="/admin/order" element={<Order/>}/>
        <Route path="/admin/sales" element={<Sales/>}/>
        <Route path="/admin/people" element={<People/>}/>  */}
      </Routes>
     
      </Layout>
      </ReactKeycloakProvider>
    </>
  )
}

export default App
