import React from "react";


function BaseButton({primery,accent, classes,onClick: handleClick, children: label, href}) {
    let typeClasses = null;

    if (primery){
        typeClasses = `text-[#2e2e2e] bg-white hover:bg-gray-100 leading-5 py-[14px] px-[38px]`;

    }else if (accent){
        typeClasses = 'bg-[#1bd760] hover:bg-[#1cdf63] text-black py-1 px-4 uppercase leading-normal'

    }else {
        typeClasses = 'text-white leading-5 py-[14px] px-[38px]'

    }

    return (
        <a href={href}>
            <button  onClick={handleClick}
                     className={`font-semibold rounded-full hover:scale-105 ${typeClasses} ${classes}`}>
                {label}
            </button>
        </a>


    )


}


export default BaseButton