/*-------------------------------------------------------------------
|  🐼 React FC Form
|
|  🐯 Purpose: RENDERS EMPLOYEE FORM CONTEXT AND INPUTS
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import React from 'react';
import "./formStyle.css";
import { BiUserPlus } from 'react-icons/bi';
import { FormProvider, useForm } from 'react-hook-form'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from "yup";
import AmErrorMessage from '../../commons/form/utils/AmErrorMessage'
import { useState } from 'react';
import dayjs from 'dayjs';
import {
    titles, titleOptions, bldGroup,
    bldGroups, genders, genderOptions,
    maritalStatus, maritalStatusOptions,
    states, statessOptions,
    cities, citiesOptions
} from "./EmployeeOptions"
import axios from 'axios';

const baseURL = "http://192.168.55.253:99/api/v1";
const cntURL = baseURL + "/countries";
const getStatesURL = baseURL + "/states/country/";
const getCitiesURL = baseURL + "/cities/state/"
const getCompaniesURL = baseURL + "/companies";
const getShiftsURL = baseURL + "/shifts";
const getJobRoleURL = baseURL + "/jobroles";
const getDepartmentsURL = baseURL + "/departments";
const empoloyeeSaveURL = baseURL + "/employees"

const Employee = () => {
    const methods = useForm()
    const [success, setSuccess] = useState(false)
    const [countryList, setCountryList] = useState([])
    const [countrySelected, setCountrySelected] = useState("India")
    const [stateSelected, setStateSelected] = useState("")
    const [stateList, setStateList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [companyList, setCompanyList] = useState([]);
    const [shiftsList, setShiftsList] = useState([]);
    const [jobroleList, setJobRoleList] = useState([]);
    const [departmentList, setDepartmentList] = useState([]);

    React.useEffect(() => {
        getInitInfo()
    }, [])

    function getInitInfo() {
        axios.get(cntURL) // Get Countries
            .then(response => {
                setCountryList(response.data)
            })
        axios.get(getCompaniesURL) // Get Companies
            .then(response => {
                setCompanyList(response.data)
            })
        axios.get(getShiftsURL)// Get Shifts
            .then(response => {
                setShiftsList(response.data)
            })
        axios.get(getJobRoleURL)// Get JobRole
            .then(response => {
                setJobRoleList(response.data)
            })
        axios.get(getDepartmentsURL)// Get Department
            .then(response => {
                setDepartmentList(response.data)
            })

    }
    const fillStateDropdown = () => {
        if (stateList) {
            return stateList.map((item) => (
                <option value={item.id} key={item.id}> {item.name}</option>
            ))
        }
    }
    const countryOnChange = (e) => {
        console.log("Dropdown value : " + e.target.value)
        if (e.target.value) {
            setCountrySelected(e.target.valu)
        }
        axios.get(getStatesURL + e.target.value)
            .then(function (response) {
                setStateList(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const stateOnChange = (e) => {
        console.log("Dropdown value : " + e.target.value)
        if (e.target.value) {
            setStateSelected(e.target.valu)
        }
        axios.get(getCitiesURL + e.target.value)
            .then(function (response) {
                setCityList(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const eighteen_years_ago = dayjs().subtract(18, "year").format("YYYY-MM-DD");

    const validationSchema = Yup.object({
        empCode: Yup.string().required("Employee code cannot be empty !"),
        title: Yup.string().required("Please select a Title !").oneOf(titles),
        firstName: Yup.string().required("First name is Mandatory !"),
        lastName: Yup.string().required("First name is Mandatory !"),
        dob: Yup.date().max(eighteen_years_ago, "Must be atleast 18 years to Join the company!"),
        gender: Yup.string().required("Please select a Gender !").oneOf(genders),

        // firstName:"",
        // middleName:"",
        // fatherName,motherName,dob,gender,maritalStatus
    })

    return (
        <div className="">
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <div class="container-fluid ">
                    <span class="navbar-brand text-secondary" href="#"><b>Add New Employee</b></span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <button class="btn btn-primary" aria-current="page" href="#" data-bs-toggle="collapse"
                                    data-bs-target="#collapseEmpForm" aria-expanded="false" aria-controls="collapseEmpForm">
                                    <BiUserPlus /> Add New</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="collapse" id="collapseEmpForm">
                <div class="card card-body border">
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={{
                            empCode: "",
                            title: "",
                            firstName: "",
                            middleName: "",
                            lastName: "",
                            fatherName: "",
                            motherName: "",
                            gender: "",
                            dob: new Date(),
                            maritalStatus: "",
                            bloodGroup: "",
                            contactNumber: "",
                            email: "",
                            country: "",
                            state: "",
                            city: "",
                            address: "",
                            photo: "",
                            pfno: "",
                            esiNo: "",
                            panNo: "",
                            adhaarNo: "",
                            accountNumber: "",
                            company: "",
                            shift: "",
                            department: "",
                            jobrole: "",
                            jobStatus: "",
                            reportsTo: "",
                            category: "",
                            group: "",
                            lastQualification: "",
                            accommodation: "",
                        }}
                        onSubmit={(values) => {
                            console.log(values);
                            axios({
                                method: 'POST',
                                url: empoloyeeSaveURL,
                                data: values
                            }).then(function (response) {
                                alert("Data saved ...!")
                            }).catch(function (error) {
                                console.log(error);
                            });
                            // axios.post(empoloyeeSaveURL, { values })
                            //     .then(function (response) {
                            //         alert("Data saved !")
                            //     })
                            //     .catch(function (error) {
                            //         console.log(error);
                            //     });
                        }} >
                        {({ values }) => (
                            <Form>
                                <div className='row bg-lv'>
                                    <h5 class="">&nbsp; Personal Details</h5>
                                </div>
                                {/* <!-- Line 1--> */}
                                <div class="row mb-0 rounded">
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="empCode">Employee Code<span className='error-message'>**</span></label>
                                            <Field name="empCode" type="text" className="am-Input" />
                                            <AmErrorMessage name="empCode" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="title">Title<span className='error-message'>**</span></label>
                                            <Field as="select" className="am-Input" id="title" name="title">
                                                <option value="">Select Title</option>
                                                {titleOptions}
                                            </Field>
                                            <AmErrorMessage name="title" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="firstName">First name<span className='error-message'>**</span></label>
                                            <Field type="text" id="firstName" name="firstName" class="am-Input" />
                                            <AmErrorMessage name="firstName" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="middleName">Middle name</label>
                                            <Field type="text" id="middleName" name="middleName" class=" am-Input" />
                                            <AmErrorMessage name="middleName" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="lastName">Last name<span className='error-message'>**</span></label>
                                            <Field type="text" id="lastName" name="lastName" class="am-Input" />
                                            <AmErrorMessage name="lastName" />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Line 2--> */}
                                <div class="row mb-0 ">
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="fatherName">Father's Name</label>
                                            <Field type="text" id="fatherName" name="fatherName" class="am-Input" />
                                            <AmErrorMessage name="fatherName" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="motherName">Mother's Name</label>
                                            <Field type="text" id="motherName" name="motherName" class="am-Input" />
                                            <AmErrorMessage name="motherName" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="dob">Date of Birth<span className='error-message'>**</span></label>
                                            <Field type="date" id="dob" name="dob" class="am-Input" />
                                            <AmErrorMessage name="dob" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="gender">Gender<span className='error-message'>**</span></label>
                                            <Field class="am-Input" as="select" id="gender" name="gender">
                                                {genderOptions}
                                            </Field>
                                            <AmErrorMessage name="gender" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="maritalStatus">Marital Status</label>
                                            <Field class="am-Input" as="select" id="maritalStatus" name="maritalStatus">
                                                <option value="">Select Marital Status</option>
                                                {maritalStatusOptions}
                                            </Field>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Line 3--> */}
                                <div class="row mb-0 ">
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="bloodGroup">Blood Group</label>
                                            <Field class="am-Input" as="select" name="bloodGroup" id="bloodGroup">
                                                <option>Select Blood Group</option>
                                                {bldGroup}
                                            </Field>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="contactNumber">Contact Number<span className='error-message'>**</span></label>
                                            <Field type="text" id="contactNumber" name="contactNumber" class="am-Input" />
                                            <AmErrorMessage name="contactNumber" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="email">Email</label>
                                            <Field type="email" id="email" name="email" class="am-Input" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="country">Country<span className='error-message'>**</span></label>
                                            <Field as="select" value={countrySelected} class="am-Input" id="country" name="country" onChange={countryOnChange}>
                                                <option>Select Country</option>
                                                {
                                                    countryList.map((item) => (
                                                        <option value={item.id} key={item.id}> {item.name} </option>
                                                    ))
                                                }
                                            </Field>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="state">State<span className='error-message'>**</span></label>
                                            <Field as="select" value={stateSelected} class="am-Input" id="state" name="state" onChange={stateOnChange}>
                                                <option>Select State</option>
                                                {stateList.map((e, key) => {
                                                    return <option key={key} value={e.id}>{e.name}</option>;
                                                })}
                                            </Field>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Line 4--> */}
                                <div class="row mb-0 ">
                                    <div class="col-3">
                                        <div class="form-outline">
                                            <label class="am-label" for="city">City<span className='error-message'>**</span></label>
                                            <Field as="select" class="am-Input" id="city" name="city">
                                                <option>Select City</option>
                                                {cityList.map((e, key) => {
                                                    return <option key={key} value={e.id}>{e.name}</option>;
                                                })}
                                            </Field>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-outline">
                                            <label class="am-label" for="address">Address<span className='error-message'>**</span></label>
                                            <Field as="textarea" class="am-TextArea" id="address" name="address"></Field>
                                            <AmErrorMessage name="address" />
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="form-outline">
                                            <label class="am-label" for="photo">Attach Photo</label>
                                            <Field type="file" id="photo" name="photo" class="am-file" />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Line 5--> */}
                                <hr />
                                <div class="row mb-0">
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="pfno">PF Number</label>
                                            <Field type="text" id="pfno" name="pfno" class="am-Input" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="esiNo">ESI Number</label>
                                            <Field type="text" id="esiNo" name="esiNo" class="am-Input" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="panNo">Pan Number</label>
                                            <Field type="text" id="panNo" name="panNo" class="am-Input" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="adhaarNo">Adhaar Number</label>
                                            <Field type="text" id="adhaarNo" name="adhaarNo" class="am-Input" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="accountNumber">Account Number</label>
                                            <Field type="text" id="accountNumber" name="accountNumber" class="am-Input" />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                {/* <!-- Line 6  Other informations--> */}
                                <div className='row bg-lv'>
                                    <h5 class="">&nbsp;Other Details</h5>
                                </div>

                                {/* <!-- Line 7--> */}
                                <div class="row mb-0">
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="form6Example1">Company<span className='error-message'>**</span></label>
                                            <Field as="select" class="am-Input" name="company" id="company">
                                                <option value="-1">Select Company</option>
                                                {companyList.map((e, key) => {
                                                    return <option key={key} value={e.id}>{e.companyName}</option>;
                                                })}
                                            </Field>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="shift">Office Shift<span className='error-message'>**</span></label>
                                            <Field as="select" class="am-Input" id="shift" name="shift">
                                                <option value="-1">Select Shift</option>
                                                {shiftsList.map((e, key) => {
                                                    return <option key={key} value={e.id}>{e.shiftName}</option>;
                                                })}
                                            </Field>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="department">Department<span className='error-message'>**</span></label>
                                            <Field as="select" class="am-Input" id="department" name="department">
                                                <option value="-1">Select Department</option>
                                                {departmentList.map((e, key) => {
                                                    return <option key={key} value={e.id}>{e.name}</option>;
                                                })}
                                            </Field>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="designation">JobRole<span className='error-message'>**</span></label>
                                            <Field as="select" class="am-Input" id="jobrole" name="jobrole">
                                                <option value="-1">Select Job Role</option>
                                                {jobroleList.map((e, key) => {
                                                    return <option key={key} value={e.id}>{e.name}</option>;
                                                })}
                                            </Field>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label className='am-label'>Job status</label><br />
                                            <Field type="radio" class="form-check-input" name="jobStatus" value="probation" id="probation"
                                                autocomplete="off" checked="checked" />
                                            <label class="am-label" for="btnradio1">Probation</label>

                                            <Field type="radio" class="form-check-input" name="jobStatus" value="confirmed" id="confirmed"
                                                autocomplete="off" />
                                            <label class="am-label" for="btnradio2">Confirmation</label>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Line 8--> */}
                                <div class="row mb-4 ">
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="doj">Date of Joining<span className='error-message'>**</span></label>
                                            <Field type="date" id="doj" name="doj" class="am-Input" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="reportsTo">Reports To</label>
                                            <Field as="select" class="am-Input" name="reportsTo" id="reportsTo">
                                                <option value="-1">Select...</option>
                                            </Field>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="category">Category</label>
                                            <Field as="select" class="am-Input" id="category" name="category">
                                                <option value="-1">Select...</option>
                                                <option>NCISM</option>
                                                <option>General</option>
                                            </Field>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="group">Group</label>
                                            <Field as="select" class="am-Input" name="group" id="group">
                                                <option value="">Select ...</option>
                                            </Field>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                {/* <!-- Line 9  Other informations--> */}
                                <div className='row bg-lv'>
                                    <h5 class="bg-lv">&nbsp;Education Qualification Details<span className='error-message'>**</span></h5>
                                </div>


                                {/* <!-- Line 10--> */}
                                <div class="row mb-4">
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="lastQualification">Latest Qualification</label>
                                            <Field type="text" id="lastQualification" name="lastQualification" class="am-Input" />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='row bg-lv'>
                                    <h5 class=" ">&nbsp;Accommodation</h5>
                                </div>
                                {/* <!-- Line 10--> */}
                                <div class="row mb-4 bg-light">
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="am-label" for="accommodation">Accommodation</label>
                                            <Field as="select" class="am-Input" id="accommodation" name="accommodation">
                                                <option value="-1">Select ...</option>
                                                <option value="B-Block">B-Block</option>
                                                <option value="C-Block">C-Block</option>
                                                <option value="A-Block">A-Block</option>
                                                <option value="Own Accommodation">Own Accommodation</option>
                                            </Field>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div class="d-flex">
                                    <div class="me-auto">
                                        <button class="btn btn-secondary" type="reset">Reset</button>
                                    </div>
                                    <div class="ms-auto">
                                        <button class="btn btn-primary" type="submit">Save</button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>



            </div>

        </div>
    );
}

export default Employee;