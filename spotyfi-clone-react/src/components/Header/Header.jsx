import React, {useEffect, useState} from "react"
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/outline";
import BaseButton from "../BaseButton/BaseButton";

import {connect} from "react-redux";
import {setToken} from "../Redux/authorization";
import {compose} from "redux";
import {withRouter} from "../../hooks/withRouter";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

import playlist from "../Main/Playlist/Playlist";
import useHeaderPlayBtnOpacity from "../../hooks/useHeaderPlayBtnOpacity";


const Header = ({headerRef,href,token,logout,router, playBtnRef,contentWrapperRef})=>{

    useEffect(()=>{
        const test = router.location.pathname
        const testName = test.substring(1).split('/')[1];
        if (testName === "playlist"){
            setPlayBtn(true)
        }else setPlayBtn(false)
    })
    const [isPlayBtn, setPlayBtn] = useState(false);
    const {classesShow} = useHeaderPlayBtnOpacity(playBtnRef,headerRef,contentWrapperRef)



    return(
        <header className={`relative flex-1 flex items-center justify-between py-[10px] px-[32px] sticky top-0 z-10`}>
            <div ref={headerRef} className='opacity-50 absolute top-0 left-0 w-full h-full -z-10 bg-[#070707]'></div>
            <div className="flex items-center">
                <a href="spotyfi-clone-react/src/components/Header/Header#"
                   className="mr-[8px] text-[#969696] p-1 cursor-not-allowed">
                    <ChevronLeftIcon className='w-6 h-6'/>
                </a>
                <a href="spotyfi-clone-react/src/components/Header/Header#"
                   className="mx-[8px] text-[#969696] p-1 cursor-not-allowed">
                    <ChevronRightIcon className='w-6 h-6'/>
                </a>
                {
                    isPlayBtn && <HeaderMenu classes={classesShow}/>
                }

            </div>

            {
                !token ? <div className=''>
                    <BaseButton classes={'text-gray-400 hover:text-white'}>Sign up</BaseButton>
                    <BaseButton href={href} primery>Log in</BaseButton>

                </div>: <BaseButton onClick={logout} primery>Log out</BaseButton>
            }


        </header>
    )
}
let mapStateToProps = (state)=>{
    return{
        isAuth: state.authorization.isAuth,
        token:state.authorization.token,
        playlists: state.homePagePlaylists.currentPlaylist
    }
}

export default compose (connect(mapStateToProps, {setToken}),withRouter)(Header);