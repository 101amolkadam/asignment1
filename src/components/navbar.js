import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const navStyle = {
        margin: "0 0 20px 0"
    }
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark sticky-top" style={{ navStyle }}>
                {/* <a class="navbar-brand" href="#">Assignment 1</a> */}
                <Link to="/Login2">
                    {/* <h1 class="navbar-brand">Assignment</h1> */}
                    <span class="navbar-text navbar-brand text-white">
                        <h5>Assignment</h5>
                    </span>
                </Link>
                <Link to="/Login2">
                    <button type="button" class="btn btn-outline-warning">Login</button>
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;