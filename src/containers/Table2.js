import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Table2 = (props) => {
    return (

        <div class="container-fluid" >
            <div style={{ margin: "10px 0 0 250px", backgroundColor: "lightblue" }}>
                
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody style={{backgroundColor: "white"}}>
                        {
                            props.data.map(row => (
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
    )
}

export default Table2;