import React from 'react';
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


const UserProfile = (props) => {
    const mystyle = {
        marginLeft: "250px",
        marginBottom: "20px",
        padding: "1px 1px",
        // height: "1000px",
    };
    return (
        <div>
            <div style={{ margin: "0 0 40px 250px" }}>
                <Navbar />
            </div>

            <div className="container" style={mystyle}>
                        <div className="col-lg-12 order-lg-2">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a href="" data-target="#profile" data-toggle="tab" className="nav-link active">Profile</a>
                                </li>
                            </ul>
                            <div className="tab-content py-4">
                                <div className="tab-pane active" id="profile">
                                    <h5 className="mb-3">User Profile</h5>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h6>About</h6>
                                            <p>
                                                Web Designer, UI/UX Engineer
</p>
                                            <h6>Hobbies</h6>
                                            <p>
                                                Indie music, skiing and hiking. I love the great outdoors.
</p>
                                        </div>
                                        <div class="col-md-6">
                                            <h6>Recent badges</h6>
                                            <a href="#" class="badge badge-dark badge-pill">html5</a>
                                            <a href="#" class="badge badge-dark badge-pill">react</a>
                                            <a href="#" class="badge badge-dark badge-pill">codeply</a>
                                            <a href="#" class="badge badge-dark badge-pill">angularjs</a>
                                            <a href="#" class="badge badge-dark badge-pill">css3</a>
                                            <a href="#" class="badge badge-dark badge-pill">jquery</a>
                                            <a href="#" class="badge badge-dark badge-pill">bootstrap</a>
                                            <a href="#" class="badge badge-dark badge-pill">responsive-design</a>
                                            <hr />
                                            <span class="badge badge-primary"><i class="fa fa-user"></i> 900 Followers</span>
                                            <span class="badge badge-success"><i class="fa fa-cog"></i> 43 Forks</span>
                                            <span class="badge badge-danger"><i class="fa fa-eye"></i> 245 Views</span>
                                        </div>
                                        <div class="col-md-12">
                                            <h5 class="mt-2"><span class="fa fa-clock-o ion-clock float-right"></span> Recent Activity</h5>
                                            <table class="table table-sm table-hover table-striped">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <strong>Nikhil</strong> joined Project Team in <strong>`Collaboration`</strong>
                                                        </td>
                                                    </tr>
                                                    {/* <tr>
                                                        <td>
                                                            <strong>Gary</strong> deleted My Board1 in <strong>`Discussions`</strong>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>Kensington</strong> deleted MyBoard3 in <strong>`Discussions`</strong>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>John</strong> deleted My Board1 in <strong>`Discussions`</strong>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>Skell</strong> deleted his post Look at Why this is.. in <strong>`Discussions`</strong>
                                                        </td>
                                                    </tr> */}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
}

export default UserProfile;