import React, {useRef} from "react";


const NavItem = ({item})=>{
    const labelRef = useRef()
    function  handleClick(event){
        if (!item.action)return
        event.preventDefault()
        item.action(labelRef.current)
    }
    return(
        <a href="/" className= {item.class} key={item.label} onClick={handleClick}>
            {item.icon}
            <span ref={labelRef} className="ml-4 text-sm font-semibold">{item.label}</span>
        </a>

    )
}

export default NavItem