import React from 'react'
//import Navbar from './navbar'

function NavbarItem( {render, ...props}){
    if(render){
        return(
            <li className="nav-item">
                <a onClick={props.onClick} className="nav-link" href={props.href}>{props.label}</a>
            </li>
        )
    }else{
        return false
    }
    
}

export default NavbarItem