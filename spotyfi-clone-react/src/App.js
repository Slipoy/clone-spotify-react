import TheSidebar from "./components/Sidebar/TheSidebar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Registration from "./components/Registration";
import {useEffect, useRef} from "react";


function App() {
    const contentWrapperRef = useRef(null)
    let isScrollingEnable = true
    const toggleScrolling = (isEnable)=>{
        isScrollingEnable = isEnable

    }
    const handleScrolling = (e)=>{
        if (isScrollingEnable) return

        e.preventDefault()
        e.stopPropagation()

    }
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
              <TheSidebar/>
              <div className="flex-1 overflow-auto" ref={contentWrapperRef}>
                  <Header/>
                  <Main toggleScrolling={toggleScrolling}/>
              </div>
          </div>
          <Registration/>
      </div>
  );
}

export default App;
