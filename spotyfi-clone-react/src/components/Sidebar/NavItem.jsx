import React from "react";


const NavItem = ({item})=>{
    function  handleClick(event){
        if (!item.action)return
        event.preventDefault()
        item.action()
    }
    return(
        <a href="/" className= {item.class} key={item.label} onClick={handleClick}>
            {item.icon}
            <span className="ml-4 text-sm font-semibold">{item.label}</span>
        </a>

    )
}

export default NavItem