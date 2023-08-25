import React from 'react';
import "./formStyle.css";
import { BiUserPlus } from 'react-icons/bi'; 
import { FormProvider, useForm } from 'react-hook-form'
import { Input } from '../../commons/form/Input';
import {
    name_validation,
    desc_validation,
    email_validation,
    num_validation,
    password_validation,
  } from './employeeFormValidations';
  import { useState } from 'react';



const Employee = () => {
  const methods = useForm()
  const [success, setSuccess] = useState(false)

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    methods.reset()
    setSuccess(true)
  })

  return (
    <div class="">
        <div class="row ">
            
        </div>
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
          <div class="container-fluid ">
            <span class="navbar-brand text-success" href="#"><b>Add New Employee</b></span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <button class="btn btn-success" aria-current="page" href="#" data-bs-toggle="collapse"
                    data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <BiUserPlus /> Add New</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    <div class="collapse" id="collapseExample">
          <div class="card card-body">
          <FormProvider {...methods}>
            <form onSubmit={e => e.preventDefault()}
                noValidate
                autoComplete="off">
              <legend class="text-primary">Personal Details</legend>
              <hr />
              {/* <!-- Line 1--> */}
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    {/* <label class="am-label" for="empCode">Employee Code</label>
                    <input type="text" id="empCode" name="empCode" class="am-Input" /> */}
                    <Input {...name_validation} />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="title">Title</label>
                    <select class="am-Input" id="title" name="title">
                      <option>Select Title</option>
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Miss.</option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="firstName">First name</label>
                    <input type="text" id="firstName" name="firstName" class="am-Input" />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="middleName">Middle name</label>
                    <input type="text" id="middleName" name="middleName" class=" am-Input" />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="lastName">Last name</label>
                    <input type="text" id="lastName" name="lastName" class="am-Input" />
                  </div>
                </div>
              </div>
              {/* <!-- Line 2--> */}
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="fatherName">Father's Name</label>
                    <input type="text" id="fatherName" name="fatherName" class="am-Input" />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="motherName">Mother's Name</label>
                    <input type="text" id="motherName" name="motherName" class="am-Input" />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="dob">Date of Birth</label>
                    <input type="text" id="dob" name="dob" class="am-Input" />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="gender">Gender</label>
                    <select class="am-Input" id="gender" name="gender">
                      <option>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="maritalStatus">Marital Status</label>
                    <select class="am-Input" id="maritalStatus" name="maritalStatus">
                      <option>Select Marital Status</option>
                      <option>Single</option>
                      <option>Married</option>
                      <option>Divourced</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* <!-- Line 3--> */}
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="bloodGroup">Blood Group</label>
                    <select class="am-Input" name="bloodGroup" id="bloodGroup">
                      <option>Select Blood Group</option>
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                      <option>O+</option>
                      <option>O-</option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="contactNumber">Contact Number</label>
                    <input type="text" id="contactNumber" name="contactNumber" class="am-Input" />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="email">Email</label>
                    <input type="email" id="email" name="email" class="am-Input" />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="country">Country</label>
                    <select class="am-Input" id="country" name="country">
                      <option>Select Country</option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="state">State</label>
                    <select class="am-Input" id="state" name="state">
                      <option>Select State</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* <!-- Line 4--> */}
              <div class="row mb-4">
                <div class="col-3">
                  <div class="form-outline">
                    <label class="am-label" for="city">City</label>
                    <select class="am-Input" id="city" name="city">
                      <option>Select City</option>
                    </select>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-outline">
                    <label class="am-label" for="address">Address</label>
                    <textarea class="am-TextArea" id="address" name="address"></textarea>
                  </div>
                </div>
                <div class="col-3">
                  <div class="form-outline">
                    <label class="am-label" for="photo">Attach Photo</label>
                    <input type="file" id="photo" name="photo" class="am-file" />
                  </div>
                </div>
              </div>
              {/* <!-- Line 5--> */}
              <hr />
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="pfno">PF Number</label>
                    <input type="text" id="pfno" name="pfno" class="am-Input" />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="esiNo">ESI Number</label>
                    <input type="text" id="esiNo" name="esiNo" class="am-Input" />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="panNo">Pan Number</label>
                    <input type="text" id="panNo" name="panNo" class="am-Input" />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="aadhaarNo">Adhaar Number</label>
                    <input type="text" id="aadhaarNo" anme="aadhaarNo" class="am-Input" />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="accountNo">Account Number</label>
                    <input type="text" id="accountNo" name="accountNo" class="am-Input" />
                  </div>
                </div>
              </div>
              <hr />
              {/* <!-- Line 6  Other informations--> */}
              <legend class="text-primary">Other Details</legend>
              <hr />
              {/* <!-- Line 7--> */}
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="form6Example1">Company</label>
                    <select class="am-Input" name="company" id="company">
                      <option value="-1">Select Company</option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="shift">Office Shift</label>
                    <select class="am-Input" id="shift" name="shift">
                      <option value="-1">Select Shift</option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="department">Department</label>
                    <select class="am-Input" id="department" name="department">
                      <option value="-1">Select Department</option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="designation">Designation</label>
                    <select class="am-Input" id="designation" name="designation">
                      <option value="-1">Select Designation</option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                      <input type="radio" class="btn-check" name="jobStatus" value="probation" id="probation"
                        autocomplete="off" checked />
                      <label class="btn btn-outline-primary" for="btnradio1">Probation</label>

                      <input type="radio" class="btn-check" name="jobStatus" value="confirmed" id="confirmed"
                        autocomplete="off" />
                      <label class="btn btn-outline-primary" for="btnradio2">Confirmation</label>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Line 8--> */}
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="doj">Date of Joining</label>
                    <input type="text" id="doj" name="doj" class="am-Input" />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="reportsTo">Reports To</label>
                    <select class="am-Input" name="reportsTo" id="reportsTo">
                      <option value="-1">Select...</option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="category">Category</label>
                    <select class="am-Input" id="category" name="category">
                      <option value="-1">Select...</option>
                      <option>NCISM</option>
                      <option>General</option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="group">Group</label>
                    <select class="am-Input" name="group" id="group">
                      <option value="">Select ...</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Divourced">Divourced</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* <!-- Line 9  Other informations--> */}
              <legend class="text-primary">Education Qualification Details</legend>
              <hr />
              {/* <!-- Line 10--> */}
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="lastQualification">Latest Qualification</label>
                    <input type="text" id="lastQualification" name="lastQualification" class="am-Input" />
                  </div>
                </div>
              </div>
              <legend class="text-info">Accommodation</legend>
              <hr />
              {/* <!-- Line 10--> */}
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <label class="am-label" for="accommodation">Accommodation</label>
                    <select class="am-Input" id="accommodation" name="accommodation">
                      <option value="-1">Select ...</option>
                      <option>Single</option>
                      <option>Married</option>
                      <option>Divourced</option>
                    </select>
                  </div>
                </div>
              </div>
              <hr />
              <hr />
              <div class="d-flex">
                <div class="me-auto">
                  <button class="btn btn-light-secondary" type="reset">Reset</button>
                </div>
                <div class="ms-auto">
                  <button class="btn btn-primary" onClick={onSubmit} id="btnSubmit">Save</button>
                </div>
              </div>
            </form>
            </FormProvider>
          </div>
        </div>
    </div>
  )
}

