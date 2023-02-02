import React, {forwardRef, useEffect, useRef} from "react";
import { ThreeDots } from 'react-loader-spinner'
import {useState} from "react";


function MusicFrame({getTextFrame,size,frameUrl}){
    let width = parseInt(size.width);
    if (width < parseInt('40%')){
        width = 40;
    }else if (width > parseInt('100%'))width = 100;



    const ref = useRef()
    useEffect(()=>{
        getTextFrame(ref)
    })
    return (
        <div ref={ref} className='flex justify-center items-center w-[600px] h-[352px] max-h-[352px] rounded-2xl mx-auto overflow-hidden'>
            <iframe
                src={frameUrl}
                width={width + '%'} height={size.height} frameBorder="0" allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"></iframe>
        </div>

    )
}
export default MusicFrame;