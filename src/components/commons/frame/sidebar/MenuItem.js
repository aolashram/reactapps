import React from 'react'
import NavLink from './NavLink'
const MenuItem = (props) => {
    console.log("Inside Menu item")
    console.log(props.attrr)
    return (
        <li class="submenu">
            {/* <a href="#"><i class={props.attrr.icon}></i> <span> {props.attrr.name}</span><span class="menu-arrow"></span>
            </a> */}
            <NavLink icon={props.attrr.icon} title={props.attrr.name} hassubmenu="1" />

            {/* <ul style={{ display: 'none' }}>
                <li><a href="index.php">Admin Dashboard</a></li>
                <li><a href="employee-dashboard.php">Employee Dashboard</a></li>
            </ul> */}
        </li>
    )
}

export default MenuItem
