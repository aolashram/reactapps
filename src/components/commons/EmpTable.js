import React, { useState } from "react";
import { BsAspectRatio, BsFillEyeFill, BsFillPencilFill, BsFillPlusSquareFill, BsFillTrashFill } from "react-icons/bs";
import { useTable } from "react-table";
import { EmployeeData } from "../hrm/data/getEmp";
import { Link, useLocation } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


export const MyTable2 = ({ eList }) => {
    const location = useLocation();
    const empList = eList;
    console.log(empList)
    //console.log(props)
    return (
        <BootstrapTable data={empList}>
            <TableHeaderColumn dataField='empCode' isKey={true}>Employee Code</TableHeaderColumn>
            <TableHeaderColumn dataField='title'>Title</TableHeaderColumn>
            <TableHeaderColumn dataField='firstName'>First Name</TableHeaderColumn>
            <TableHeaderColumn dataField='gender'>Gender</TableHeaderColumn>
            <TableHeaderColumn dataField='dob'>Birth Date</TableHeaderColumn>
            <TableHeaderColumn dataField='contactNumber' > Contact Number</TableHeaderColumn >
            <TableHeaderColumn dataField='department'>Department</TableHeaderColumn>
            <TableHeaderColumn dataField='designation'>Designation</TableHeaderColumn>
            <TableHeaderColumn dataField='doj' > Joined Date</TableHeaderColumn >
        </BootstrapTable>
    )

}
const EmpTable = (JsonData) => {
    const DisplayData = EmployeeData.map((info, index) => {
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{info.empCode}</td>
                <td>{info.title}</td>
                <td>{info.firstName}</td>
                <td>{info.gender}</td>
                <td>{info.dob}</td>
                <td>{info.contactNumber}</td>
                <td>
                    <ul class="list-inline m-0">
                        <li class="list-inline-item">
                            <Link to="/hrm/profile" state={EmployeeData}><BsAspectRatio /></Link>
                            {/* <a class="btn btn-primary btn-sm rounded-0" href="/" type="button" data-toggle="tooltip" data-placement="top" tooltip="View" title="View"><BsAspectRatio /></a> */}
                        </li>
                        <li class="list-inline-item">
                            <button class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><BsFillPencilFill /></button>
                        </li>
                        <li class="list-inline-item">
                            <button class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><BsFillTrashFill /></button>
                        </li>
                    </ul>
                </td>
            </tr>
        )
    })

    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Employee Code</th>
                        <th>Title</th>
                        <th>First Name</th>
                        <th>Gender</th>
                        <th>Birth Date</th>
                        <th>Contact Number</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {DisplayData}

                </tbody>
            </table>

        </div>
    )
}

export default EmpTable
