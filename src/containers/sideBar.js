import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    return(
        <div className="sidebar">
            <h3 className = "menu">Menu</h3>
            <a href="#">Dashboard</a>
            <a href="#">User Profile</a>
            <a href="#">Table list</a>
            <a href="#">Link</a>
        </div>
    );
}

export default Sidebar;