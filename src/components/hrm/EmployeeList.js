import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmpTable from '../commons/EmpTable';
import MyTable from './MyTable';
import { EmployeeData, empColumns, EData } from './data/getEmp';
import MaterialTable from 'material-table'
import { ThemeProvider, createTheme } from '@mui/material';
import tableIcons from '../commons/TableIcons';

const baseURL = "/api/v1/employees";

const EmployeeList = () => {

    const [empList, setEmpList] = useState([]);

    React.useEffect(() => {
        axios.get(baseURL)
            .then(response => {
                //console.log(res);
                //console.log(response.data);
                const emps = response.data;
                setEmpList(emps);
                console.log(empList);
            })
    })

    //     axios.get(baseURL).then((response) => {
    //         setEmpList(response.data);
    //         console.log(empList)
    //     });
    // }, []);
    // if (!empList) return null;
    const navigate = useNavigate();

    const actions =
        [
            {
                icon: tableIcons.View,
                tooltip: "View Employee",
                onClick: (event, rowData) => navigate("/hrm/profile", { state: { empCode: rowData.empCode } }),
                //navigate("/hrm/profile", { state: { empCode: rowData.empCode } })
            },
            // {
            //     icon: tableIcons.Delete,
            //     tooltip: "Delete User",
            //     onClick: (event, rowData) => alert("You want to delete " + rowData.name),
            // },
            // {
            //     icon: tableIcons.Add,
            //     tooltip: "Add User",
            //     isFreeAction: true,
            //     onClick: (event) => alert("You want to add a new row"),
            // },
        ];
    const defaultMaterialTheme = createTheme();

    return (
        <div>
            <div style={{ maxWidth: '100%' }}>
                <ThemeProvider theme={defaultMaterialTheme}>
                    <MaterialTable
                        columns={[
                            { title: 'Employee Code', field: 'empCode' },
                            // { title: 'Title', field: 'title' },
                            { title: 'First Name', field: 'firstName' },
                            { title: 'Gender', field: 'gender' },
                            { title: 'Birth Date', field: 'dob' },
                            { title: 'Contact Number', field: 'contactNumber' },
                            { title: 'Department', field: 'department' },
                            { title: 'Designation', field: 'jobrole' },
                            { title: 'Joined Date', field: 'doj' },
                        ]}
                        data={empList}//{[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
                        title="Empoyee List"
                        icons={tableIcons}
                        options={{
                            headerStyle: {
                                backgroundColor: '#01579b',
                                color: '#FFF',
                                fontWeight: '700',
                                fontSize: '16px',
                            }
                        }}
                        options={{
                            exportButton: true,
                        }}
                        options={{
                            filtering: false,
                        }}
                        actions={actions}
                    />
                </ThemeProvider>
            </div>
        </div >
    )
}

export default EmployeeList
