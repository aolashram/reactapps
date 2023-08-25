import React from 'react'
import { BsFillGrid3X3GapFill, BsList, BsPlus } from 'react-icons/bs'
import Select, { StylesConfig } from 'react-select'

const customStyles = {
    control: base => ({
        ...base,
        height: 48,
        minHeight: 48
    })
};


const AllEmployees = () => {
    const options = [
        { value: '-1', label: 'Select Designation' },
        { value: 'webDeveloper', label: 'Web Developer' },
        { value: 'webDesigner', label: 'Web Designer' },
        { value: 'android', label: 'Android Developer' },
        { value: 'ios', label: 'Ios Developer' }
    ]

    const DesgSelect = () => (
        <Select styles={customStyles} options={options} />
    )
    return (
        // < !--Page Wrapper-- >
        <div class="page-wrapper">
            {/* <!-- Page Content --> */}
            <div class="content container-fluid">
                {/* <!-- Page Header --> */}
                <div class="page-header">
                    <div class="row align-items-center">
                        <div class="col">
                            <h3 class="page-title">Employee</h3>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.php">Dashboard</a></li>
                                <li class="breadcrumb-item activ">Employee</li>
                            </ul>
                        </div>
                        <div class="col-auto float-right ml-auto">
                            <a href="#" class="btn add-btn btn-outline btn-warning" data-toggle="modal" data-target="#add_employee"><BsPlus /> Add Employee</a>
                            <div class="view-icons">
                                <a href="employees.php" title="Grid View" class="grid-view btn btn-link activ"><BsFillGrid3X3GapFill /></a>
                                <a href="employees-list.php" title="Tabular View" class="list-view btn btn-link"><BsList /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /Page Header --> */}
                {/* <!-- Search Filter --> */}
                <div class="row filter-row">
                    <div class="col-sm-6 col-md-3">
                        <div class="form-group form-focus">
                            <input type="text" class="form-control-sm form-control floating" />
                            <label class="focus-label">Employee ID</label>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="form-group form-focus">
                            <input type="text" class="form-control floating" />
                            <label class="focus-label">Employee Name</label>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="form-group form-focus select-focus">
                            <DesgSelect />
                            {/* <label class="focus-label">Designation</label> */}
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <a href="#" class="btn btn-success btn-block"> Search </a>
                    </div>
                </div>
                {/* <!-- Search Filter --> */}
            </div>
        </div>
    )
}

export default AllEmployees
