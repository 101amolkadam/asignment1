import React from 'react';
import Navbar from '../components/navbar';

const Main = (props) => {

    const mystyle = {
        marginLeft: "250px",
        marginBottom: "20px",
        padding: "1px 1px",
        // height: "1000px",
    };
    return (
        <div style={mystyle}>
            <div style = {{margin: "0 0 40px 0"}}>
                <Navbar />
            </div>
            <h2>Asignment 1</h2>
            <p>This is asignment 1.</p>
        </div>
    );
}

export default Main;