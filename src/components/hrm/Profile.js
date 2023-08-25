import React from 'react'
import "./pf.css"
import { useLocation } from 'react-router-dom';
import { EmployeeData } from './data/getEmp';
import { Field, Formik, Form } from "formik";

const Profile = (props) => {
    const location = useLocation();
    const dt = location.state;
    const e = dt
    console.log(e.empCode)
    //Get Employee using empcode
    let filteredE = []
    filteredE = EmployeeData.filter(empp => empp.empCode === dt.empCode)
    console.log(EmployeeData)

    const emp = filteredE[0]
    console.log(emp)
    //if (1 === 1) return;
    return (


        <div className="container">
            <div className='row'>
                <div className='col'>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-primary me-md-2 btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#transferModal">Transfer</button>
                        <button className="btn btn-primary btn-sm" type="button">Button</button>
                    </div>
                </div>
            </div>
            <div className='row'><br /></div>
            <div className="row">

                <div className="col-xl-5">
                    <div className="card">
                        <div className="card-body">
                            <div className="dropdown float-end">
                                <a href="/" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="mdi mdi-dots-vertical"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    {/* <!-- item--> */}
                                    <a href="/" className="dropdown-item">Edit</a>
                                    {/* <!-- item--> */}
                                    <a href="/" className="dropdown-item">Delete</a>
                                    {/* <!-- item--> */}
                                    <a href="/" className="dropdown-item">Block</a>
                                </div>
                            </div>
                            <div className="d-flex align-items-start">
                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle avatar-lg img-thumbnail" alt="profileimage" />
                                <div className="w-100 ms-3">
                                    <h4 className="my-0">{emp.firstName} {emp.middleName} {emp.lastName}</h4>
                                    <p className="text-muted">{emp.designation}</p>
                                    {/* <button type="button" className="btn btn-soft-primary btn-xs waves-effect mb-2 waves-light">Follow</button>
                                    <button type="button" className="btn btn-soft-success btn-xs waves-effect mb-2 waves-light">Message</button> */}
                                </div>
                            </div>

                            <div className="mt-3">
                                <h4 className="font-13 text-uppercase">About Me :</h4>
                                <p className="text-muted font-13 mb-3">
                                    {/* Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. */}
                                </p>
                                <p className="text-muted mb-2 font-13"><strong>Full Name :</strong> <span className="ms-2">{emp.title} {emp.firstName} {emp.middleName} {emp.lastName}</span></p>

                                <p className="text-muted mb-2 font-13"><strong>Mobile :</strong><span className="ms-2">{emp.contactNumber}</span></p>

                                <p className="text-muted mb-2 font-13"><strong>Email :</strong> <span className="ms-2">{emp.email}</span></p>

                                {/* <p className="text-muted mb-1 font-13"><strong>Location :</strong> <span className="ms-2">USA</span></p> */}
                            </div>

                        </div>
                    </div>
                    {/* <!-- end card --> */}
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="row">
                                <div className="col-4 border-end border-light">
                                    <h5 className="text-muted mt-1 mb-2 fw-normal">Applied</h5>
                                    <h2 className="mb-0 fw-bold">116</h2>
                                </div>
                                <div className="col-4 border-end border-light">
                                    <h5 className="text-muted mt-1 mb-2 fw-normal">Reviewed</h5>
                                    <h2 className="mb-0 fw-bold">87</h2>
                                </div>
                                <div className="col-4">
                                    <h5 className="text-muted mt-1 mb-2 fw-normal">Contacted</h5>
                                    <h2 className="mb-0 fw-bold">98</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <!-- end col--> */}

                <div className="col-xl-7">
                    <div className="card">
                        <div className="card-body">
                            <div id="amTab" className="container">
                                <ul className="nav nav-tabs mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Office Info</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Contact Info</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Documents info</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-personal-tab" data-bs-toggle="pill" data-bs-target="#pills-personal" type="button" role="tab" aria-controls="pills-personal" aria-selected="false">Personal info</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content clearfix" id="pills-tabContent">
                                <div className="tab-pane fade show " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">Department</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.department}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">Designation</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.designation}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">Shift</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.shift}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">Job Status</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.jobStatus}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">Date of Joining</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.doj}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">Reports To</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.reportsTo}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">Category</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.category}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">Group</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.group}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <h3> </h3>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">Contact Number</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.contactNumber}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.email}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">Country</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.country}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">State</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.state}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">City</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.city}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">Address</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.address}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                    <h3></h3>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">PF No</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.pfno}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">ESI No</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.esiNo}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">PAN No</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.panNo}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">Aadhar No</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.aadhaarNo}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">Bank Account No</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.accountNo}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-personal" role="tabpanel" aria-labelledby="pills-personal-tab">
                                    <h3></h3>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">PF No</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.pfno}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">ESI No</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.esiNo}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">PAN No</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.panNo}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">Aadhar No</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.aadhaarNo}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0 fw-bold">Bank Account No</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{emp.accountNo}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end card--> */}

                </div>
                {/* <!-- end col --> */}
            </div>
            {/* <!-- end row--> */}
            <div>
                {/* <!-- Modal --> */}
                <div class="modal fade" id="transferModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 className="modal-title fs-5 text-primary" id="staticBackdropLabel">Transfer employee</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <Formik
                                    onSubmit={(values) => {
                                        console.log(values);
                                    }} >
                                    {({ values }) => (
                                        <Form>
                                            <div class="mb-3">
                                                <label for="recipient-name" class="am-label">To Department:</label>
                                                <Field type="text" class="am-Input" id="recipient-name" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="message-text" class="am-label">Designation:</label>
                                                <Field type="text" class="am-Input" id="designation" />
                                            </div>
                                            <br />
                                            <hr />
                                            <div class="d-flex justify-content-center">
                                                <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <button type="submit" class="btn btn-success btn-sm">Save</button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                            <div class="modal-footer">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile
