import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../data.json';
import Navbar from '../components/navbar';


const Table2 = (props) => {
    return (
        <div>
            <div style={{ margin: "0 0 40px 250px" }}>
                <Navbar />
            </div>
            <div class="container-fluid" >

                <div style={{ margin: "0 0 0 250px", backgroundColor: "lightblue" }}>

                    <table class="table table-bordered" >
                        <thead>
                            <tr>    
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody style={{ backgroundColor: "white" }}>
                            {
                                data.map(row => (
                                    <tr>
                                        <td>{row.Firstname}</td>
                                        <td>{row.Lastname}</td>
                                        <td>{row.Email}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table2;