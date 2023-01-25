import React from "react";
import BaseButton from "./BaseButton/BaseButton";

const Registration = ()=>{
    return(
        <a href="#" className="bg-gradient-to-r from-[#af2896] to-[#509bf5] text-white py-4 px-8 flex justify-between items-center">
            <div>
                <p className="text-xs uppercase tracking-widest mb-1">Preview of Spotify</p>
                <p className="leading-6 xt-[14px] tracking-widest">Sign up to get unlimited songs and podcust with occasional
                    ands. o credit card needed</p>
            </div>
            <BaseButton primery>Sign up free</BaseButton>
        </a>
    )
}

export default Registration