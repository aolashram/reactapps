import React from 'react'

const NavLink = (props) => {
    return (
        <a href="#"><i class={props.icon}></i> <span> {props.title}</span> <span class="menu-arrow"></span></a>
    )
}

export default NavLink
