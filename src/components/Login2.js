import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import { Link } from 'react-router-dom';


const Login2 = (props) => {

    
    return (
        <div>
            <div style={{ margin: "0 0 40px 250px" }}>
                <Navbar />
            </div>
            <section className="container-fluid bg" style={{ margin: "0 0 20px 0" }}>
                <section className="row justify-content-center">
                    <section className="col-md-3">
                        <section className="border   border-primary rounded">
                            <form className="form-container px-md-4" action="#">
                                <div className="form-group">
                                    <h2><label className="form-check-label" >Sign In</label> </h2>
                                </div>
                                <div className="form-group">
                                    <label for="l_email">Email address</label>
                                    <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" />
                                </div>


                                <div className="form-group">
                                    <label for="l_password">Password</label>
                                    <input type="password" className="form-control" id="Password" />
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block form-control">Submit</button>
                                </div>
                                {/* <div className="form-group" style={{ fontSize: "small" }}>
                                    Forgot Password ? <a href="#" style={{ color: "darkslateblue" }}>Click Here</a>

                                </div>

                                <div className="form-group" style={{ fontSize: "medium" }}>
                                    New User ? <a href="#" style={{ color: "darkslateblue" }}>Register Here</a><br />
                                </div> */}
                                    <div className= "row">
                                        <div className= "col">
                                            Forgot Password ?
                                            <Link to="/#">
                                                <p >Click Here</p>
                                            </Link>
                                        </div>

                                        <div className= "col">
                                            New User ?
                                            <Link to="/#">
                                                <p >Register Here</p>
                                            </Link>
                                        </div>
                                    </div>
                            </form>
                        </section>
                    </section>
                </section>
            </section>

        </div>
    );
}

export default Login2;