import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {

    return (
        <div className="sidebar">
            <h3 className="menu">Menu</h3>

            <Link to="/Dashboard">
                <p>Dashboard</p>
            </Link>

            <Link to="/Table2">
                <p>Table list</p>
            </Link>

            <Link to="">
                <p>User Profile</p>
            </Link>
            
        </div>
    );
}

export default Sidebar;