export default Employee1

<Formik 
                        validationSchema={validationSchema} 
                        initialValues={{ 
                            empCode: "",
                            title:"",
                            firstName:"",
                            middleName:"",
                            lastName:"",
                        }} 
                        onSubmit={(values) => {
                            console.log(values);
                        }}>
                        {({ values }) => (
                            <Form >
                                <legend class="text-primary">Personal Details</legend>
                                <hr />
                                {/* <!-- Line 1--> */}
                                <div class="row mb-4">
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="empCode">Employee Code</label>
                                            <Field name="empCode" type="text" className="am-Input"></Field>
                                        </div>
                                        <AmErrorMessage name="empCode" />
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="title">Title</label>
                                            <Field name="title" as="select" className="am-Input">
                                                <option>Select Title</option>
                                                <option value="Mr">Mr.</option>
                                                <option value="Mrs">Mrs.</option>
                                                <option value="Miss">Miss.</option>
                                            </Field>
                                            <AmErrorMessage name="title" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="firstName">First name</label>
                                            <Field type="text" name="firstName" class="am-Input" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="middleName">Middle name</label>
                                            <Field type="text" id="middleName" name="middleName" class="am-Input" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="lastName">Last name</label>
                                            <Field type="text" id="lastName" name="lastName" class="am-Input" />
                                        </div>
                                    </div>

                                </div>


                                <hr />
                                <div class="d-flex">
                                    <div class="me-auto">
                                        <input class="btn btn-secondary" type="reset" value="Reset" />
                                    </div>
                                    <div class="ms-auto">
                                        <button class="btn btn-success" type='submit'>Save</button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>