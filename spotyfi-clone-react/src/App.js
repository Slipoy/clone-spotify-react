import TheSidebar from "./components/Sidebar/TheSidebar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Registration from "./components/Registration";
import {useEffect, useRef} from "react";
import BaseToast from "./components/BaseToast";
import React, {useState} from "react";
import BasePopover from "./components/BasePopover";


function App() {
    const contentWrapperRef = useRef()
    let isScrollingEnable = true
    const toggleScrolling = (isEnable)=>{
        isScrollingEnable = isEnable

    }
    const handleScrolling = (e)=>{
        if (isScrollingEnable) return

        e.preventDefault()
        e.stopPropagation()

    }

    //for modal wind

    const popoverRef = useRef()
    const toastRef = useRef(null)
    const showToast = (message)=>{
        navigator.clipboard.writeText(message).then(()=>{
            toastRef.current.show();
        })
    }
    const showPopover = (title, description)=> popoverRef.current.show(title, description);

    useEffect(()=>{
        const contentWrapper = contentWrapperRef.current;
        contentWrapper.addEventListener("wheel", handleScrolling)
        return ()=>{
            contentWrapper.removeEventListener("wheel", handleScrolling)
        }
    })
  return (
      <div className='flex flex-col h-screen bg-[#121212]'>
          <div className="flex overflow-auto">
              <TheSidebar showPopover={showPopover}/>
              <div className="flex-1 overflow-auto" ref={contentWrapperRef}>
                  <Header/>
                  <Main showPopover={showPopover} showToast={showToast} toggleScrolling={toggleScrolling}/>
              </div>
          </div>
          <Registration/>
          <BaseToast test={''} ref={toastRef}/>
          <BasePopover ref={popoverRef}/>
      </div>
  );
}

export default App;
