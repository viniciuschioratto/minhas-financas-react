import React from 'react'
import Navbar from './navbar'

function NavbarItem(props){
    return(
        <li className="nav-item">
            <a className="nav-link" href={props.href}>{props.label}</a>
        </li>
    )
}

export default NavbarItem