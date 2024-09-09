import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Sidebar({openSidebarToggle, OpenSidebar}) {
    return (
      <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
          <div className='sidebar-title'>
              <div className='sidebar-brand'>
                  <BsCart3  className='icon_header'/> Dashboard
              </div>
              <span className='icon close_icon' onClick={OpenSidebar}>X</span>
          </div>
  
          <ul className='sidebar-list'>
              <li className='sidebar-list-item'>
                  <Link to="/employee/profile">
                      <BsGrid1X2Fill className='icon'/> Profile
                  </Link>
              </li>
              <li className='sidebar-list-item'>
                  <Link to="/employee/product">
                      <BsFillArchiveFill className='icon'/> Billing Board
                  </Link>
              </li>
              <li className='sidebar-list-item'>
                  <Link to="/employee/category">
                      <BsFillGrid3X3GapFill className='icon'/> Categories
                  </Link>
              </li>
              <li className='sidebar-list-item'>
                  <Link to="/employee/customer">
                      <BsPeopleFill className='icon'/> Customers
                  </Link>
              </li>
              <li className='sidebar-list-item'>
                  <Link to="/employee/inventory">
                      <BsListCheck className='icon'/> Inventory
                  </Link>
              </li>
            {/*  <li className='sidebar-list-item'>
                  <Link to="/employee/order">
                      <BsListCheck className='icon'/> Order
                  </Link>
              </li>
              <li className='sidebar-list-item'>
                  <Link to="">
                      <BsMenuButtonWideFill className='icon'/> Reports
                  </Link>
              </li>*/}
              <li className='sidebar-list-item'>
                  <Link to="">
                      <BsFillGearFill className='icon'/> SignOut
                  </Link>
              </li>
          </ul>
      </aside>
    )
  }

export default Sidebar
