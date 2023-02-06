import TheSidebar from "./components/Sidebar/TheSidebar";
import Registration from "./components/Registration";
import {useEffect, useRef} from "react";
import BaseToast from "./components/BaseToast";
import React, {useState} from "react";
import BasePopover from "./components/BasePopover/BasePopover";
import useEvent from "./hooks/useEvent";
import {Routes, Route} from "react-router-dom";
import MainPlaylist from "./components/MainPlaylist/MainPlaylist";
import HomeSection from "./components/HomeSection/HomeSection";
import axios from "axios";
import {connect} from "react-redux";
import {setToken} from "./components/Redux/authorization";
import Header from "./components/Header/Header";


function App({setToken, isAuth,token}) {
    const CLIENT_ID = '2371982b3d99427db8d4319404e27aa2';
    const REDIRECT_URI = 'http://localhost:3000'
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = 'token'

    const href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`


// const [token, setToken] = useState('');
    const [searchKey, setSearchKey]= useState()
    useEffect(()=>{
        const hash = window.location.hash;
        let token = window.localStorage.getItem('token');
        if (!token && hash){
            token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];

            window.location.hash = ''
            window.localStorage.setItem("token", token)

        }

        setToken(token)
    },[])

    const logout = ()=>{
        setToken('');
        window.localStorage.removeItem('token')
    }

    const getMusic = async (e)=>{
        e.preventDefault()

        const {data} = await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }





    const contentWrapperRef = useRef()
    let isScrollingEnable = true;

    const handleScrolling = (e)=>{
        if (isScrollingEnable) return
        e.preventDefault()
        e.stopPropagation()

    }
    useEvent('wheel',handleScrolling, true, ()=>contentWrapperRef.current)
    const toggleScrolling = (isEnable)=>{
        isScrollingEnable = isEnable

    }

    //for modal wind

    const popoverRef = useRef()
    const toastRef = useRef(null)
    const showToast = (message)=>{
        navigator.clipboard.writeText(message).then(()=>{
            toastRef.current.show();
        })
    }
    const showPopover = (title, description,target, offset)=> popoverRef.current.show(title, description,target,offset);

    const mainRef = useRef()

  return (
      <div className='flex flex-col h-screen bg-[#121212]'>
          <div className="flex overflow-auto">
              <TheSidebar showPopover={showPopover}/>
              <div className="flex-1 overflow-auto" ref={contentWrapperRef}>
                  <Header href={href}/>
                  <Routes>
                      <Route path='/playlist/:title' element={<MainPlaylist showPopover={showPopover} showToast={showToast} toggleScrolling={toggleScrolling} />} />
                      <Route path='/' element={<HomeSection  showPopover={showPopover} showToast={showToast} toggleScrolling={toggleScrolling} />} />
                  </Routes>


              </div>
          </div>
          <Registration/>
          <BaseToast test={''} ref={toastRef}/>
          <BasePopover ref={popoverRef}/>
          <div onClick={getMusic} className='bg-white w-[100px] h-[100px]'> clock!</div>
      </div>
  );
}

let mapStateToProps = (state)=>{
    return{
        isAuth: state.authorization.isAuth,
        token:state.authorization.token
    }
}

export default connect(mapStateToProps, {setToken})(App);
