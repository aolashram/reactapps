import React from 'react'
import MenuItem from './MenuItem'
import MenuTitle from './MenuTitle'


const MenuSet = ({ menu }) => {
    //console.log(props)
    return (
        <>
            <MenuTitle title={menu.title} /> {/* Title */}
            {/* Loop through 'menus' */}
            {
                menu.menus.map((mnu) => {

                    console.log(mnu)
                    return (
                        <MenuItem attrr={mnu} />
                    )
                })
            }
        </>
    )
}

export default MenuSet
