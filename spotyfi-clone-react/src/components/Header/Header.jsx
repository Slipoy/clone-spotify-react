import React, {useRef} from "react"
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/outline";
import BaseButton from "../BaseButton/BaseButton";
import useOpacityHeader from "../../hooks/useOpacityHeader";
import {connect} from "react-redux";
import {setToken} from "../Redux/authorization";


const Header = ({headerRef,href,token,logout})=>{
    // const headerRef = useRef()
    // useOpacityHeader(mainRef,headerRef, 50, 100);



    return(
        <header className={`relative flex-1 flex items-center justify-between py-[10px] px-[32px] sticky top-0 z-10`}>
            <div ref={headerRef} className='opacity-50 absolute top-0 left-0 w-full h-full -z-10 bg-[#070707]'></div>
            <div className="flex">
                <a href="spotyfi-clone-react/src/components/Header/Header#"
                   className="mr-[8px] text-[#969696] p-1 cursor-not-allowed">
                    <ChevronLeftIcon className='w-6 h-6'/>
                </a>
                <a href="spotyfi-clone-react/src/components/Header/Header#"
                   className="ml-[8px] text-[#969696] p-1 cursor-not-allowed">
                    <ChevronRightIcon className='w-6 h-6'/>
                </a>
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
        token:state.authorization.token
    }
}

export default connect(mapStateToProps, {setToken})(Header);