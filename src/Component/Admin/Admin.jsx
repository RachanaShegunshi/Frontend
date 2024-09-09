import React from 'react'
import './Admin.css';
import AdminSidebar from './AdminSidebar'
import { useState } from 'react';

const Admin = ({children}) => {
 
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    console.dir(children)
    return (
        <>
        <div className="grid-container h-100">
            <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <div className="container">
                {children}
            </div>
        </div>
        </>
    )
  
}

export default Admin;
