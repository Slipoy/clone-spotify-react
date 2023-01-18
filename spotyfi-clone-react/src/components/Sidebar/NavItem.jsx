import React from "react";


const NavItem = ({item})=>{
    return(
        <a href="/" className= {item.class} key={item.label}>
            {item.icon}
            <span className="ml-4 text-sm font-semibold">{item.label}</span>
        </a>

    )
}

export default NavItem