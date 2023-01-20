import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Footer from "./Footer";

const TheSidebar = ({showPopover})=>{
    return(
        <aside className="sticky top-0 bg-black w-[256px] text-[#b2b2b2] flex flex-col overflow-auto">
            <Logo/>
            <Nav showPopover={showPopover}/>
            <Footer/>
        </aside>
    )
}
export default TheSidebar
