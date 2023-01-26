import BaseModal from "../BaseModal/BaseModal";
import React from "react";
import BaseButton from "../BaseButton/BaseButton";
import BaseCheckBox from "../BaseCheckBox";


function ThemodalEmbedPlaylist({onClose:handleClose,coverUrl, title}){
return(
    <BaseModal classes='w-[660px] bg-neutral-900' onClose={handleClose}>
        <h1 className='text-3xl pt-8 pb-3 px-8 font-bold leading-relaxed '>TEST</h1>
        <div>
            <div className='w-[600px] h-[352px] max-h-[352px] bg-white rounded-2xl mx-auto overflow-hidden'>
                <div className='bg-[#82791B] h-1/2 flex'>
                    <div className='w-[152px] h-[152px] rounded-xl overflow-hidden'><img src={coverUrl} alt=""/></div>
                    <div>
                        <h2>{title}</h2>
                        <span>Spotify</span>
                        <span>просмотр</span>
                    </div>

                </div>
            </div>
        </div>
        <div className='py-6 px-8 text-neutral-500 text-[13px]'>
            Lorem ipsum dolor sit amet,<a href="/" className='text-white font-bold hover:underline'>consectetur adipisicing elit.</a>  Accusantium at aut nihil quod tempora velit?
        </div>
        <div className='flex justify-end items-center gap-4 pb-6 px-8'>
            <BaseCheckBox id='checkbox'>Show code</BaseCheckBox>
            <BaseButton accent>Copy</BaseButton>
        </div>
    </BaseModal>
)
}

export default ThemodalEmbedPlaylist;