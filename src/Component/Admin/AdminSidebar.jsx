import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import { Link } from 'react-router-dom'


function AdminSidebar({openSidebarToggle, OpenSidebar}) {
    return (
      <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
          <div className='sidebar-title'>
              <div className='sidebar-brand'>
                  <BsCart3  className='icon_header'/> SHOP
              </div>
              <span className='icon close_icon' onClick={OpenSidebar}>X</span>
          </div>
  
          <ul className='sidebar-list'>
              <li className='sidebar-list-item'>
                  <Link to="">
                      <BsGrid1X2Fill className='icon'/> Dashboard
                  </Link>
              </li>
              <li className='sidebar-list-item'>
                  <Link to="/employee">
                      <BsFillArchiveFill className='icon'/> Employee
                  </Link>
              </li>
              <li className='sidebar-list-item'>
                  <Link to="/admin/orderPage">
                      <BsFillGrid3X3GapFill className='icon'/> Orders
                  </Link>
              </li>
              <li className='sidebar-list-item'>
                  <Link to="/admin/sales">
                      <BsPeopleFill className='icon'/> Sales
                  </Link>
              </li>
              <li className='sidebar-list-item'>
                  <Link to="/admin/productPage">
                      <BsListCheck className='icon'/> ProductPage
                  </Link>
              </li>
              <li className='sidebar-list-item'>
                  <Link to="">
                      <BsListCheck className='icon'/> Order
                  </Link>
              </li>
              <li className='sidebar-list-item'>
                  <Link to="/admin/reportPage">
                      <BsMenuButtonWideFill className='icon'/> Reports
                  </Link>
              </li>
              <li className='sidebar-list-item'>
                  <Link to="">
                      <BsFillGearFill className='icon'/> SignOut
                  </Link>
              </li>
          </ul>
      </aside>
    )
  }

export default AdminSidebar
