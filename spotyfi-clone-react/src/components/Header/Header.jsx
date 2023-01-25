import React from "react"
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/outline";
import BaseButton from "../BaseButton/BaseButton";


const Header = ()=>{
    return(
        <header className="bg-[#070707] flex-1 flex items-center justify-between py-[10px] px-[32px] sticky top-0 z-10">
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

            <div>
                <BaseButton classes={'text-gray-400 hover:text-white'}>Sign up</BaseButton>
                <BaseButton primery>Log in</BaseButton>

            </div>

        </header>
    )
}
export default Header