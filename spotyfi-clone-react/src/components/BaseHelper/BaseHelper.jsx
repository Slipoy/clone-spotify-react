import React, {forwardRef} from "react";




function BaseHelper({children},ref){
    return(
        <div ref={ref} className='fixed truncate bg-[#ffffff1a] px-2 py-1 text-[12px] rounded shadow-xl'>
            {children}
        </div>
    )
}
export default forwardRef(BaseHelper);

//-top-8 -left-8