import React from "react";


function BasePopoverTriangle({side}){
    if (side === 'top'){
        return(
            <div className='w-20 h-20 absolute -left-4 -top-20 flex justify-center items-end overflow-hidden pointer-events-none'>
                <div className='w-3 h-3 bg-[#0e72ea] shadow-2xl translate-y-1/2 rotate-45 pointer-events-auto'></div>
            </div>
        )
    }
    return (
        <div className='w-20 h-20 absolute -top-4 -left-20 flex justify-end items-center overflow-hidden pointer-events-none'>
            <div className='w-3 h-3 bg-[#0e72ea] shadow-2xl translate-x-1/2 rotate-45 pointer-events-auto'></div>
        </div>
    )

}
export default BasePopoverTriangle