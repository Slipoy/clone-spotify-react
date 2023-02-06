import React, {useEffect, useRef, useState} from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import {debounce} from "../../utils";
import useOpacityHeader from "../../hooks/useOpacityHeader";




function HomeSection({showPopover,showToast,toggleScrolling,href,token,logout}){
    const mainRef = useRef()
    return(
        <>
            <Main ref={mainRef} showPopover={showPopover} showToast={showToast} toggleScrolling={toggleScrolling}/>
        </>

    )
}
export default HomeSection;