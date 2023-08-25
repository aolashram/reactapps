import React from 'react'

import { menulist } from '../data/MenuData'
import MenuSet from './MenuSet'

const Test = () => {
    return (
        <div className="main-wrapper">
            <div class="sidebar" id="sidebar">
                <div class="sidebar-inner slimscroll">
                    <div id="sidebar-menu" class="sidebar-menu">
                        {
                            menulist.map((list) => {
                                // console.log(list.title)
                                // console.log(list.menus)
                                return (<MenuSet menu={list} />)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test
