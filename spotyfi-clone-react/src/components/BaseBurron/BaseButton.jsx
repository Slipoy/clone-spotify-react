import React, {useEffect} from "react";


function BaseButton({primery, classes,onClick: handleClick, children: label}) {
    const typeClasses = primery ? 'bg-white text-[#2e2e2e] hover:bg-gray-100' : 'text-white'

    return (
        <button onClick={handleClick} className={`font-bold leading-5
        py-[9px] px-[38px] rounded-full
         hover:scale-105 ${typeClasses} ${classes}`}>
            {label}
        </button>

    )


}


export default BaseButton