import React, { forwardRef } from "react";

import MaterialTable from "material-table";
import tableIcons from "../commons/TableIcons";


const data = [
    { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
    { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
];

const columns = [
    { title: "Name", field: "name", },
    { title: "Surname", field: "surname" },
    { title: "Birth Year", field: "birthYear", type: "numeric" },
];

const MyTable = () => {
    return <MaterialTable icons={tableIcons} title="Basic Table" columns={columns} data={data} />;
}

export default MyTable;